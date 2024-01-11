import { connectDB } from "@/config/db"

import { NextResponse } from "next/server"


export async function GET() {
  return new Response('hola desde categories GET')

}
export async function POST() {
  return new Response('hola desde categories POST')

}
export async function PATCH(req: Request) {
  return new Response('hola desde categories PATCH')
}
export async function DELETE(req: Request) {
  return new Response('hola desde categories DELETE')
}