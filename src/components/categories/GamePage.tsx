import styles from '@/styles/catagories/GamePage.module.css'
import {AsideSection} from './AsideSection'
import { GameSection } from './GameSection'

interface Props {
  cat: string
}

export const GamePage: React.FC<Props> = ({cat}) => {
  return (
    <div className={styles.container}>
      <GameSection />
      <AsideSection cat={cat}/>
    </div>
  )
}
