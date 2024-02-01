
import styles from '@/styles/catagories/GamePage.module.css'
import {AsideSection} from './AsideSection'
import { GameSection } from './GameSection'
import { LevelGame } from '@/types/types'

interface iCategories {
  movies: string, 
  series: string, 
  videogames: string
}
interface Props {
  cat: keyof iCategories,
  lvl: LevelGame[]
}


export const GamePage: React.FC<Props> = async ({cat, lvl}) => {

  return (
    <div className={styles.container}>
      <GameSection cat={cat} lvl={lvl}/>
      <AsideSection cat={cat}/>
    </div>
  )
}
