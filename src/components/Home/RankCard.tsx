import { RankList } from '@/types/types'
import styles from '@/styles/Home/RankCard.module.css'
import stylesGame from '@/styles/catagories/RankCardGame.module.css'
import Link from 'next/link'
interface Props {
  cat: string, 
  list: RankList[],
  isGame: boolean
}

export const RankCard: React.FC<Props> = ({cat, list, isGame= false}) => {

  const stylesComponent= isGame ? stylesGame : styles
  return (
    <article className={stylesComponent.card}>
      <h3 className={stylesComponent.card_title}>{cat}</h3>
        <ol className={stylesComponent.rank_list}>
          {
            list.map(user => (
              <Link 
                href={'/user/id'}
                className={stylesComponent.user_link}
                key={user.id}
              >
                <li 
                  className={stylesComponent.user}
                  >
                  <img 
                    src={user.avatar}
                    alt={`avatar de ${user.name}`}
                    width={50}
                    height={50}
                    className={stylesComponent.user_avatar}
                    />
                  <div className={stylesComponent.user_info}>
                    <h4 className={stylesComponent.user_name}>{user.name}</h4>
                    <p className={stylesComponent.user_points}>{user.points}</p>
                  </div>
                </li>
              </Link>
            ))
          }
        </ol>
    </article>
  )
}
