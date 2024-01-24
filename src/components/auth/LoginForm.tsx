import { useModalStore } from '@/store/modal-store'
import styles from '@/styles/modalLogin/LoginForm.module.css'
import { CreateUser } from '@/types/types'
import { signIn } from 'next-auth/react'

interface Props {
  toRegister: React.Dispatch<React.SetStateAction<boolean>>
}
export const LoginForm: React.FC<Props> = ({ toRegister }) => {
  const { toggleModal } = useModalStore()
  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const userData = Object.fromEntries(formData.entries()) as CreateUser;
    const res = await signIn('credentials', {
      email: userData.user_email,
      password: userData.user_password
    })
  }
  return (
    <section className={styles.container}>
      <picture className={styles.picture_container}>
        <img 
          src="./static_img/login.webp"
          alt="Imagen de Ahsoka Tano para la pantalla de login"
          width={600}
          height={800}
          className={styles.loginImage}
        />
      </picture>
      <section className={styles.user_section}>
        <button 
          onClick={toggleModal}
          className={styles.btn_close}
        >X</button>
        <header className={styles.form_container}>
          <h2 className={styles.title}>Login</h2>
          <form 
            className={styles.form}
            onSubmit={handleLogin}
          >
            <label className={styles.form_label}>
            Email: 
            <input 
                className={styles.form_input}
                type="email"
                name='user_email'
                placeholder="email@email.com"
                autoComplete="off"
                />
            </label>
            <label className={styles.form_label}>
              password: 
              <input 
                className={styles.form_input}
                type="password"
                name='user_password'
                placeholder="Password"
                autoComplete="off"
                />
            </label>
          <button>Enviar</button>
          </form>
          <button onClick={() => signIn("github")}>Sign in with Github</button>
        </header>

        <div className={styles.footer}>
          <p className={styles.footer_text}>No tienes cuenta</p>
        <button
          onClick={() => {toRegister(false)}}
          className={styles.btn_redirect}
          >
          Registrate
        </button>
          </div>
      </section>
    </section>
  )
}
