import { CreateUser, User } from "@/types/types"


// Constantes
const BASE_URL= process.env.NEXT_PUBLIC_URL_BASE

// Registro de usuario
export const registerNewUser = async(userData: CreateUser) => {
  try {
    const response = await fetch(`${BASE_URL}/signup`,{
      method: 'POST',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(userData)
    })
    if(!response.ok) {
      throw new Error("No se ha podido crear el usuario");
    }
    const user = await response.json()
    return user
  } catch (error) {
    console.log(error)
  }
}


// Obtener usuario por la ID
export const getUserById = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
    if(!response.ok) {
      throw new Error("No se ha encontrado ningun usuario con esa ID")      
    }

    const user = await response.json()
    return user.cleanUser
  } catch (error) {
    console.log(error)
  }
}

// Actualizar usuario Datagame

export const UpdateUserById = async (id: string, updateData: any) => {

  try {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(updateData)
    })
    if(!response.ok) {
      throw new Error("Ha ocurrido un error");
    }
    const {userUpdated}: any  = response.json()
    return userUpdated
  } catch (error) {
    console.log(error)
  }
}