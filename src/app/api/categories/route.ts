

export async function GET(req: Request) {
  const testResponse = {
    "status": "202", 
    "message": "Hola desde categoriresGET"
  }
  const test = JSON.stringify(testResponse)
  console.log({test})
  return new Response(JSON.stringify({
    "status": "202", 
    "message": "Hola desde categoriresGET"
  }))
}
export async function POST(req: Request) {
  return new Response('hola desde categories POST')
}
export async function PATCH(req: Request) {
  return new Response('hola desde categories PATCH')
}
export async function DELETE(req: Request) {
  return new Response('hola desde categories DELETE')
}