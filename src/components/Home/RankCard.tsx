import { RankList } from '@/types/types'
import styles from '@/styles/Home/RankCard.module.css'
import Link from 'next/link'
interface Props {
  cat: string, 
  list: RankList[]
}

export const RankCard: React.FC<Props> = ({cat, list}) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.card_title}>{cat}</h3>
        <ol className={styles.rank_list}>
          {
            list.map(user => (
              <Link 
                href={'/user/id'}
                className={styles.user_link}
              >
                <li 
                  key={user.id}
                  className={styles.user}
                  >
                  <img 
                    src={user.avatar}
                    alt={`avatar de ${user.name}`}
                    width={50}
                    height={50}
                    className={styles.user_avatar}
                    />
                  <div className={styles.user_info}>
                    <h4 className={styles.user_name}>{user.name}</h4>
                    <p className={styles.user_points}>{user.points}</p>
                  </div>
                </li>
              </Link>
            ))
          }
        </ol>
    </article>
  )
}
