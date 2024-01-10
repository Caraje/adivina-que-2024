'use client'
import { useModalStore } from '@/store/modal-store'
import styles from '@/styles/modalLogin/modalLogin.module.css'
import { useState } from 'react'
import { LoginForm } from './LoginForm'
import { RegisterForm } from './RegisterForm'


export const Login = () => {
  const [isLogin, setIsLogin] = useState<boolean>(true)
  const {isModalOpen, toggleModal } = useModalStore()

  return (
    <dialog 
      className={!isModalOpen ? styles.modal_hide : styles.modal }
      open={isModalOpen}
    >
        {
          isLogin 
            ? <LoginForm toRegister={setIsLogin}/>
            : <RegisterForm toLogin={setIsLogin}/>
        }
    </dialog>
  )
}
 

