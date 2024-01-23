'use client'
import styles from '@/styles/layout/UserButton.module.css'
import { IconUser } from '../Icons'
import { useModalStore } from '@/store/modal-store'
import { useSession } from 'next-auth/react'
import Link from 'next/link'


export const UserButton = () => {
  const { toggleModal } = useModalStore()
  const { data, status } = useSession()

  console.log({data, status})
  return (
    <section className={styles.user_menu}>
    {/* TODO: Crear botones para ir a registro/login y boton para abrir menu de usuario */}
    <button 
      onClick={toggleModal}
      className={styles.btn_user}
    >
      Login/Register <IconUser size={30} />
    </button> 
    {
      (status === "authenticated") 
        ? <Link href='/api/auth/signout'>signout</Link>
        : <Link href='/api/auth/signin'>SignIn</Link>
    }

  </section>
  )
}
