
import { connectDB } from "@/config/db"
import User from "@/schemas/User"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { NextResponse } from "next/server"


//id-Example:  011281ee-01a2-466f-b92f-89c2fc67eb1f 
export async function GET(req: Request, { params }: Params) {
  const {id}  = params
  try {
    await connectDB()
    const foundUser = await User.findOne({user_id: id} )
    if(foundUser) {
      const { user_password, ...cleanUser } = foundUser.toObject()
      return NextResponse.json({
        message: "Recuperar usuarios con el ID",
        cleanUser,
      })
    } else {
      return NextResponse.json({
        message: "Usuario no encontrado con el ID proporcionado"
      })
    }
  } catch (error) {
    console.log(error)
  }

  return NextResponse.json({
    message: 'Recuperar usuarios con el ID',
    id
  })
}
export async function POST(request: Request) {
  return NextResponse.json({
    message: "Hola desde el route de cat"

  })
}
export async function PUT(req: Request, { params }: Params) {
  const user = await req.json()
  const {id} = params
  
  try {
    // await connectDB()
    const userUpdated = await User.findOneAndUpdate({user_id: id}, user)
    return NextResponse.json({
      message: 'Usuario actualizado',
      userUpdated
    })
  } catch (error) {
    
  }
  return NextResponse.json({
    message: 'se actualiza los datos del usuario',
    id
  })
}
export async function DELETE(req: Request) {
  return new Response('hola desde levels DELETE')
}