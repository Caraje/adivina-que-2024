import type { Metadata } from 'next'
import { Nunito } from 'next/font/google'
import '@/styles/globals.css'
import styles from '@/styles/layout/layout.module.css'
import Link from 'next/link'
import { NavCategories } from '@/components/layout/NavCategories'
import { UserButton } from '@/components/layout/UserButton'
import { Login } from '@/components/auth/Modal'
import { Providers } from '@/components/layout/Providers'
import { Footer } from '@/components/layout/Footer'

const nunito = Nunito({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Adivina que',
  description: 'Pon a prueba tu conocimiento sobre series, peliculas y videojuegos',
}

export default function RootLayout({children}: {children: React.ReactNode}) {

  return (
    <Providers>
      <html lang="es">
        <body className={`${nunito.className} ${styles.bodyLayout}`}>
        <Login/>
          <header className={styles.navbar}>
            <Link 
              href='/'
              className={styles.logoLink}
              >
              <img 
                src='/static_img/logo.webp' 
                alt='/'
                width={100} 
                height={'auto'}
                className={styles.logo}
                />
            </Link>
            <NavCategories />
            <UserButton />
          </header>
          
          {children}
          
        <footer>
          <Footer />
        </footer>
        </body>
      </html>
    </Providers>
  )
}
