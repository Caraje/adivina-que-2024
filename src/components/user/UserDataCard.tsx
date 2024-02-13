import styles from '@/styles/user/UserDataCard.module.css'
import { User } from '@/types/types'
import React from 'react'
import { SocialNetworkButton } from './SocialNetworkButton'

interface Props {
  userData: User | null,
  isOpen?: boolean,
  isActualUser?: boolean,
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserDataCard:React.FC<Props> = ({ userData, isOpen, setIsOpen, isActualUser= false }) => {
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
            userData?.user_networks.map(net => net.network_url !== '' && <SocialNetworkButton key={net.network_id} data={net}/>)
          }
        </section>
        {

        }
        {
          isActualUser && (
            <button
              onClick={() => setIsOpen && setIsOpen(!isOpen)}
              className={styles.btn_update}
            >
              Editar Perfil
              </button> 
          )
        }
      </section>
    </article>
  )
}
