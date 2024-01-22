import User from '@/schemas/User'
import {NextResponse} from 'next/server'
import bcrypt from "bcryptjs";
import { connectDB } from '@/config/db';

export async function POST(request: Request) {

  const { user_name, user_email, user_password, user_password_repeat } = await request.json()
  try {
    // Comprobaciones
  if(!user_name) return NextResponse.json({
    message: "Se debe introducir un nombre de usuario"
  },{
    status: 400
  })

  if(!user_email) return NextResponse.json({
    message: "Se debe introducir una dirección de correo"
  },{
    status: 400
  })

  if(!user_password || user_password.length < 6) return NextResponse.json({
    message: "El password debe contener al menos 6 caracteres"
  },{
    status: 400
  })
  
  if(user_password !== user_password_repeat) return NextResponse.json({
    message: "El password debe coincidir"
  },{
    status: 400
  })
  connectDB()
  const userFound = await User.findOne({user_email})
  if(userFound) return NextResponse.json({
    message: 'El correo ya existe'
  }, {
    status: 400
  })

  const hashedPass = await bcrypt.hash(user_password, 12)
  const user = new User({
    user_name, 
    user_email, 
    user_password: hashedPass,
  })
  const savedUser = await user.save()
  console.log(savedUser)
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