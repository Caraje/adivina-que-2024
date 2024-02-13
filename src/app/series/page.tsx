import { GamePage } from "@/components/categories/GamePage";
import { levelByCategory } from "@/controllers/levels";

export default async function SeriesPage() {
  const levelList = await levelByCategory('series')
  const orderedLevelList = levelList?.sort(() => Math.random() - 0.5 )
  return (
    <GamePage cat={'series'} lvl={orderedLevelList}/>
  )
}
