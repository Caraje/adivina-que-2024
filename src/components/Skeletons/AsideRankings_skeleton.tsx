'use client'
import styles from '@/styles/skeletons/AsideRankings_skeleton.module.css'



const AsideRankings_skeleton = () => {

  return (
    <aside className={styles.aside_home}>
      <h2>Top 10</h2>
      
      <h3 className={styles.title}>Cine</h3>
      <div className={styles.rankCard}>
        <h4 className={styles.loading} >Cargando...</h4>
      </div>
      <h3 className={styles.title}>Series</h3>
      <div className={styles.rankCard}>
        <h4 className={styles.loading} >Cargando...</h4>
      </div>
      <h3 className={styles.title}>Videojuegos</h3>
      <div className={styles.rankCard}>
        <h4 className={styles.loading} >Cargando...</h4>
      </div>
    </aside>
  )
}

export default AsideRankings_skeleton