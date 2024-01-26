import styles from '@/styles/catagories/PositionLevel.module.css'

interface Props {
  clues: {clue: string | null}[]
  isCorrect: 'correct'| 'incorrect' | 'pending',
  levelPosition: number
}
export const PositionLevel: React.FC<Props> = ({ clues, isCorrect, levelPosition }) => {  
  return (
    <section className={styles.container}>
    {
      clues.map((el, idx) => (
        <button 
          key={idx}
          className={
            isCorrect === 'correct' && levelPosition === idx ? styles.button_correct
              : isCorrect === 'incorrect' && levelPosition === idx ? styles.button_error
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
