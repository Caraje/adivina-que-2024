
'use client'
import styles from '@/styles/catagories/GameSection.module.css'
import { exampleLevelsList } from '@/utils/ExampleLevel'
import { CanvasGame } from './CanvasGame'
import { PositionLevel } from './PositionLevel'
import { useState } from 'react'
import { FormGame } from './FormGame'
export const GameSection = () => {
  const [levelPosition, setLevelPosition] = useState(3)
  const level = exampleLevelsList[0]
  const image = level.level_images[levelPosition].img
  const isCorrect = false
  const isIncorrect = false
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
      />
      {
        levelPosition >= 1 &&
        <ul>
          {
            level.level_clue.slice(0, levelPosition +1 ).map((clue, idx) => (              
                clue.clue && <li key={idx}>{clue.clue}</li>
              ))
          }
        </ul>
      }
    </section>
  )
}
