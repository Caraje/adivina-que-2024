
'use client'
import styles from '@/styles/catagories/GameSection.module.css'
import { exampleLevelsList } from '@/utils/ExampleLevel'
import { CanvasGame } from './CanvasGame'
import { PositionLevel } from './PositionLevel'
import { useState } from 'react'
import { FormGame } from './FormGame'
import { ClueGame } from './ClueGame'
export const GameSection = () => {
  const [levelPosition, setLevelPosition] = useState(0)
  const level = exampleLevelsList[1]
  const image = level.level_images[levelPosition].img
  const isCorrect = false
  const isIncorrect = false

  const handleNextClue = () => {
    if (levelPosition === 4 )  return
    setLevelPosition(levelPosition + 1)
  }
  return (
    <section className={styles.container}>
      <CanvasGame 
        image={image} 
        imageCorrect={level.image_correct}
        isCorrect={isCorrect} 
        isIncorrect={isIncorrect}
      />       
      <PositionLevel 
        clues={level.level_clue} 
        isCorrect={isCorrect}
        isIncorrect={isIncorrect}
        levelPosition={levelPosition}
      />
      <FormGame 
        isCorrect={isCorrect}
        isIncorrect={isIncorrect}
        handleNextClue={handleNextClue}
      />
      {
        levelPosition >= 1 &&
        <section className={styles.container_clues}>
          <h2 className={styles.title_clues}>Pistas:</h2>
          <ClueGame
            levelPosition={levelPosition}
            clues={level.level_clue}
          />
        </section>
      }
    </section>
  )
}
