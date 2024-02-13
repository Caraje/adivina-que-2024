import { GamePage } from "@/components/categories/GamePage";
import { levelByCategory } from "@/controllers/levels";

export default async function VideoGamesPage() {
  const levelList = await levelByCategory('videogames')
  const orderedLevelList = levelList?.sort(() => Math.random() - 0.5 )

  return (
    <GamePage cat={'videogames'} lvl={orderedLevelList} />
  )
}
