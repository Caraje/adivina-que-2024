import { User } from '@/types/types'
import styles from '@/styles/Home/RankCard.module.css'
import stylesGame from '@/styles/catagories/RankCardGame.module.css'
import { UserRankListCard } from './UserRankListCard'
interface Props {
  cat: string, 
  list: User[],
  isGame?: boolean
}
interface CategoriesName {
  [key: string]: string;
}
const CategoriesName: CategoriesName = {
  movies: 'Cine', 
  series: 'Series', 
  videogames: 'Videojuegos'
}

export const RankCard: React.FC<Props> = ({cat, list, isGame= false}) => {

  const stylesComponent= isGame ? stylesGame : styles
  const sumCategoryPoints = (category: any[]) =>
    category.reduce((sum, item) => sum + item.level_points, 0)

  const sortedUsers = list?.sort((a, b) => {
    const sumPointsA =
      sumCategoryPoints(
        cat === 'movies' ? a.user_datagame.movies 
        : cat === 'series' ? a.user_datagame.series 
        : a.user_datagame.videogames)
  
    const sumPointsB =
      sumCategoryPoints(cat === 'movies' ? b.user_datagame.movies 
        : cat === 'series' ? b.user_datagame.series 
        : b.user_datagame.videogames) 
  
    return sumPointsB - sumPointsA;
  });
  return (
    <article className={stylesComponent.card}>
      <h3 className={stylesComponent.card_title}>{CategoriesName[cat]}</h3>
        <ol className={stylesComponent.rank_list}>
          {
            sortedUsers?.map(user => (
              <UserRankListCard 
                key={user.user_id}
                cat={cat}
                user={user}
              />
            ))
          }
        </ol>
    </article>
  )
}
