import styles from '@/styles/user/SocialNetworkButton.module.css'
import { Networks } from '@/types/types'
import Link from 'next/link'
import React from 'react'
import { IconInstagram, IconTwitch, IconTwitter, IconYoutube } from '../Icons'

interface Props {
  data: Networks
}


const iconNetwork: {[key: string]: React.JSX.Element} = {
  Twitter: <IconTwitter size={40}/>,
  Twitch: <IconTwitch size={40}/>,
  instagram: <IconInstagram size={40}/>,
  Youtube: <IconYoutube size={40}/>,
}
export const SocialNetworkButton: React.FC<Props> = ({data}) => {

  return (
    <Link  
      href={data.network_url}
      target='_blank'
      rel='noreferrer'
      className={styles.btn_link}
    >
      {iconNetwork[data.network_name]}
    </Link>
  )
}
