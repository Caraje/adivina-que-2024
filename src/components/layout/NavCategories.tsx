"use client"
import Link from 'next/link'
import styles from '@/styles/layout/NavCategories.module.css'
import { usePathname } from 'next/navigation'


export const NavCategories = () => {
  const pathname = usePathname()
  return (
    <nav className={styles.nav_categories}>
      <Link 
        href='/movies'
        className={(pathname === '/movies') ? styles.cat_link_active : styles.cat_link}
      >
          Peliculas
      </Link>
      <Link 
        href='/series'
        className={(pathname === '/series') ? styles.cat_link_active : styles.cat_link}
      >
          Series
      </Link>
      <Link 
        href='/videogames'
        className={(pathname === '/videogames') ? styles.cat_link_active : styles.cat_link}
      >
          Videojuegos
      </Link>
    </nav>
  )
}
