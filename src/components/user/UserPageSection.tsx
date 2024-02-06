'use client'
import useUserData from '@/hooks/user'
import { useSession } from 'next-auth/react'
import React from 'react'
import { UserDataCard }  from '@/components/user/UserDataCard'
import { ScoreCategoryCard } from './ScoreCategoryCard'
import styles from '@/styles/user/UserPageSection.module.css'

interface Props {
  id: string
}
export const UserPageSection: React.FC<Props> = ({id}) => {
  const { data, status, update } = useSession()
  const userPage: any = useUserData(id) 
  const user: any = data?.user
  if (status === 'loading') {
    return <div>Cargando...</div>
  }
  if(user?.user_id === id) {
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
          {/* Seran cards por categorias, crear una para pasarle las diferentes categorias http://localhost:3000/user/5a1f3a30-ef56-4cb6-bbfe-7bcd6569d92e*/}
        </section>
      </section>
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
          {/* Seran cards por categorias, crear una para pasarle las diferentes categorias http://localhost:3000/user/5a1f3a30-ef56-4cb6-bbfe-7bcd6569d92e*/}
        </section>
      </section>
  )
}
