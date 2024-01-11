'use client'
import styles from '@/styles/layout/UserButton.module.css'
import { IconUser } from '../Icons'
import { useModalStore } from '@/store/modal-store'


export const UserButton = () => {
  const { toggleModal } = useModalStore()

  return (
    <section className={styles.user_menu}>
    {/* TODO: Crear botones para ir a registro/login y boton para abrir menu de usuario */}
    <button 
      onClick={toggleModal}
      className={styles.btn_user}
    >
      Login/Register <IconUser size={30} />
    </button>
  </section>
  )
}
