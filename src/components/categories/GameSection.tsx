
'use client'
import { LevelGame } from '@/types/types'
import { useSession } from 'next-auth/react'
import useUserData from '@/hooks/user'
import { DemoGame } from './DemoGame'
import { LoggedUserGame } from './LoggedUserGame'

interface Props {
  cat: string,
  lvl: LevelGame[]
}


export const GameSection: React.FC<Props> = ({cat, lvl}) => {
  
  const { data, status } = useSession();
  const user: any = data?.user
  const userId = user?.user_id;
  const userData = useUserData(userId);
  
  // EStado pendiente
  if(status === 'loading') {
    return <div>cargando...</div>
  }
  // EStado usuario logueado
  if(status === 'authenticated' && data?.user) {
  
    return (
      <LoggedUserGame 
      listLevels={lvl}
      cat={cat}
      userData={userData}
        />
    )
    
  } else {
    // EStado SIN usuario logueado
    const demoLevelsList = lvl.slice(0,5)
    return (
      <DemoGame listLevels={demoLevelsList} />
    )
  }



  

  
}
