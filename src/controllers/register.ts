import { CreateUser } from "@/types/types";


type ErrorResult = {
  error: Error;
  message: string;
};

export const createUser = async (userData: CreateUser): Promise<void | ErrorResult> => {
  const { user_name, user_email, user_password, user_password_repeat} = userData
  // {
  //   "user_name": "Caraje3",
  //   "user_email": "probando3@test.com",
  //   "user_avatar": "./static_img/avatars/02.jpg",
  //   "user_password": "123456",
  //   "user_networks": [
  //     ],
  //   "user_datagame": {
  //     "movies": [],
  //     "series": [],
  //     "videogames":[]
  //   }
  // }
  const userTest = {
    user_name,
    user_email,
    user_avatar: "./static_img/avatars/02.jpg",
    user_password,
    user_networks: [
      ],
    "user_datagame": {
      "movies": [],
      "series": [],
      "videogames":[]
    }
  }
  console.log(process.env.NEXT_PUBLIC_URL_BASE)
  try {
    if(user_name.length <= 4) throw new Error('El nombre de usuario debe tener mas de 4 caracteres')
    if(user_password.length < 6) throw new Error("El passWord debe contener al menos 6 caracteres")
    if ( user_password !== user_password_repeat) throw new Error("Ambos passwords deben ser iguales")
    const response = await fetch(`http://localhost:3000/api/users`, {
      method:'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(userTest)
    })
    const user = await response.json()
    console.log({user})

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