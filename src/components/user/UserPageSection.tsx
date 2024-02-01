'use client'
import useUserData from '@/hooks/user'
import { useSession } from 'next-auth/react'
import React from 'react'

interface Props {
  id: string
}
export const UserPageSection: React.FC<Props> = ({id}) => {
  const { data, status, update } = useSession()
  const userPage = useUserData(id)
  const user: any = data?.user
  if (status === 'loading') {
    return <div>Cargando...</div>
  }
  if(user?.user_id === id) {
    return (
      <section>
        <section>
          Aqui la card del usuario
        </section>
        <section>
          Aqui seccion con cards de puntuacion de las categorias
          {/* Seran cards por categorias, crear una para pasarle las diferentes categorias http://localhost:3000/user/5a1f3a30-ef56-4cb6-bbfe-7bcd6569d92e*/}
        </section>
      </section>
    )
  }
  return (
    <div>Es otro usuario</div>
  )
}
