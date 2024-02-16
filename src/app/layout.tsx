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
const keywordsSeo: string[] = [
  "juego",
  "prueba",
  "conocimientos",
  "cine",
  "series",
  "videojuegos",
  "adivinanza",
  "titulos",
  "imagenes",
  "puntuacion",
  "tabla",
  "jugador",
  "desafio",
  "entretenimiento",
  "puntaje",
  "competencia",
  "diversion",
  "ranking",
  "desafiar",
  "competir",
]
export const metadata: Metadata = {

  title: 'AdivinaQue',
  description: 'Adivina que se trata de un juego que busca poner a prueba al jugador en sus conocimientos sobre cine, series y videojuegos, adivina los titulos gracias a cinco imagenes y puntua para estar en lo mas alto de la tabla',
  authors: [{ name: 'AdivinaQue' }, { name: 'AdivinaQue', url: 'https://adivina-que.vercel.app/' }],
  keywords: keywordsSeo,
  openGraph: {
    title: 'AdivinaQue',
    description: 'Adivina que se trata de un juego que busca poner a prueba al jugador en sus conocimientos sobre cine, series y videojuegos, adivina los titulos gracias a cinco imagenes y puntua para estar en lo mas alto de la tabla',
    url: 'https://adivina-que.vercel.app/',
    siteName: 'adivina-que.vercel.app',
    images: [
      {
        url: 'https://res.cloudinary.com/caraje/image/upload/v1708077015/AdivinaQue/voavj5hsmzjol52e4sz8.webp',
        width: 800,
        height: 600
      },
      {
        url: 'https://res.cloudinary.com/caraje/image/upload/v1708077015/AdivinaQue/voavj5hsmzjol52e4sz8.webp',
        width: 1800,
        height: 1600,
        alt: 'Imagen de pagina web de AdivinaQue'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  }
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
