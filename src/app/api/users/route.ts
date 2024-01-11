import { randomUUID } from 'crypto'
import { NextResponse } from "next/server"
import { connectDB } from "@/config/db"
import User from "@/models/User"


export async function GET() {
  connectDB()
const test = randomUUID()
  const user = await User.find()
  return NextResponse.json({
    message: 'hola desde users GET',
    user,
    test
  })
}
export async function POST(request: Request) {
  try {
    const data = await request.json()
    const newUser = new User(data)
    console.log({newUser})
    const savedUser = await newUser.save()
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