import styles from '@/styles/Home/AsideRankings.module.css'
import { RankCard } from './RankCard'
import { rankList } from '@/utils/exampleRankUser'

const AsideRankings = () => {
  return (
    <aside className={styles.aside_home}>
      <h2>Top 10</h2>
      <RankCard 
        cat='Cine'
        list={rankList}
      />
      <RankCard 
        cat='Series'
        list={rankList}
      />
      <RankCard 
        cat='Videojuegos'
        list={rankList}
      />
    </aside>
  )
}

export default AsideRankings