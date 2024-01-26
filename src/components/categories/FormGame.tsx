import styles from '@/styles/catagories/FormGame.module.css'
import { handleNextClue } from '@/types/types';

interface Props {
  isCorrect: 'correct'| 'incorrect' | 'pending'; 
  handleNextClue?: handleNextClue;
  formAnswer: string, 
  setFormAnswer: React.Dispatch<React.SetStateAction<string>>,
  handleForm: (e: React.FormEvent<HTMLFormElement>) => void

}

export const FormGame: React.FC<Props> = ({
  isCorrect,
  handleNextClue,
  formAnswer,
  setFormAnswer,
  handleForm
}) => {
    
  return (
    <form className={styles.container} onSubmit={(e) => {handleForm(e)}}>
      <input 
        className={styles.form_input}
        type='text'
        value={formAnswer}
        onChange={(e) => {setFormAnswer(e.target.value)}}
      />
      <div className={styles.button_group}>
        <button className={styles.btn_send}>Enviar</button> 
        {
          (isCorrect === 'pending') && 
          <button 
            type='button' 
            className={styles.btn_clue}
            onClick={handleNextClue}
          >
            Pista
          </button> 
        }
      </div>
    </form>
  )
}
