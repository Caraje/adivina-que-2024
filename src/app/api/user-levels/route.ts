

export async function GET(req: Request) {
  return new Response('hola desde user-levels GET')
}
export async function POST(req: Request) {
  return new Response('hola desde user-levels POST')
}
export async function PATCH(req: Request) {
  return new Response('hola desde user-levels PATCH')
}
export async function DELETE(req: Request) {
  return new Response('hola desde user-levels DELETE')
}