'use client'
import useUserData from '@/hooks/user'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import { UserDataCard }  from '@/components/user/UserDataCard'
import { ScoreCategoryCard } from './ScoreCategoryCard'
import styles from '@/styles/user/UserPageSection.module.css'
import { UpdateProfileUser } from './UpdateProfileUser'

interface Props {
  id: string
}
export const UserPageSection: React.FC<Props> = ({id}) => {
  const { data, status, update } = useSession()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const userPage: any = useUserData(id) 
  const user: any = data?.user
  if (status === 'loading') {
    return <div>Cargando...</div>
  }
  if(user?.user_id === id) {
    console.log({user})
    return (
      <>
        <section className={styles.container}>
        {
          isOpen && (
            <section className={styles.modalUpdate}>
              <UpdateProfileUser user={user} isOpen={isOpen} setIsOpen={setIsOpen}   />
            </section>
          )
        }
          <section className={styles.user_section}>
            <UserDataCard userData={userPage} isOpen={isOpen} setIsOpen={setIsOpen} isActualUser/>  
          </section>
          <section className={styles.score_section}>
            <header className={styles.score_title}>Puntuación</header>
            <section className={styles.score_cards_group}>
              <ScoreCategoryCard cat={'movies'} info={userPage?.user_datagame['movies']}/>
              <ScoreCategoryCard cat={'series'} info={userPage?.user_datagame['series']}/>
              <ScoreCategoryCard cat={'videogames'} info={userPage?.user_datagame['videogames']}/>
            </section>
          </section>
        </section>
      </>
    )
  }
  return (
    <section className={styles.container}>
        <section className={styles.user_section}>
          <UserDataCard userData={userPage}/>          
        </section>
        <section className={styles.score_section}>
          <header className={styles.score_title}>Puntuación</header>
          <section className={styles.score_cards_group}>
            <ScoreCategoryCard cat={'movies'} info={userPage?.user_datagame['movies']}/>
            <ScoreCategoryCard cat={'series'} info={userPage?.user_datagame['series']}/>
            <ScoreCategoryCard cat={'videogames'} info={userPage?.user_datagame['videogames']}/>
          </section>
        </section>
      </section>
  )
}
