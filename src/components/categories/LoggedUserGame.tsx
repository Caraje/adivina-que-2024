import styles from '@/styles/catagories/GameSection.module.css'
import { CanvasGame } from './CanvasGame'
import { PositionLevel } from './PositionLevel'
import { FormGame } from './FormGame'
import { useState } from 'react'
import { ClueGame } from './ClueGame'
import { LevelGame } from '@/types/types'
import { UpdateUserById } from '@/controllers/users'
import { useSession } from 'next-auth/react'


interface Props {
  listLevels: LevelGame[],
  cat: string,
  userData: any
}

export const LoggedUserGame: React.FC<Props> = ({listLevels, cat, userData}) => {
  const { update } = useSession()
  const [isCorrect, setIsCorrect] = useState<'correct'| 'incorrect' | 'pending'>('pending')
  const [lvlPosition, setLvlPosition] = useState<number>(0)
  const [level, setLevel] = useState<number>(0)
  const [formAnswer, setFormAnswer] = useState<string>('')
  const [isFinish, setIsFinish] = useState(false)
  const user: any = userData
  const catLevels = 
  cat === 'movies' ? user?.user_datagame?.movies 
  : cat === 'series' ? user?.user_datagame?.series 
  : user?.user_datagame?.videogames
  const levelsListAvaliables = listLevels?.filter(lvl => !catLevels?.some((userLvl:any) => userLvl.level_id === lvl.level_id))

  // No hay mas niveles
  if(isFinish || levelsListAvaliables.length === 0) {
    return (
    <section className={styles.container}>
      <img src='https://res.cloudinary.com/caraje/image/upload/v1682073684/AdivinaQue/brn9uwtb48nyf25r0bzc.webp' alt='Illustration popcorn' width={250} height={300} />
      <h2>¡¡¡Ya has completado todos los niveles!!!</h2>
        <h3>O participa en las otras categorias</h3>
    </section>
    )
  }
  const totalClues = [
    {clue: ''},
    ...levelsListAvaliables[level].level_clue
  ]

  const handleNextClue = async () => {
    if (lvlPosition === 4 )  return
    setLvlPosition(lvlPosition + 1)
  }

  const handleNextLevel = async () => {
    if (level + 1 >= listLevels.length){
      setIsFinish(true)
      return
    }
    const p = lvlPosition < 0 ?  5
    : lvlPosition === 0 ? 5 
    : lvlPosition === 1 ? 4 
    : lvlPosition === 2 ? 3 
    : lvlPosition === 3 ? 2 
    : lvlPosition === 4 ? 1 
    : 0
    // const p = 0
    const levelPoints = {
      level_correct: isCorrect === 'incorrect' ? false : true,
      level_errors: lvlPosition === 0 ? 0 : lvlPosition ,
      level_id: levelsListAvaliables[level].level_id,
      level_points: isCorrect === 'incorrect' ? 0 : p
    }
    cat === 'movies' ? user.user_datagame.movies.push(levelPoints) 
      : cat === 'series' ? user.user_datagame.series.push(levelPoints)
      : user.user_datagame.videogames.push(levelPoints)
    update(userData)
    await UpdateUserById(user.user_id, userData, null, null)
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
      // setLvlPosition(5)
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
        : <button 
            onClick={handleNextLevel}
            className={styles.btn_nextLevel}
          >
            Siguiente Nivel
          </button>
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
}
