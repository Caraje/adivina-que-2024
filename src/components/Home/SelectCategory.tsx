import styles from '@/styles/Home/SelectCategory.module.css'
import { CategoryCard } from './CategoryCard'
import Link from 'next/link'

export const SelectCategory = () => {
  return (
    <main className={styles.select_category}>
      <h1 className={styles.title}>Adivina que</h1>
      <section className={styles.group_categories}>
        <Link 
          href={'/movies'}
          className={styles.link}
        >          <CategoryCard 
            category={'Cine'} 
            image={'./static_img/cinema.webp'}
            points={999}
            correct={999}
            errors={999}
          />
          </Link>
        <Link 
          href={'/series'}
          className={styles.link}
        >          <CategoryCard 
            category={'Series'} 
            image={'./static_img/series.webp'}
            points={999}
            correct={999}
            errors={999}
          />
        </Link>
        <Link 
          href={'/videogames'}
          className={styles.link}
        >          <CategoryCard 
            category={'Videojuegos'} 
            image={'./static_img/videogames.webp'}
            points={999}
            correct={999}
            errors={999}
          />
        </Link>
      </section>
    </main>
  )
}
