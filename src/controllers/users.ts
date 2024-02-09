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
    const user = await response.json()
    // if(!response.ok) {
    //   throw new Error("No se ha podido crear el usuario");
    // }
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


const fetchUpdateUser = async (id:string, updateData: User) => {
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
  const userUpdated: any  = await response.json()
  return userUpdated 
}


export const UpdateUserById = async (id: string, updateData: User, actualName:string | null , actualEmail:string | null ) => {
// console.log({id, updateData})
  try {
    if(id === updateData.user_id){
      
      
      if(actualName === updateData.user_name && actualEmail === updateData.user_email) {
        console.log('El usuario No ha cambiado ni el nombre ni el correo y puede actualizarse')
        const newUser = await fetchUpdateUser(id, updateData) 
        return newUser
      }
      /*
        Comprobaciones:
        El correo es igual, hacer comprobacion de si exite otro usuario con el mismo nombre
          Si existe otro usuario con el mismo nombre, lanzar error
          si no existe otro usuario con el mismo nombre, guardar la info

        EL nombre es igual, hacer comprobacion de si existe otro usuario con el mismo correo
          Si existe otro usuario con el mismo correo, lanzar error.
          Si no existe otro usuario con el mismo correo, guardar la info.
      */
      
      const isCorrect = await checkValidUser(updateData.user_email, null ,updateData.user_name)
      
      console.log('Primera comprobacion del is Correct => ',isCorrect.type ,{isCorrect})
      if(isCorrect.type === 2 && actualEmail === updateData.user_email) { 
        console.log('El usuario actualizo el nombre pero no el correo, por lo que puede actualizar')
        if(isCorrect.type === 1) return isCorrect
        const newUser = await fetchUpdateUser(id, updateData) 
        return newUser
      }

      if(isCorrect.type === 1 && actualName === updateData.user_name) {
        console.log('El usuario actualizo el correo pero no el nombre, por lo que puede actualizarse')

        console.log({isCorrect})
        if(isCorrect.type === 2) return isCorrect
        const newUser = await fetchUpdateUser(id, updateData) 
        return newUser
      }

      console.log('esto entra=?', { isCorrect})
      return isCorrect
    }
    } catch (error) {
    console.log(error)
  }
}

export const checkValidUser = async (userEmail: string, userPass: string | null, name: string)  => {
  try {
    if(name && userEmail) {
      const response = await fetch(`${BASE_URL}/users?email=${userEmail}&name=${name}`, {
        method: 'GET',
        headers:{
          'Content-type' : 'application/json'
        }
      })
      const validUser = response.json()
      return validUser
    }
    if(userEmail && userPass) {
      const response = await fetch(`${BASE_URL}/users?email=${userEmail}&pass=${userPass}`, {
        method: 'GET',
        headers:{
          'Content-type' : 'application/json'
        }
      })
      const validUser = response.json()
      return validUser
    }
  
  } catch (error) {
    console.error(error)
  }
  }

// Obtener Todos los usuarios

export const getAllUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: 'GET',
      headers:{
        'Content-type' : 'application/json'
      }
    })
    if(!response.ok) {
      throw new Error("No se ha podido recuperar la lista de usuarios");
    }
    const usersList = response.json()
    return usersList

  } catch (error) {
    console.log(error)
  }
}


