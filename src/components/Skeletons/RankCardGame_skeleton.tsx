import styles from '@/styles/skeletons/RankCardGame_skeleton.module.css'

interface CategoriesName {
  [key: string]: string;
}
const CategoriesName: CategoriesName = {
  movies: 'Cine', 
  series: 'Series', 
  videogames: 'Videojuegos'
}
export const RankCardGame_skeleton = ({cat}:{cat: string}) => {
  return (
    <article className={styles.card}>
      <h3 className={styles.card_title}>{CategoriesName[cat]}</h3>
        <div className={styles.rank_list}>
          <div className={styles.user_rank}>
            <div className={styles.user_avatar}/>
            <div className={styles.user_name}/>
            <div className={styles.user_points}/>
          </div>
          <div className={styles.user_rank}>
            <div className={styles.user_avatar}/>
            <div className={styles.user_name}/>
            <div className={styles.user_points}/>
          </div>
          <div className={styles.user_rank}>
            <div className={styles.user_avatar}/>
            <div className={styles.user_name}/>
            <div className={styles.user_points}/>
          </div>
          <div className={styles.user_rank}>
            <div className={styles.user_avatar}/>
            <div className={styles.user_name}/>
            <div className={styles.user_points}/>
          </div>
          <div className={styles.user_rank}>
            <div className={styles.user_avatar}/>
            <div className={styles.user_name}/>
            <div className={styles.user_points}/>
          </div>
        </div>
    </article>
  )
}
