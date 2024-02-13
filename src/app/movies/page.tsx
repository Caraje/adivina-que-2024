import { GamePage } from "@/components/categories/GamePage";
import { levelByCategory } from "@/controllers/levels";

export default async function MoviesPage() {
  const levelList = await levelByCategory('movies')
  const orderedLevelList = levelList?.sort(() => Math.random() - 0.5 )
  
  return (
    <GamePage cat={'movies'} lvl={orderedLevelList}/>
  )
}
