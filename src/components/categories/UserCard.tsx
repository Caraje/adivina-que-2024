import styles from '@/styles/catagories/UserCard.module.css'
import { exampleUser } from '@/utils/exampleActiveUser'
import { IconError, IconRight, IconScore } from '../Icons'

export const UserCard = () => {
  return (
    <article className={styles.card}>
      <img 
        src={exampleUser.user_avatar}  
        alt={`Imagen del avatar de ${exampleUser.user_name}`}
        width={150}
        height={150}
        className={styles.avatar}
      />
      <div className={styles.user_info}>
        <h2 className={styles.user_title}>Puntuación</h2>
        <section className={styles.score_board}>
          <article className={styles.score_points}>
            <IconScore size={30}/>
            <p>999</p>      
          </article>
          <article className={styles.score_correct}>
            <IconRight size={30} />
            <p>999</p>      
          </article>
          <article className={styles.score_error}>
            <IconError size={30} />
            <p>999</p>      
          </article>
        </section>
      </div>
    </article>
  )
}
