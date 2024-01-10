import { exampleUser } from "@/utils/exampleActiveUser"

export default function UserPage({params}: { params: { id: string }}) {
  const { id } = params
  const user = exampleUser
  return (
    <h1>Esto es la pagina de usuarios</h1>
  )
}
