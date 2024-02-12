import { User } from '@/types/types'
import styles from '@/styles/user/UpdateProfileUser.module.css'
import { useState } from 'react'
import { uploadToCloudinary } from '@/config/cloudinary'
import { useSession, signOut } from 'next-auth/react'
import { UpdateUserById, deleteUser, updateUserPassword } from '@/controllers/users'
// import { useRouter } from 'next/router';


interface Props {
  user: User,
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

type FormValues = {
  oldPass: string, 
  newPass: string, 
  newPassB: string, 
}
export const UpdateProfileUser: React.FC<Props> = ({user,isOpen, setIsOpen}) => {
  const { data, status, update } = useSession()

  const userActive: any  = data?.user
  const [isOpenPassword, setIsOpenPassword] = useState(false)
  const [userName, setUserName] = useState<string>(user.user_name)
  const [userEmail, setUserEmail] = useState(user.user_email)
  const [userAvatar, setUserAvatar] = useState(user.user_avatar)
  const [userNetworks, setUserNetworks] = useState(user.user_networks)
  const [isError, setIsError] = useState<{type: number, msg: string}>({type: 0, msg: ''})
  const [isUploadImage, setIsUploadImage] = useState(false)
  const [isDelete, setIsDelete] = useState(false)



  if(status === 'loading') {
    return (<div>Cargando...</div>)
  }

  if(status === 'authenticated' && data?.user) {
  const handleUpdateUser = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newUser  = {
      ...user,
      user_name: userName,
      user_email: userEmail,
      user_avatar: userAvatar,
      user_networks: userNetworks
    }
    const updatedUser = await UpdateUserById(userActive.user_id, newUser, user.user_name, user.user_email)
    if(!updatedUser.ok){
      setIsError({
        type: updatedUser.type,
        msg: updatedUser.message
      })
      return
    }
    
    update(newUser)
    setIsOpen(false)

  }
  const handleUpdatePassword = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const {newPass, newPassB, oldPass}: FormValues = Object.fromEntries(formData.entries()) as FormValues
    // console.log(userActive.user_email)
    const passUpdated = await updateUserPassword(userActive, userActive.user_id, oldPass, newPass, newPassB )
    if(!passUpdated.ok) {
      setIsError({ type: passUpdated.type, msg: passUpdated.msg})
      return
    }
    setIsError({ type: 0, msg: ''})
  }

  const handleUploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    setIsUploadImage(true)
    const imageFile = event.target.files?.[0]
    if (imageFile) {
      const imageData = await uploadToCloudinary(imageFile);      
      if (imageData) {
        setUserAvatar(imageData.url);
        setIsUploadImage(false)
      }      
    }
  }

  const handleDeleteUser = async () => {
    const isdeleted = await deleteUser(userActive.user_id)
    if(!isdeleted.ok) return setIsError({
      type: 20,
      msg: 'No se ha podido borrar el usuario'
    })
    await signOut()
    window.location.href = '/'

    
  }

  return (
    <article className={styles.modal_container}>
      <button 
        className={styles.btn_close}
        type='button'
        onClick={() => {setIsOpen(!isOpen)}}
      >X</button>
      <h2>Actualizar Perfil</h2>
      <form onSubmit={handleUpdateUser} className={styles.form_container}>
        <section className={styles.form_user}>
          <header className={styles.form_user_avatar}>
            <label className={styles.form_user_avatar_label}>
              <img 
                className={styles.avatar_image}
                src={userAvatar} 
                alt={`Imagen de avatar del usuario ${user.user_name}`} 
                width={150} 
                height={150}
              />
              <input
                type='file'
                name='avatar'
                hidden
                onChange={handleUploadImage}
              />
            </label>
          </header>
          <div className={styles.form_user_data}>
            <label className={styles.form_label}>
              Nombre: 
              <input 
                value={userName}
                onChange={(event) => {setUserName(event.target.value)}}
              />
              {
                isError.type === 1 && <small>{isError.msg}</small>
              }
            </label>
            <label className={styles.form_label}>
              Email: 
              <input 
              type='email'
              value={userEmail}
              onChange={(event) => {setUserEmail(event.target.value)}}
              />
              {
                isError.type === 2 && <small>{isError.msg}</small>
              }
            </label>
            <div className={styles.form_button_group}>
              <button 
                type='button'
                className={styles.form_btn_pass}
                onClick={() => {setIsOpenPassword(!isOpenPassword)}}
              >
                Password
              </button>
              <button 
                type='button'
                onClick={() => { setIsDelete(true)}}
                className={styles.form_btn_delete}
              >
                Eliminar
              </button>
            </div>
          </div>
        </section>
        {
          isDelete && (
            <section>
            De verdad quiere borrar el perfil?, perdera todo el progreso y el proceso no es reversible
            <button 
              type='button'
              onClick={handleDeleteUser}
              className={styles.form_btn_delete}
            >
              Eliminar
            </button>
            <button 
              type='button'
              onClick={() => { setIsDelete(false)}}
              className={styles.form_btn_delete}
            >
              Cancelar
            </button>
          </section>
          )
        }
        <section className={styles.form_section}>
        {
          userNetworks.map((net) => (
            <label 
              className={styles.form_label}
              key={net.network_id}
            >
            {net.network_name}
            <input 
              value={net.network_url}
              onChange={(event) => {
                setUserNetworks((prevNetworks) => {
                  const updatedNetworks = [...prevNetworks]
                  net.network_url = event.target.value
                  return updatedNetworks
                })
              }}
            />
          </label>
          ))
        }
        </section>
          <button disabled={isUploadImage} className={isUploadImage ? styles.form_btn_update_pass_disabled : styles.form_btn_update_pass}>Actualizar Usuario</button>
      </form>
      {
          isOpenPassword && (
            <form 
              className={styles.form_section_password}
              onSubmit={handleUpdatePassword}
            >
              <label className={styles.form_label}>
                Password Actual:
                <input 
                  type='password'
                  name='oldPass'
                />
              {
                isError.type === 10 || isError.type === 13 && <small>{isError.msg}</small>
              }
              </label>
              <label className={styles.form_label}>
                Nuevo Password:
                <input 
                  type='password'
                  name='newPass'
                />
              {
                (isError.type === 10 || isError.type === 11 || isError.type === 12) && <small>{isError.msg}</small>
              }
              </label>
              <label className={styles.form_label}>
                Repita Password:
                <input 
                  type='password'
                  name='newPassB'
                />
              {
                (isError.type === 10 || isError.type === 12) && <small>{isError.msg}</small>
              }
              </label>
              <button 
                className={styles.form_btn_update_pass}
                // onClick={handleUpdatePassword}
              >
                Actualizar Pasword
              </button>
            </form>
          )
        }
    </article>
  )}


}
