import styles from '@/styles/catagories/FormGame.module.css'
import { handleNextClue } from '@/types/types';

interface Props {
  isCorrect: boolean; 
  isIncorrect: boolean;
  handleNextClue: handleNextClue

}

export const FormGame: React.FC<Props> = ({isCorrect, isIncorrect, handleNextClue}) => {
  return (
    <form className={styles.container}>
      <input className={styles.form_input}/>
      <div className={styles.button_group}>
        {
          (!isCorrect && !isIncorrect) &&
          <button className={styles.btn_send}>Enviar</button> 
        }
        {
          (!isCorrect && !isIncorrect) &&
          <button 
            type='button' 
            className={styles.btn_clue}
            onClick={handleNextClue}
          >
            Pista
          </button> 
        }
        {
          (isCorrect || isIncorrect) &&
          <button type='button' className={styles.btn_next}>Siguiente</button> 
        }
      </div>
    </form>
  )
}
