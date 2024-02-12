'use client'
import styles from '@/styles/layout/UserButton.module.css'
import { IconLogout, IconUser } from '../Icons'
import { useModalStore } from '@/store/modal-store'
import { useSession } from 'next-auth/react'
import { signOut } from "next-auth/react"
import Link from 'next/link'
import useUserData from '@/hooks/user'
import { UserCard_Skeleton } from '../Skeletons/UserCard_Skeleton'


export const UserButton = () => {
  const { toggleModal } = useModalStore()
  const { data, status } = useSession()
  const user:any = data?.user
  const userState: any = useUserData(user?.user_id)
  
  if(status === 'loading') {
    return (<UserCard_Skeleton />)
  }
  if(status === 'authenticated' && data?.user) {
    // console.log(usernew)
    const handleLogout = async () => {
      signOut()
    }  
  return(
    <section className={styles.user_menu}>
      <Link 
        href={`/user/${userState?.user_id}`}
        className={styles.btn_user}
      >
        <img src={userState?.user_avatar} alt='imagen de usuario' width={50} height={50}/>
          {userState?.user_name}
      </Link>
      <button
        onClick={handleLogout}
        className={styles.btn_logout}
      >
        <IconLogout size={20}/>
      </button>
    </section>
  )  
  }

  return (
    <button 
      onClick={toggleModal}
      className={styles.btn_user}
    >
      Login/Register <IconUser size={30} />
    </button>
  )
}
