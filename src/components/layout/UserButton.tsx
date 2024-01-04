import styles from '@/styles/layout/UserButton.module.css'
import { IconUser } from '../Icons'


export const UserButton = () => {
  return (
    <section className={styles.user_menu}>
    {/* TODO: Crear botones para ir a registro/login y boton para abrir menu de usuario */}
    Login/Register <IconUser size={30} />
  </section>
  )
}
