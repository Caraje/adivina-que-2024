import { CreateUser } from "@/types/types";


export const createUser = async (userData: CreateUser)  => {
  const { name, email, password, password_repeat} = userData
  try {
    if(password.length < 6) {
      throw new Error("El passWord debe contener al menos 6 caracteres");
    }
    if ( password !== password_repeat) {
      throw new Error("Ambos passwords deben ser iguales");
      
    }
  } catch (error: any) {
    console.error('Error al procesar el formulario:', error.message)
    const err = {
      error, 
      message: error.message
    }
    return err
  }
  
  console.log({userData})
  return
}