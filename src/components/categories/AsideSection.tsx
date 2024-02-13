'use client'
import styles from '@/styles/catagories/AsideSection.module.css'
import { RankCard } from '../Home/RankCard'
import { UserCard } from './UserCard'
import { useUserList } from '@/hooks/usersList'

interface Props {
  cat: string
}



export const AsideSection: React.FC<Props> = ({cat}) => {
  const usersData:any = useUserList()
  // const usersList: User | null = usersData?.user
  return (
    <section className={styles.container}>
        <UserCard cat={cat}/>
      <section className={styles.rankBoard}> 
        <RankCard 
          cat={cat} 
          list={usersData?.user} 
          isGame
        />
      </section>
    </section>
  )
}
