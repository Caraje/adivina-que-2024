import { NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/config/db"
import User from "@/schemas/User"
import bcrypt from 'bcryptjs';


export async function GET(req: NextRequest ) {
  const query = req.nextUrl.searchParams
  const user_name: string | null = query.get('name')
  const user_email: string | null = query.get('email')
  const user_password: string | null = query.get('pass')

  if( user_name && user_email) {
    await connectDB()
    const userFoundByName = await User.findOne({user_name})
    const userFoundByMail = await User.findOne({user_email})

    if(userFoundByName) return NextResponse.json({
      ok: false,
      message: 'Ya existe un usuario con ese nombre',
      type: 1
    }, {
      status: 400
    })

    if(userFoundByMail) return NextResponse.json({
      ok: false,
      message: 'Ya existe un usuario con ese correo',
      type: 2
    }, {
      status: 400
    })
    
    return NextResponse.json({
      ok: true,
      message: 'No existen usuarios con ese nombre o correo',
      type: 3
    }, {
      status: 400
    })
  }

  if( user_email || user_password) {
    await connectDB()
    const userFoundByMail = await User.findOne({user_email})
    if(!userFoundByMail) return NextResponse.json({
      ok: false,
      message: 'El correo o la contraseña no son validos',
      type: 1
    }, {
      status: 400
    })
    if(user_password !== null){
      const passMatch = await bcrypt.compare(user_password, userFoundByMail.user_password)
      if(!passMatch) return NextResponse.json({
        ok: false,
        message: 'El correo o la contraseña no son validos',
        type: 2
      }, {
        status: 400
      })
    }
    return NextResponse.json({
      ok: true
    }, {
      status: 200
    })
  }
  
  connectDB()
  const user = await User.find()
  return NextResponse.json({
    message: 'hola desde users GET',
    user
  })
}
export async function POST(request: Request) {
  return new Response('hola desde users POST')
  
}
export async function PATCH(req: Request) {
  return new Response('hola desde users PATCH')
}
export async function DELETE(req: Request) {
  return new Response('hola desde users DELETE')
}