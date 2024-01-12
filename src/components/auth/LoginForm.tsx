import { useModalStore } from '@/store/modal-store'
import styles from '@/styles/modalLogin/LoginForm.module.css'

interface Props {
  toRegister: React.Dispatch<React.SetStateAction<boolean>>
}
export const LoginForm: React.FC<Props> = ({ toRegister }) => {
  const { toggleModal } = useModalStore()
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
          <form className={styles.form}>
            <label className={styles.form_label}>
              Nombre de usuario: 
              <input className={styles.form_input}/>
            </label>
            <label className={styles.form_label}>
              password: 
              <input className={styles.form_input}/>
            </label>
          <button>Enviar</button>
          </form>
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
