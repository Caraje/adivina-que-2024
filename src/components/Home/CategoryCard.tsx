import styles from '@/styles/Home/CategoryCard.module.css'
import { IconError, IconRight, IconScore } from '../Icons'

interface Props {
  category: string, 
  image: string,
  points: number,
  correct: number,
  errors: number
}

export const CategoryCard: React.FC<Props> = ({category, image, points= 0, correct= 0, errors= 0}) => {
  return (
    <article className={styles.card_category}>
      <section className={styles.score_board}>
        <h2 className={styles.title_card}>{category}</h2>
        <section className={styles.score_card}>
          <article className={styles.score_points}>
            <IconScore size={35} />
            <p>{points}</p>
          </article>
          <article className={styles.score_correct}>
            <IconRight size={35} />
            <p>{correct}</p>
          </article>
          <article className={styles.score_error}>
            <IconError size={35} />
            <p>{errors}</p>
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
