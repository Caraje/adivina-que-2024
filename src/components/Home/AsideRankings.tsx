'use client'
import styles from '@/styles/Home/AsideRankings.module.css'
import { RankCard } from './RankCard'
import { useUserList } from '@/hooks/usersList'
import AsideRankings_skeleton from '../Skeletons/AsideRankings_skeleton'


const AsideRankings = () => {
  const usersData:any = useUserList()
  if(!usersData) {
    return <AsideRankings_skeleton/>
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