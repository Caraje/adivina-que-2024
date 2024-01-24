
import styles from '@/styles/catagories/GamePage.module.css'
import {AsideSection} from './AsideSection'
import { GameSection } from './GameSection'

interface iCategories {
  movies: string, 
  series: string, 
  videogames: string
}
interface Props {
  cat: keyof iCategories
}

const CategoriesName = {
  movies: 'Cine', 
  series: 'Series', 
  videogames: 'Videojuegos'
}

const levelByCategory = async (cat) => {
    try {
      const response = await fetch(`http://localhost:3000/api/levels/${cat}`, )
      if (response.ok) {
        const {levelList} = await response.json()
        return levelList
      }
    } catch (error) {
      console.log(error)
      return { error: 'Conection Error' }
    }
  }

export const GamePage: React.FC<Props> = async ({cat}) => {
const levelList = await levelByCategory(cat)
console.log({levelList})
  return (
    <div className={styles.container}>
      <GameSection cat={cat}/>
      <AsideSection cat={CategoriesName[cat]}/>
    </div>
  )
}
