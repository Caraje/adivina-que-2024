import styles from '@/styles/catagories/ClueGame.module.css'

interface Props {
  levelPosition: number,
  clues: {clue:string}[]
}

export const ClueGame: React.FC<Props> = ({levelPosition, clues}) => {
  return (
    <ul className={styles.list}>
      {
        clues.slice(0, levelPosition +1 ).map((clue, idx) => (              
            clue.clue && 
              <li 
                key={idx}
                className={styles.clue}
              >
                {clue.clue}
              </li>
          ))
      }
    </ul>
  )
}
