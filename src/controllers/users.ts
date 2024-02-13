import { CreateUser, User } from "@/types/types"
import bcrypt from 'bcryptjs';


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
export const getUserById = async (id: string, passCheck: boolean | null) => {
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
    if(passCheck) return user
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
  try {
    if(id === updateData.user_id){
      
      
      if(actualName === updateData.user_name && actualEmail === updateData.user_email) {
        console.log('El usuario No ha cambiado ni el nombre ni el correo y puede actualizarse')
        const newUser = await fetchUpdateUser(id, updateData) 
        return newUser
      }

      if(actualName !== updateData.user_name) {
        const isCorrect = await checkValidUser(updateData.user_email, null ,updateData.user_name)
        if(isCorrect.type === 1) return isCorrect
        if(isCorrect.type === 2 && actualEmail === updateData.user_email) {
          console.log('El usuario ha cambiado(y no hay otro igual), pero el correo no, por lo que puede grabar datos')
          const newUser = await fetchUpdateUser(id, updateData) 
          return newUser
        }        
      }

      if(actualEmail !== updateData.user_email) {
        const isCorrect = await checkValidUser(updateData.user_email, null ,'Break')
        if(isCorrect.type === 2) return isCorrect
        if(isCorrect.type === 3 && actualName === updateData.user_name) {
          console.log(isCorrect, 'El correo ha cambiado (y no hay otro igual), pero el nombre de usuario no')
          const newUser = await fetchUpdateUser(id, updateData) 
          return newUser
        }  
      }
      const isCorrect = await checkValidUser(updateData.user_email, null ,updateData.user_name)
      if(!isCorrect.ok) return isCorrect
      const newUser = await fetchUpdateUser(id, updateData) 
      return newUser
    }
    } catch (error) {
    console.log(error)
  }
}

export const checkValidUser = async (userEmail: string, userPass: string | null, name: string | null)  => {
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

  export const updateUserPassword = async (actualUser: User, id:string, oldPass:string, newPass:string, newPassB: string) => {
    if( newPass === '' || newPassB === '' || oldPass === '' ) return({
        ok: false,
        type: 10,
        msg: 'No puede dejar este campo vacio'
      })

    if(newPass.length < 6 ) return({
        ok: false,
        type: 11,
        msg: 'Debe tener al menos 6 caracteres'
      })

    if(newPass !== newPassB ) return({
        ok: false,
        type: 12,
        msg: 'Estos dos campos han de ser identicos'
      })
    
    const user = await getUserById(id,true)
    const passMatch = await bcrypt.compare(oldPass, user.user_password)
    if(!passMatch) return ({
      ok: false,
      type: 13,
      msg: 'La contraseña no es correcta'
    })
    const newUser = {
      ...actualUser,
      user_password:  await bcrypt.hash(newPass, 12)
    }
    const updatedUser = await fetchUpdateUser(id, newUser) 
    return updatedUser
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


export const deleteUser = async (id: string) => {

  try {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: 'DELETE',
      headers:{
        'Content-type' : 'application/json'
      }
    })
    if(!response.ok) {
      throw new Error("No se ha podido borrar el usuario");
    }
    const isDelete = response.json()
    return isDelete

  } catch (error) {
    console.log(error)
  }

}


