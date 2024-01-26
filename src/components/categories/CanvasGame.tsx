import styles from '@/styles/catagories/CanvasGame.module.css'

interface Props {
  image?: string,
  imageCorrect?: string,
  isCorrect: 'correct'| 'incorrect' | 'pending',
}

export const CanvasGame: React.FC<Props> = ({image, imageCorrect, isCorrect}) => {
  return (
    <section className={styles.canvas}>
        {
          (isCorrect === 'correct' || isCorrect === 'incorrect')
            ? <img 
              src={imageCorrect} 
              alt='Imagen de la respuesta correcta' 
              width={500}
              className={styles.frame_Level}
            />
            : <img 
              src={image} 
              alt='Frame del nivel que hay que adivinar' 
              width={500}
              className={styles.frame_Level}
            />
        }
        {
          isCorrect === 'incorrect' 
            && <div
            className={styles.answer_banner_incorrect}>Incorrecto</div>
        }
        {
          isCorrect === 'correct' 
            && <div
            className={styles.answer_banner_correct}>Respuesta correcta</div>
        }
      </section>
  )
}
