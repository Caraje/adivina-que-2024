import styles from '@/styles/skeletons/UserCardGame_skeleton.module.css'

export const UserCard_skeleton = () => {
  return (
    <article className={styles.card}>
      <div className={styles.avatar}/>
      <div className={styles.user_data}>
        <div className={styles.user_name}/> 
        <div className={styles.user_score_group}>
          <div className={styles.user_score}/>
          <div className={styles.user_score}/>
          <div className={styles.user_score}/>
        </div>
      </div>
    </article>
  )
}
