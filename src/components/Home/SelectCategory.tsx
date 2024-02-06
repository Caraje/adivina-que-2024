'use client'
import styles from '@/styles/Home/SelectCategory.module.css'
import { CategoryCard } from './CategoryCard'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import useUserData from '@/hooks/user'

export const SelectCategory = () => {
  const { data, status } = useSession()
  const actualUser:any = data?.user
  const userInfo: any = useUserData(actualUser?.user_id)
  
  
  if (status === 'loading') {
    return <div>Cargando...</div>
  }
  return (
    <main className={styles.select_category}>
      <h1 className={styles.title}>Adivina que</h1>
      <section className={styles.group_categories}>
        <Link 
          href={'/movies'}
          className={styles.link}
        >          
        <CategoryCard 
            category={'Cine'} 
            image={'./static_img/movies_horizotal.webp'}
            userDataLevels={userInfo?.user_datagame.movies}
          />
          </Link>
        <Link 
          href={'/series'}
          className={styles.link}
        >          
        <CategoryCard 
            category={'Series'} 
            image={'./static_img/series_horizotal.webp'}
            userDataLevels={userInfo?.user_datagame.series}
          />
        </Link>
        <Link 
          href={'/videogames'}
          className={styles.link}
        >          
        <CategoryCard 
            category={'Videojuegos'} 
            image={'./static_img/videogames_horizotal.webp'}
            userDataLevels={userInfo?.user_datagame.videogames}
          />
        </Link>
      </section>
    </main>
  )
}
