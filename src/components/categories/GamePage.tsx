'use client'
import styles from '@/styles/catagories/GamePage.module.css'
import {AsideSection} from './AsideSection'
import { GameSection } from './GameSection'
// import { useSession } from 'next-auth/react'

interface Props {
  cat: string
}

export const GamePage: React.FC<Props> = ({cat}) => {
  // const { data, status } = useSession()

  // console.log({data, status})
  return (
    <div className={styles.container}>
      <GameSection />
      <AsideSection cat={cat}/>
    </div>
  )
}
