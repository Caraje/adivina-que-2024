'use client'
import styles from '@/styles/catagories/UserCard.module.css'
import { IconError, IconRight, IconScore } from '../Icons'
import { useSession } from 'next-auth/react'


export const UserCard = () => {
  const { data } = useSession()
  const user: any = data?.user;
  const errorFilter = user?.user_datagame.movies.filter((er:any) => !er.level_correct ) || []
  const sucessFilter = user?.user_datagame.movies.filter((er:any) => er.level_correct ) || []
  let totalPoints = 0
  for (let i = 0; i < sucessFilter?.length; i++) { 
    totalPoints += sucessFilter[i].level_points
  }


  return (
    <article className={styles.card}>
      <img 
        src={user?.user_avatar}  
        alt={`Imagen del avatar de ${user?.user_name}`}
        width={150}
        height={150}
        className={styles.avatar}
      />
      <div className={styles.user_info}>
        <h2 className={styles.user_title}>{user?.user_name}</h2>
        <section className={styles.score_board}>
          <article className={styles.score_points}>
            <IconScore size={30}/>
            <p>{totalPoints}</p>      
          </article>
          <article className={styles.score_correct}>
            <IconRight size={30} />
            <p>{sucessFilter?.length}</p>      
          </article>
          <article className={styles.score_error}>
            <IconError size={30} />
            <p>{errorFilter?.length}</p>      
          </article>
        </section>
      </div>
    </article>
  )
}
