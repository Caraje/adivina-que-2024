import { connectDB } from "@/config/db"
import Level from "@/schemas/Level"
import { randomUUID } from "crypto"
import { NextResponse } from "next/server"
import { CATEGORIES } from '../../../utils/const';


export async function GET(req: Request) {
  return new Response('hola desde levels GET')
}
export async function POST(request: Request) {
  const {levelCategory, level_answers, level_images, image_correct, level_clue } = await request.json()
  try {
    if(level_answers.length < 1) return NextResponse.json({
      message: "Debe incluir al menos una respuesta correcta",
      type: 1
    }) 
    if(level_images.length < 5) return NextResponse.json({
      message: "Debe incluir 5 imagenesp para el nivel",
      type: 2
    }) 
    if(level_clue.length < 4 || level_clue.length > 4) return NextResponse.json({
      message: "Debe incluir 5 pistas para el nivel",
      type: 3
    }) 
    if(!image_correct || image_correct === '') return NextResponse.json({
      message: "Debe incluir una url para la imagen correcta del nivel",
      type: 5
    })

    if(!CATEGORIES.includes(levelCategory)) return NextResponse.json({
      message: 'Se debe incluir una categoria valida',
      type: 6
    })
  
  
    const level = new Level({
      level_id : randomUUID(),
      levelCategory,
      level_answers,
      level_images,
      image_correct,
      level_clue
    })
    await connectDB()
    const savedLevel = await level.save()
    console.log({savedLevel})
    return NextResponse.json({
      message: 'Level añadido correctamente',
      savedLevel
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      message: 'hay un error'
    }, {
      status: 400
    })
  }
  
}
export async function PATCH(req: Request) {
  return new Response('hola desde levels PATCH')
}
export async function DELETE(req: Request) {
  return new Response('hola desde levels DELETE')
}