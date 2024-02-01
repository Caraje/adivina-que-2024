import { UserPageSection } from "@/components/user/UserPageSection"

export default function UserPage({params}: { params: { id: string }}) {
  const { id } = params

  return (
    <UserPageSection id={id}/>
  )
}
