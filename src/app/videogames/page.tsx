import { GamePage } from "@/components/categories/GamePage";
import { levelByCategory } from "@/controllers/levels";

export default async function VideoGamesPage() {
  const levelList = await levelByCategory('movies')
  return (
    <GamePage cat={'videogames'} lvl={levelList} />
  )
}
