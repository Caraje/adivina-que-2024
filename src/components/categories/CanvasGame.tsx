import styles from '@/styles/catagories/CanvasGame.module.css'

interface Props {
  image: string,
  imageCorrect: string,
  isCorrect: boolean,
  isIncorrect: boolean
}

export const CanvasGame: React.FC<Props> = ({image, imageCorrect, isCorrect, isIncorrect}) => {
  return (
    <section className={styles.canvas}>
        {
          isCorrect || isIncorrect
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
          isIncorrect 
            && <div
            className={styles.answer_banner_incorrect}>Incorrecto</div>
        }
        {
          isCorrect 
            && <div
            className={styles.answer_banner_correct}>Respuesta correcta</div>
        }
      </section>
  )
}
