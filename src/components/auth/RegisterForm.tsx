import { useModalStore } from "@/store/modal-store"
import styles from '@/styles/modalLogin/RegisterForm.module.css'
import { createUser } from "@/controllers/register";
import { useState } from "react";



interface Props {
  toLogin: React.Dispatch<React.SetStateAction<boolean>>
}
export const RegisterForm: React.FC<Props> = ({ toLogin }) => {
  const { toggleModal } = useModalStore()
  const [isError, setisError] = useState({
    status: false,
    message: ''
  })
  const handleForm = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const userData = Object.fromEntries(formData.entries())
    const newUser = await createUser(userData)
    if (newUser.error) {
      setisError({status:true, message: newUser.message})
    }

  }

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
                name='name'
              />
            </label>
            <label className={styles.form_label}>
              Email: 
              <input 
                className={styles.form_input}
                type="email"
                name='email'
              />
            </label>
            <label className={styles.form_label}>
              Password: 
              <input 
                className={styles.form_input}
                type="password"
                name='password'
              />
              {
                isError.status && <p>{isError.message}</p>
              }
            </label>
            <label className={styles.form_label}>
              Repite password: 
              <input 
                className={styles.form_input}
                type="password"
                name='password_repeat'
              />
              {
                isError.status && isError.message
              }
            </label>
            <button>Enviar</button>
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
          src="./static_img/register.webp"
          alt="Imagen de Ahsoka Tano para la pantalla de login"
          width={600}
          height={800}
          className={styles.loginImage}
        />
      </picture>
    </section>
  )
}
