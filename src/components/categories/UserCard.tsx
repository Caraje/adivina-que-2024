'use client'
import styles from '@/styles/catagories/UserCard.module.css'
import { IconError, IconRight, IconScore } from '../Icons'
import { useSession } from 'next-auth/react'
import useUserData from '@/hooks/user'

interface Props {
  cat: string
}

export const UserCard: React.FC<Props> = ({cat}) => {
  const { data, status } = useSession()
  const userData: any = data?.user
  const userId = userData?.user_id;
  const user: any = useUserData(userId);
  const categoryFilter = cat === 'movies' ? user?.user_datagame.movies 
    : cat === 'series' ? user?.user_datagame.series
    : user?.user_datagame.videogames
    const errorFilter = categoryFilter?.filter((er:any) => !er.level_correct ) || []
    const sucessFilter = categoryFilter?.filter((er:any) => er.level_correct ) || []
    let totalPoints = 0
    for (let i = 0; i < sucessFilter?.length; i++) { 
      totalPoints += sucessFilter[i].level_points
    }

    // EStado pendiente
    if(status === 'loading') {
      return <div>cargando...</div>
    }
    if(status === 'authenticated' && data?.user) {
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
    }else {
      // EStado SIN usuario logueado
      // TODO: Añadir un componente para cuando no hay usuarios activos
      return (
        <h1>temporal Sin usuario</h1>
      )
    }
}
