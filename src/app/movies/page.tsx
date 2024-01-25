import { GamePage } from "@/components/categories/GamePage";
import { levelByCategory } from "@/controllers/levels";

export default async function MoviesPage() {

  const levelList = await levelByCategory('movies')
  return (
    <GamePage cat={'movies'} lvl={levelList}/>
  )
}
