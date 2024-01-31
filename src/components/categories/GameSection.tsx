
'use client'
import styles from '@/styles/catagories/GameSection.module.css'
import { CanvasGame } from './CanvasGame'
import { PositionLevel } from './PositionLevel'
import { useState } from 'react'
import { FormGame } from './FormGame'
import { ClueGame } from './ClueGame'
import { LevelGame } from '@/types/types'
import { useSession } from 'next-auth/react'
import useUserData from '@/hooks/user'



interface Props {
  cat: string,
  lvl: LevelGame[]
}


export const GameSection: React.FC<Props> = ({cat, lvl}) => {
  
  const { data, status, update } = useSession();
  const user: any = data?.user
  const userId = user?.user_id;
  const userData = useUserData(userId);
  // const userData =  useUserData(data?.user.user_id)
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
    const user: any = userData
    const catLevels = 
    cat === 'movies' ? user?.user_datagame?.movies 
    : cat === 'series' ? user?.user_datagame?.series 
    : user?.user_datagame?.videogames
    
    const levelsListAvaliables = lvl?.filter(lvl => !catLevels?.some((userLvl:any) => userLvl.level_id === lvl.level_id)
      )
    
    const totalClues = [
      {clue: ''},
      ...levelsListAvaliables[level].level_clue
    ]

    const updateUser = async (updatedData:any) => {
      try {
        const response = await fetch(`/api/users/${user.user_id}`, {
          method:'PUT',
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify(updatedData)
        })
        const {userUpdated} = await response.json()
        update({ user: userUpdated })
        // console.log(userUpdated)
      } catch (error) {
        console.log(error)
        
      }
    }
    const handleNextClue = async () => {
      if (lvlPosition === 4 )  return

      setLvlPosition(lvlPosition + 1)
    }

    const handleNextLevel = () => {
      // if(level+2 > levelsListAvaliables.length) return
      if (level + 2 >= levelsListAvaliables.length) return
      const p = lvlPosition === 0 ? 5 
      : lvlPosition === 1 ? 4 
      : lvlPosition === 2 ? 3 
      : lvlPosition === 3 ? 2 
      : lvlPosition === 4 ? 1 
      : 0
      const levelPoints = {
        level_correct: p === 0 ? false : true,
        level_errors: lvlPosition + 1,
        level_id: levelsListAvaliables[level].level_id,
        level_points: p
      }
      cat === 'movies' ? user.user_datagame.movies.push(levelPoints) 
        : cat === 'series' ? user.user_datagame.series.push(levelPoints)
        : user.user_datagame.videogames.push(levelPoints)
      updateUser(userData)
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
        if (lvlPosition < 4 ) {
          handleNextClue()
          setFormAnswer('')
          
          return
        }
        // Tras 5 pistas, la resuelve como incorrecta
        setIsCorrect('incorrect')

        return
      }

      // RESPUESTA CORRECTA 
      setIsCorrect('correct')
      setFormAnswer('')
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
