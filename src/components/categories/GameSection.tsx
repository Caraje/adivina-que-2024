
'use client'
import styles from '@/styles/catagories/GameSection.module.css'
import { CanvasGame } from './CanvasGame'
import { PositionLevel } from './PositionLevel'
import { useState } from 'react'
import { FormGame } from './FormGame'
import { ClueGame } from './ClueGame'
import { LevelGame, User } from '@/types/types'
import { useSession } from 'next-auth/react'
import { UserCard } from './UserCard';

interface Props {
  cat: string,
  lvl: LevelGame[]
}

const points = {
  0: 5,
  1: 4,
  2: 3,
  3: 2,
  4: 1
}

export const GameSection: React.FC<Props> = ({cat, lvl}) => {
  const { data, status } = useSession()
  const [isCorrect, setIsCorrect] = useState<'correct'| 'incorrect' | 'pending'>('pending')
  const [lvlPosition, setLvlPosition] = useState<number>(0)
  const [level, setLevel] = useState<number>(0)
  const [formAnswer, setFormAnswer] = useState<string>('')

  // EStado pendiente
  if(status === 'loading') {
    return <div>cargando...</div>
  }
  
  // EStado usuario logueado
  if(status === 'authenticated' && data?.user) {
    const user: any = data.user
    const catLevels = 
    cat === 'movies' ? user.user_datagame?.movies 
    : cat === 'series' ? user.user_datagame?.series 
    : user.user_datagame?.videogames
    
    const levelsListAvaliables = lvl
    .filter(lvl => !catLevels
      .some((userLvl:any) => userLvl.level_id === lvl.level_id)
      )
    
    const totalClues = [
      {clue: ''},
      ...levelsListAvaliables[level].level_clue
    ]
    const handleNextClue = () => {
      if (lvlPosition === 4 )  return
      setLvlPosition(lvlPosition + 1)
    }

    const handleNextLevel = () => {
      if(level+2 > levelsListAvaliables.length) return
      setLevel(level + 1)
      setLvlPosition(0)
      setIsCorrect('pending')
      setFormAnswer('')
    }

    const handleForm = (e:React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault()

      const lvlCorrectAnswers = levelsListAvaliables[level].level_answers
      function normalizeString(str: string) {
        return str.toLowerCase().replace(/[^\w\s]/gi, '');
      }
      const isAnswerCorrect = lvlCorrectAnswers.some(
        str => normalizeString(str) === normalizeString(formAnswer).trim()
      )
      // RESPUESTA ERRONEA
      if(!isAnswerCorrect) {
        // Comprueba que aun quedan pistas disponibles (no ha llegado a 5 pistas)
        const p = lvlPosition === 0 ? 4 : lvlPosition === 1 ? 3 :lvlPosition === 2 ? 2 : 1
        console.log({lvlPosition, p})
        if (lvlPosition < 4 ) {
          handleNextClue()
          setFormAnswer('')
          return
        }
        // Tras 5 pistas, la resuelve como incorrecta
        const points = 0
        setIsCorrect('incorrect')

        return
      }

      // RESPUESTA CORRECTA
      // Resuelve el nivel como correcto
      setIsCorrect('correct')
      // Resetea el formulario
      setFormAnswer('')
      const points = 5
    }
    return (

      <section className={styles.container}>
        <CanvasGame 
          image={levelsListAvaliables[level].level_images[lvlPosition].img} 
          imageCorrect={levelsListAvaliables[level].image_correct}
          isCorrect={isCorrect} 
        />  

        <PositionLevel 
          clues={totalClues} 
          isCorrect={isCorrect}
          levelPosition={lvlPosition}
        />
        {
          isCorrect === 'pending' ? (
            <FormGame 
            isCorrect={isCorrect}
            handleNextClue={handleNextClue}
            formAnswer={formAnswer}
            setFormAnswer={setFormAnswer}
            handleForm={handleForm}
          />
          )
          : <button onClick={handleNextLevel}>Siguiente Nivel</button>
        }
        {
          lvlPosition !== 0 && (
            <section className={styles.container_clues}>
            <h2 className={styles.title_clues}>Pistas:</h2>
              <ClueGame
                levelPosition={lvlPosition}
                clues={totalClues}
              />
          </section>
          )
        }

  
      </section>
    )
  } else {
    // EStado SIN usuario logueado
    return (
      <h1>temporal Sin usuario</h1>
    )
  }



  

  
}
