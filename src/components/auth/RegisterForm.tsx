import { useModalStore } from "@/store/modal-store"
import styles from '@/styles/modalLogin/RegisterForm.module.css'
import { useState } from "react";
import { CreateUser } from "@/types/types";
import { signIn } from "next-auth/react";
import { registerNewUser } from "@/controllers/users";



interface Props {
  toLogin: React.Dispatch<React.SetStateAction<boolean>>
}
export const RegisterForm: React.FC<Props> = ({ toLogin }) => {
  const { toggleModal } = useModalStore()
  const [isError, setisError] = useState<number >(0)
  const [errorMessage, setErrorMessage] = useState<string>('')
  const handleForm = async (event: React.FormEvent<HTMLFormElement>)=> {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const userData = Object.fromEntries(formData.entries()) as CreateUser;
    try {
      const user  = await registerNewUser(userData)
      if(user.type ) {
        setisError(user.type)
        setErrorMessage(user.message)
        return
      }
      await signIn('credentials', {
        email: user.user_email,
        password: userData.user_password
      })
    } catch (error) {
      console.log(error)
      
    }

  }

  /*
    Type: 1  => Se debe introducir un nombre de usuario
    Type: 2  => Se debe introducir una dirección de correo
    Type: 3  => El password debe contener al menos 6 caracteres
    Type: 4  => El password debe coincidir
    Type: 5  => El correo ya existe 
  */
  return (
<section className={styles.container}>
      <section className={styles.user_section}>
        <button 
          onClick={toggleModal}
          className={styles.btn_close}
        >X</button>
        <header className={styles.form_container}>
          <h2 className={styles.title}>Registro</h2>
          <form 
            className={styles.form}
            onSubmit={handleForm}
          >
            <label className={styles.form_label}>
              Nombre de usuario: 
              <input 
                className={styles.form_input}
                type="text"
                name='user_name'
                placeholder="Nombre de Usuario"
                autoComplete="off"
              />
              {
                (isError === 1 || isError === 6) && 
                (<small>{errorMessage}</small>)
              }
            </label>
            <label className={styles.form_label}>
              Email: 
              <input 
                className={styles.form_input}
                type="email"
                name='user_email'
                placeholder="email@email.com"
                autoComplete="off"
                />
              {
                (isError === 2 || isError === 5) && 
                (<small>{errorMessage}</small>)
              }
            </label>
            <label className={styles.form_label}>
              Password: 
              <input 
                className={styles.form_input}
                type="password"
                name='user_password'
                placeholder="Password"
                autoComplete="off"
                />
              {
                (isError === 3 || isError === 4) && 
                (<small>{errorMessage}</small>)
              }
            </label>
            <label className={styles.form_label}>
              Repite password: 
              <input 
                className={styles.form_input}
                type="password"
                name='user_password_repeat'
                placeholder="Repite el Password"
                autoComplete="off"
                />
              {
                (isError === 4) && 
                (<small>{errorMessage}</small>)
              }
            </label>
            <button className={styles.btn_send}>Enviar</button>
          </form>
        </header>
        <div className={styles.footer}>
          <p className={styles.footer_text}>No tienes cuenta</p>
          <button
          onClick={() => {toLogin(true)}}
          className={styles.btn_redirect}
        >
          Ir a login
        </button>
          </div>

      </section>
      <picture className={styles.picture_container}>
        <img 
          src="/static_img/register.webp"
          alt="Imagen de Ahsoka Tano para la pantalla de login"
          width={600}
          height={800}
          className={styles.loginImage}
        />
      </picture>
    </section>
  )
}
