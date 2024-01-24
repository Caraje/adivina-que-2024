
import { connectDB } from "@/config/db"
import Level from "@/schemas/Level"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { NextResponse } from "next/server"



export async function GET(req: Request, { params }: Params) {
  const {cat}  = params
  try {
    await connectDB()
    const levelList = await Level.find({levelCategory: cat} )
    return NextResponse.json({
      message: "Hola desde el route de cat",
      levelList
    })
  } catch (error) {
    console.log(error)
  }
}
export async function POST(request: Request) {
  return NextResponse.json({
    message: "Hola desde el route de cat"

  })
}
export async function PATCH(req: Request) {
  return new Response('hola desde levels PATCH')
}
export async function DELETE(req: Request) {
  return new Response('hola desde levels DELETE')
}