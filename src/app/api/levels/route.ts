

export async function GET(req: Request) {
  return new Response('hola desde levels GET')
}
export async function POST(req: Request) {
  return new Response('hola desde levels POST')
}
export async function PATCH(req: Request) {
  return new Response('hola desde levels PATCH')
}
export async function DELETE(req: Request) {
  return new Response('hola desde levels DELETE')
}