import styles from '@/styles/catagories/FormGame.module.css'
import { handleNextClue } from '@/types/types';

interface Props {
  isCorrect: boolean; 
  isIncorrect: boolean;
  handleNextClue: handleNextClue;
  lvlAnswer: string, 
  setLvlAnswer: React.Dispatch<React.SetStateAction<string>>,
  handleAnswerForm: (e: React.FormEvent<HTMLFormElement>) => void

}

export const FormGame: React.FC<Props> = ({isCorrect, isIncorrect, handleNextClue, lvlAnswer,
  setLvlAnswer, handleAnswerForm}) => {
    
  return (
    <form className={styles.container} onSubmit={(e) => {handleAnswerForm(e)}}>
      <input 
        className={styles.form_input}
        type='text'
        value={lvlAnswer}
        onChange={(e) => {setLvlAnswer(e.target.value)}}
      />
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
