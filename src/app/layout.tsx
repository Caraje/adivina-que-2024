import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Adivina que',
  description: 'Pon a prueba tu conocimiento sobre series, peliculas y videojuegos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <header>
          <img 
            src='./static_img/logo.webp' 
            alt='/'
            width={100} 
            height={'auto'}
            />
          <nav>
            <Link href='/'>Peliculas</Link>
            <Link href='/'>Series</Link>
            <Link href='/'>Videojuegos</Link>
          </nav>
          <section>
            user
          </section>
        </header>
        {children}
      </body>
    </html>
  )
}
