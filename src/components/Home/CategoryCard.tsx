import styles from '@/styles/Home/CategoryCard.module.css'
import { IconError, IconRight, IconScore } from '../Icons'
import { LevelsPassed } from '@/types/types'

interface Props {
  category: string, 
  image: string,
  userDataLevels: LevelsPassed[]
}

export const CategoryCard: React.FC<Props> = ({category,userDataLevels, image }) => {
  // console.log({userDataLevels})
  const errorFilter = userDataLevels?.filter((er:any) => !er.level_correct ) || []
  const sucessFilter = userDataLevels?.filter((er:any) => er.level_correct ) || []
  let totalPoints = 0
  for (let i = 0; i < sucessFilter?.length; i++) { 
    totalPoints += sucessFilter[i].level_points
  }
  return (
    <article className={styles.card_category}>
      <section className={styles.score_board}>
        <h2 className={styles.title_card}>{category}</h2>
        <section className={styles.score_card}>
          <article className={styles.score_points}>
            <IconScore size={35} />
            <p>{totalPoints}</p> 
          </article>
          <article className={styles.score_correct}>
            <IconRight size={35} />
            <p>{sucessFilter?.length}</p>
          </article>
          <article className={styles.score_error}>
            <IconError size={35} />
            <p>{errorFilter?.length}</p> 
          </article>
        </section>
      </section>
      <div className={styles.background_card}>
        <div className={styles.void} />
        <img 
          src={image} 
          alt='imagen de portada de categoria cine' 
          width={975}
          className={styles.img_background}
          />
      </div>
  
    </article>
  )
}
