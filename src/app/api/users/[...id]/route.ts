
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
        user_password
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
    await connectDB()
    const userUpdated = await User.findOneAndUpdate({user_id: id}, user, { new: true })
    if(userUpdated) {
      return NextResponse.json({
        ok:true,
        message: 'Usuario actualizado',
        userUpdated
      })
    }
    return NextResponse.json({
      ok:false,
      message: 'No se ha podido actualizar el usuario'
    })
  } catch (error) {
    console.error(error)
  }
  return NextResponse.json({
    message: 'se actualiza los datos del usuario',
    id
  })
}
export async function DELETE(req: Request, { params }: Params) {
  const {id} = params
  console.log(id)
  if(!id) {
    return NextResponse.json({
      ok: false,
      message: 'Falta un ID valido'
    })
  }
  await connectDB()
  const userFoundByid = await User.findOne({user_id: id})
  if(userFoundByid) {
    const deleteUser = await User.deleteOne({ user_id: id });
    if(deleteUser.deletedCount === 1) {
      return NextResponse.json({
        ok: true, 
        message: 'Se ha borrado el usuario',
        deleteUser
      })
    }
    return NextResponse.json({
      ok: false, 
      message: 'No se ha podido borrar el usuario',
      type: 20
    })

  }
}