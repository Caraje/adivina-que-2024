import styles from '@/styles/skeletons/SelectCategory_Skeleton.module.css'
import Link from 'next/link'
import { CategoryCard } from '../Home/CategoryCard'

export const SelectCategory_Skeleton = () => {
  return (
    <main className={styles.select_category}>
      <h1 className={styles.title}>Adivina que</h1>
      <section className={styles.group_categories}>
        <h2 className={styles.loading}>Cargando...</h2>
        <div className={styles.category}/>
        <div className={styles.category}/>
        <div className={styles.category}/>
      </section>
    </main>
  )
}
