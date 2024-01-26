
'use client'
import styles from '@/styles/catagories/GameSection.module.css'
import { exampleLevelsList } from '@/utils/ExampleLevel'
import { CanvasGame } from './CanvasGame'
import { PositionLevel } from './PositionLevel'
import { useState } from 'react'
import { FormGame } from './FormGame'
import { ClueGame } from './ClueGame'
import { LevelGame } from '@/types/types'
import { useSession } from 'next-auth/react'

interface Props {
  cat: string,
  lvl: LevelGame[]
}

export const GameSection: React.FC<Props> = ({cat, lvl}) => {
  const { data } = useSession()
  const user: any = data?.user;
  const userLevelsList = user.user_datagame.movies || []
  const levelsAbaliables = lvl.filter(lvl => !userLevelsList.some((e: { level_id: string }) => e.level_id === lvl.level_id))

  const [levelPosition, setLevelPosition] = useState(0)
  const [numLevel, setNumLevel] = useState<number>(0)
  const [isCorrect, setIsCorrect] = useState<boolean>(false)
  const [isIncorrect, setIsIncorrect] = useState<boolean>(false)
  const [lvlAnswer, setLvlAnswer] = useState<string>('')
  const [userPoints, setUserPoints] = useState<number>(5)
  const level = levelsAbaliables[numLevel]
  const image = level.level_images[levelPosition].img
  const newClues = [
    {clue: ''},
    ...level.level_clue
  ]



  console.log({userLevelsList, levelsAbaliables})
  const handleNextClue = () => {
    if (levelPosition === 4 )  return
    setLevelPosition(levelPosition + 1)
  }
  const handleNextLevel = () => {
    setNumLevel(numLevel +1)
    setLevelPosition(0)
  }

  const handleAnswerForm = (e:React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    function normalizeString(str: string) {
      return str.toLowerCase().replace(/[^\w\s]/gi, '');
    }
    const isAnswerCorrect = 
      level.level_answers.some(
        str => normalizeString(str) === normalizeString(lvlAnswer).trim()
      )
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
    if (isAnswerCorrect) {
      console.log('Es correcta')
      return
    } 
    
    
    // Si es erronea la respuesta
    /*
      Em caso de respuesta erronea, debe pasar automaticamente a la siguiente pista, y restar 1 a la cantidad de puntos disponibles hasta que ya no queden
      Despues de 5 intentos o respuestas fallidas, el nivel se da como erroneo y en ese caso: 
      debe desaparecer el formulario de respuestas y aparecer en su lugar un boton para el siguiente nivel.
      sumar el numero de errores al jugador 
      añadir el id del nivel a la lista de niveles completados del jugador.


    */
    handleNextClue()
    console.log('Es fallo')
    console.log({lvlAnswer, level})
    return
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
        clues={newClues} 
        isCorrect={isCorrect}
        isIncorrect={isIncorrect}
        levelPosition={levelPosition}
      />
      <FormGame 
        isCorrect={isCorrect}
        isIncorrect={isIncorrect}
        handleNextClue={handleNextClue}
        lvlAnswer={lvlAnswer}
        setLvlAnswer={setLvlAnswer}
        handleAnswerForm={handleAnswerForm}
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
