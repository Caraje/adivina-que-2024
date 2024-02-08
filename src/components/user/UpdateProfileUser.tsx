import { ImageCloudinary, User } from '@/types/types'
import styles from '@/styles/user/UpdateProfileUser.module.css'
import { useState } from 'react'
import { uploadToCloudinary } from '@/config/cloudinary'

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
  const [isOpenPassword, setIsOpenPassword] = useState(false)
  const [userName, setUserName] = useState<string>(user.user_name)
  const [userEmail, setUserEmail] = useState(user.user_email)
  const [userAvatar, setUserAvatar] = useState(user.user_avatar)
  const [userNetworks, setUserNetworks] = useState(user.user_networks)

  const handleForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const updatedUser  = {
      ...user,
      user_name: userName,
      user_email: userEmail,
      user_avatar: userAvatar,
      user_networks: userNetworks
    }
    console.log({updatedUser})
  }
  const handleUpdatePassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const pass: FormValues = Object.fromEntries(formData.entries()) as FormValues
  }

  const handleUploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    const imageFile = event.target.files?.[0]
    if (imageFile) {
      const imageData = await uploadToCloudinary(imageFile);      
      if (imageData) {
        setUserAvatar(imageData.url);
      }      
    }
  }

  return (
    <article className={styles.modal_container}>
      <button 
        className={styles.btn_close}
        type='button'
        onClick={() => {setIsOpen(!isOpen)}}
      >X</button>
      <h2>Actualizar Perfil</h2>
      <form onSubmit={handleForm} className={styles.form_container}>
        <section className={styles.form_user}>
          <header className={styles.form_user_avatar}>
            <label className={styles.form_user_avatar_label}>
              <img src={userAvatar} alt={`Imagen de avatar del usuario ${user.user_name}`} width={150} height={150}/>
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
            </label>
            <label className={styles.form_label}>
              Email: 
              <input 
              type='email'
              value={userEmail}
              onChange={(event) => {setUserEmail(event.target.value)}}
              />
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
                className={styles.form_btn_delete}
              >
                Eliminar
              </button>
            </div>
          </div>
        </section>
        
        
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
          <button className={styles.form_btn_update_pass}>Actualizar Usuario</button>
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
              </label>
              <label className={styles.form_label}>
                Nuevo Password:
                <input 
                  type='password'
                  name='newPass'
                />
              </label>
              <label className={styles.form_label}>
                Repita Password:
                <input 
                  type='password'
                  name='newPassB'
                />
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
  )
}
