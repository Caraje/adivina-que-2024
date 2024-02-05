import styles from '@/styles/user/UserDataCard.module.css'
import { User } from '@/types/types'
import React from 'react'
import { SocialNetworkButton } from './SocialNetworkButton'

interface Props {
  userData: User | null
}

export const UserDataCard:React.FC<Props> = ({ userData }) => {
  // console.log({userData})
  return (
    <article className={styles.card}>
      <img 
        src={userData?.user_avatar} 
        alt='Imagen de usuario'         
        width={400}         
        height={400}
        className={styles.card_avatar}
      />
      <div className={styles.void}/>
      <section className={styles.card_info}>
        <h2 className={styles.card_info_name}>{userData?.user_name.toUpperCase()}</h2>
        <section className={styles.card_info_group_networks}>
          {
            userData?.user_networks.map(net => <SocialNetworkButton key={net.network_id} data={net}/>)
          }
        </section>
      </section>
    </article>
  )
}
