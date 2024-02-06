import styles from '@/styles/Home/RankCard.module.css'
import stylesGame from '@/styles/catagories/RankCardGame.module.css'
import { User } from '@/types/types'
import Link from 'next/link'

interface Props {
  cat: string, 
  user: User,
  isGame?: boolean
}

export const UserRankListCard:React.FC<Props> = ({cat, user, isGame= false}) => {
  const stylesComponent= isGame ? stylesGame : styles
  const dataCategory = cat === 'movies' ? user.user_datagame.movies : cat === 'series' ? user.user_datagame.series : user.user_datagame.videogames
  let points: number = 0
  for(let i = 0; i < dataCategory.length; i++) {
    points += dataCategory[i].level_points
  }
  return (
    <Link 
      href={`/user/${user.user_id}`}
      className={stylesComponent.user_link}
      key={user.user_id }
    >
      <li 
        className={stylesComponent.user}
        >
        <img 
          src={user.user_avatar}
          alt={`avatar de ${user.user_name}`}
          width={50}
          height={50}
          className={stylesComponent.user_avatar}
          />
        <div className={stylesComponent.user_info}>
          <h4 className={stylesComponent.user_name}>{user.user_name}</h4>
          <p className={stylesComponent.user_points}>{points}</p>
        </div>
      </li>
    </Link>
  )
}
