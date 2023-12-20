

export async function GET(req: Request) {
  return new Response('hola desde users GET')
}
export async function POST(req: Request) {
  return new Response('hola desde users POST')
}
export async function PATCH(req: Request) {
  return new Response('hola desde users PATCH')
}
export async function DELETE(req: Request) {
  return new Response('hola desde users DELETE')
}