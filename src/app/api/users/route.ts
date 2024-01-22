import { randomUUID } from 'crypto'
import { NextResponse } from "next/server"
import { connectDB } from "@/config/db"
import User from "@/schemas/User"


export async function GET() {
  connectDB()
  const user = await User.find()
  return NextResponse.json({
    message: 'hola desde users GET',
    user
  })
}
export async function POST(request: Request) {
  try {
    connectDB()
    const data = await request.json()

    const newUser = new User(data)
    const savedUser = await newUser.save()
    console.log({savedUser})
    return NextResponse.json(savedUser, newUser)       
  } catch (error) {
    return NextResponse.json(error,{
      status: 400
    })
    
  }
}
export async function PATCH(req: Request) {
  return new Response('hola desde users PATCH')
}
export async function DELETE(req: Request) {
  return new Response('hola desde users DELETE')
}