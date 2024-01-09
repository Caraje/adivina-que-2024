import styles from '@/styles/catagories/AsideSection.module.css'
import { RankCard } from '../Home/RankCard'
import { rankList } from '@/utils/exampleRankUser'
import { UserCard } from './UserCard'

interface Props {
  cat: string
}

export const AsideSection: React.FC<Props> = ({cat}) => {
  return (
    <section className={styles.container}>
        <UserCard />
      <section className={styles.rankBoard}> 
        <RankCard cat={cat} list={rankList} isGame/>
      </section>
    </section>
  )
}
