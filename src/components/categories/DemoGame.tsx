import styles from '@/styles/catagories/GameSection.module.css'
import { CanvasGame } from './CanvasGame'
import { PositionLevel } from './PositionLevel'
import { FormGame } from './FormGame'
import { useState } from 'react'
import { ClueGame } from './ClueGame'
import { LevelGame } from '@/types/types'


interface Props {
  listLevels: LevelGame[]
}

export const DemoGame: React.FC<Props> = ({listLevels}) => {

  const [formAnswer, setFormAnswer] = useState<string>('')
  const [isCorrect, setIsCorrect] = useState<'correct'| 'incorrect' | 'pending'>('pending')
  const [lvlPosition, setLvlPosition] = useState<number>(0)
  const [level, setLevel] = useState<number>(0)
  const [isFinish, setIsFinish] = useState(false)

  // No hay mas niveles
  if(isFinish || listLevels.length === 0) {
    return (
      <section className={styles.container}>
        <img src='https://res.cloudinary.com/caraje/image/upload/v1682073684/AdivinaQue/brn9uwtb48nyf25r0bzc.webp' alt='Illustration popcorn' width={250} height={300} />
        <h2>¡¡¡Ya has completado todos los niveles!!!</h2>
        <h3>O participa en las otras categorias</h3>
      </section>
      )
  }
  console.log(listLevels.length)
  const totalClues = [
    {clue: ''},
    ...listLevels[level].level_clue
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
    setLvlPosition(0)
    setLevel(level + 1)
    setIsCorrect('pending')
    setFormAnswer('')
  }

  const handleForm = (e:React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    const lvlCorrectAnswers = listLevels[level].level_answers
    function normalizeString(str: string) {
      return str.toLowerCase().replace(/[^\w\s]/gi, '');
    }
    const isAnswerCorrect = lvlCorrectAnswers.some(
      str => normalizeString(str) === normalizeString(formAnswer).trim()
    )
    // RESPUESTA ERRONEA
    if(!isAnswerCorrect) {
      if (lvlPosition < 4 ) {
        handleNextClue()
        setFormAnswer('')
        return
      }
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
      image={listLevels[level].level_images[lvlPosition].img} 
      imageCorrect={listLevels[level].image_correct}
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
}
