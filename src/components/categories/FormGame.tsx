import styles from '@/styles/catagories/FormGame.module.css'

interface Props {
  isCorrect: boolean; 
  isIncorrect: boolean
}

export const FormGame: React.FC<Props> = ({isCorrect, isIncorrect}) => {
  return (
    <form className={styles.container}>
      <input className={styles.form_input}/>
      <div className={styles.button_group}>
        {
          (!isCorrect && !isIncorrect) &&
          <button className={styles.btn_send}>Enviar</button> 
          // Solo si aun se puede enviar respuestas
        }
        {
          (!isCorrect && !isIncorrect) &&
          <button type='button' className={styles.btn_clue}>Pista</button> 
          // solo si aun se puede enviar respuestas
        }
        {
          (isCorrect || isIncorrect) &&
          <button type='button' className={styles.btn_next}>Siguiente</button> 
          // solo mostras si has acertado o fallado el nivel
        }
      </div>
    </form>
  )
}
