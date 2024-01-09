import styles from '@/styles/catagories/PositionLevel.module.css'

interface Props {
  clues: {clue: string | null}[]
  isCorrect: boolean,
  isIncorrect: boolean, 
  levelPosition: number
}
export const PositionLevel: React.FC<Props> = ({ clues, isCorrect, isIncorrect, levelPosition }) => {  
  return (
    <section className={styles.container}>
    {
      clues.map((el, idx) => (
        <button 
          key={idx}
          className={
            isCorrect && levelPosition === idx ? styles.button_correct
              : isIncorrect && levelPosition === idx ? styles.button_error
              : levelPosition === idx ? styles.button_actual 
              : levelPosition > idx ? styles.button_error
              : styles.button
          }
        />
      ))
    }
  </section>
  )
}
