import User from '@/schemas/User'
import {NextResponse} from 'next/server'
import bcrypt from "bcryptjs";
import { connectDB } from '@/config/db';
import { randomUUID } from 'crypto'

export async function POST(request: Request) {

  const { user_name, user_email, user_password, user_password_repeat } = await request.json()
  try {
    // Comprobaciones
  if(!user_name) return NextResponse.json({
    message: "Se debe introducir un nombre de usuario",
    type: 1
  },{
    status: 400
  })

  if(!user_email) return NextResponse.json({
    message: "Se debe introducir una dirección de correo",
    type: 2
  },{
    status: 400
  })

  if(!user_password || user_password.length < 6) return NextResponse.json({
    message: "El password debe contener al menos 6 caracteres",
    type: 3
  },{
    status: 400
  })
  
  if(user_password !== user_password_repeat) return NextResponse.json({
    message: "El password debe coincidir",
    type: 4
  },{
    status: 400
  })
  await connectDB()
  const [userFoundByMail, userFoundByName] = await Promise.all([
    User.findOne({ user_email }),
    User.findOne({ user_name }),
  ]);
  if(userFoundByMail) return NextResponse.json({
    message: 'El correo ya existe',
    type: 5
  }, {
    status: 400
  })
  if(userFoundByName) return NextResponse.json({
    message: 'Ya existe un usuario con ese nombre',
    type: 6
  }, {
    status: 400
  })

  const hashedPass = await bcrypt.hash(user_password, 12)
  const user = new User({
    user_id : randomUUID(),
    user_name, 
    user_email, 
    user_password: hashedPass,
  })
  const savedUser = await user.save()
  return NextResponse.json(savedUser)
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      message: 'hay un error'
    }, {
      status: 400
    })
  }

  

}