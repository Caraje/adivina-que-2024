
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

export const GameSection: React.FC<Props> = ({cat, lvl}) => {
  const { data, status } = useSession()
  const [isCorrect, setisCorrect] = useState<'correct'| 'incorrect' | 'pending'>('pending')
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
    }

    const handleForm = (e:React.FormEvent<HTMLFormElement>): void => {
      e.preventDefault()

          // Si es correcta la respuesta
    /*
      Si la respuesta es correcta, debe sumar el numero de puntos acorde al numero de oportunidades disponible (1er intento, 5p, 2º 4p, 3º 3p, 4º 2p, 5º 1p, fallo 0p)
      Acertar la respuesta, debe hacer desaparecer el formulario y que aparezca el boton
      de siguiente nivel.
      Tambien sobre la imagen debe aparecer un banner de respuesta correcta
      Ademas del banner, debe cambiar la imagen a la imagen de respuesta correcta.
      Con la puntuacion restante, debe sumarse a la puntuacion general en la categoria del jugador.
      Tambien debe sumarse el numero de errores en caso de haberlos
      sumar 1 al dato de niveles superados
      Sumar la id del nivel a la lista de niveles completados del usuario en la categoria.
    */
    // Si es erronea la respuesta
    /*
      Em caso de respuesta erronea, debe pasar automaticamente a la siguiente pista, y restar 1 a la cantidad de puntos disponibles hasta que ya no queden
      Despues de 5 intentos o respuestas fallidas, el nivel se da como erroneo y en ese caso: 
      debe desaparecer el formulario de respuestas y aparecer en su lugar un boton para el siguiente nivel.
      sumar el numero de errores al jugador 
      añadir el id del nivel a la lista de niveles completados del jugador.


    */
    }

    return (

      <section className={styles.container}>
        <CanvasGame 
          image={levelsListAvaliables[level].level_images[lvlPosition].img} 
          imageCorrect={levelsListAvaliables[level].image_correct}
          isCorrect={isCorrect} 
        />  
        <button onClick={handleNextClue}>Siguiente</button> 
        <button onClick={handleNextLevel}>Siguiente Nivel</button> 

        <PositionLevel 
          clues={totalClues} 
          isCorrect={isCorrect}
          levelPosition={lvlPosition}
        />
        {
          isCorrect === 'pending' && (
            <FormGame 
            isCorrect={isCorrect}
            handleNextClue={handleNextClue}
            formAnswer={formAnswer}
            setFormAnswer={setFormAnswer}
            handleForm={handleForm}
          />
          )
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
