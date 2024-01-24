
'use client'
import styles from '@/styles/catagories/GameSection.module.css'
import { exampleLevelsList } from '@/utils/ExampleLevel'
import { CanvasGame } from './CanvasGame'
import { PositionLevel } from './PositionLevel'
import { useState } from 'react'
import { FormGame } from './FormGame'
import { ClueGame } from './ClueGame'
import { LevelGame } from '@/types/types'

interface Props {
  cat: string,
  lvl: LevelGame[]
}

export const GameSection: React.FC<Props> = ({cat, lvl}) => {
  const [levelPosition, setLevelPosition] = useState(0)
  const [numLevel, setNumLevel] = useState(0)
  const level = lvl[numLevel]
  const image = level.level_images[levelPosition].img
  const isCorrect = false
  const isIncorrect = false

  const handleNextClue = () => {
    if (levelPosition === 4 )  return
    setLevelPosition(levelPosition + 1)
  }
  const handleNextLevel = () => {
    setNumLevel(numLevel +1)
    setLevelPosition(0)
  }
  const newClues = [
    {clue: ''},
    ...level.level_clue
  ]
  return (
    <section className={styles.container}>
      <CanvasGame 
        image={image} 
        imageCorrect={level.image_correct}
        isCorrect={isCorrect} 
        isIncorrect={isIncorrect}
      />       
      <PositionLevel 
        clues={newClues} 
        isCorrect={isCorrect}
        isIncorrect={isIncorrect}
        levelPosition={levelPosition}
      />
      <FormGame 
        isCorrect={isCorrect}
        isIncorrect={isIncorrect}
        handleNextClue={handleNextClue}
      />
      <button onClick={handleNextLevel}>Next</button>
      {
        levelPosition >= 1 &&
        <section className={styles.container_clues}>
          <h2 className={styles.title_clues}>Pistas:</h2>
          <ClueGame
            levelPosition={levelPosition}
            clues={newClues}
          />
        </section>
      }
    </section>
  )
}
