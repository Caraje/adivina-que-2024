'use client'
import styles from '@/styles/layout/UserButton.module.css'
import { IconUser } from '../Icons'
import { useModalStore } from '@/store/modal-store'
import { useSession } from 'next-auth/react'
import { signOut } from "next-auth/react"
import Link from 'next/link'


export const UserButton = () => {
  const { toggleModal } = useModalStore()
  const { data, status } = useSession()
  const user:any = data?.user
  
  const handleLogout = async () => {
    signOut()
  }
  return (
    <section className={styles.user_menu}>
    {/* TODO: Crear botones para ir a registro/login y boton para abrir menu de usuario */}
    {
      status === 'authenticated' ?
        <Link href={`/user/${user.user_id}`}>
          <img src={user.user_avatar} alt='imagen de usuario' width={50} height={50}/>
          {user.user_name}
        </Link>
        : (
        <button 
          onClick={toggleModal}
          className={styles.btn_user}
        >
          Login/Register <IconUser size={30} />
        </button>) 
    }
    
    {/* {
      (status === "authenticated") 
        ? <Link href='/api/auth/signout'>signout</Link>
        : <Link href='/api/auth/signin'>SignIn</Link>
    } */}
    {
      (status === "authenticated") &&
        (
        <button
          onClick={handleLogout}
        >
          logout
        </button>
        )
    }


  </section>
  )
}
