import { GamePage } from "@/components/categories/GamePage";
import { levelByCategory } from "@/controllers/levels";

export default async function SeriesPage() {
  const levelList = await levelByCategory('series')
  console.log(levelList)
  return (
    <GamePage cat={'series'} lvl={levelList}/>
  )
}
