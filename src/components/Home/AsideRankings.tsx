'use client'
import styles from '@/styles/Home/AsideRankings.module.css'
import { RankCard } from './RankCard'
import { useUserList } from '@/hooks/usersList'


const AsideRankings = () => {
  const usersData:any = useUserList()
  // const usersList: User | null = usersData?.user
  if(!usersData) {
    return <div>Cargando...</div>
  }
  return (
    <aside className={styles.aside_home}>
      <h2>Top 10</h2>
      <RankCard 
        cat='movies'
        list={usersData.user}
      />
      <RankCard 
        cat='series'
        list={usersData.user}
      />
      <RankCard 
        cat='videogames'
        list={usersData.user}
      />
    </aside>
  )
}

export default AsideRankings