import styles from '@/styles/user/ScoreCategoryCard.module.css'
import { IconError, IconRight, IconScore } from '../Icons'

interface Props {
  cat: string | null,
  info: {
    level_id: string, 
    level_correct: boolean, 
    level_errors: number, 
    level_points: number, 
  }[] | null
}

const title: {[key: string]: string} = {
  movies: 'Cine',
  series: 'Series',
  videogames: 'Videojuegos'
}
export const ScoreCategoryCard: React.FC<Props> = ({cat, info}) => {
  console.log({info})
  const errorFilter = info?.filter((er:any) => !er.level_correct ) || []
    const sucessFilter = info?.filter((er:any) => er.level_correct ) || []
    let totalPoints = 0
    for (let i = 0; i < sucessFilter?.length; i++) { 
      totalPoints += sucessFilter[i].level_points
    }

  
  return (
    <article className={styles.card}>
      <img  
        src={`/static_img/${cat}_vertical.webp`}   
        alt=''  
        width={300}   
        height={300}
        className={styles.image_background}  
      />
      <div className={styles.void}/>
      <h3 className={styles.title}>{title[cat!]}</h3>
      <section className={styles.score_board}>
        <article className={styles.score_points}>
          <IconScore size={40}/>
          <p>{totalPoints}</p>      
        </article>
        <article className={styles.score_correct}>
          <IconRight size={40} />
          <p>{sucessFilter?.length}</p>      
        </article>
        <article className={styles.score_error}>
          <IconError size={40} />
          <p>{errorFilter?.length}</p>      
        </article>
      </section>
    </article>
  )
}
