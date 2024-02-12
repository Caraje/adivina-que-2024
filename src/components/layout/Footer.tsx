import Link from 'next/link'
import React from 'react'
import styles from '@/styles/layout/Footer.module.css'

export const Footer = () => {
  return (
    <section className={styles.footer_web}>
      <section className={styles.footer_sponsored}>
        <h4>
          Partrociando por: 
        </h4>
        <Link
          href='https://dadosypixeles.com'
          target='_blank'
        >
          <img 
            src='/static_img/Logo_Original.webp'
            alt='Logo de la web Dados y pixeles'
            width={150}
            height='auto'          
          />
        </Link>
      </section>
      <section className={styles.footer_webmaster}>
        <h4>Creado por <Link href='https://www.caraje.dev' target='_blank' >Caraje.dev</Link></h4>
      </section>
      <section className={styles.footer_donation}>
        <h4>Puedes apoyar esta web en:</h4>
        <Link href="https://www.buymeacoffee.com/caraje" target="_blank">
          <img 
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" 
            alt="Buy Me A Coffee" 
            width={150}
            height='auto'
          />
        </Link>
      </section>
    </section>
  )
}
