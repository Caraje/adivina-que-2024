import { GamePage } from "@/components/categories/GamePage";

const levelByCategory = async (cat: string) => {
  try {
    const response = await fetch(`http://localhost:3000/api/levels/${cat}`, )
    if (response.ok) {
      const {levelList} = await response.json()
      return levelList
    }
  } catch (error) {
    console.log(error)
    return { error: 'Conection Error' }
  }
}
export default async function SeriesPage() {
  const levelList = await levelByCategory('series')
  console.log(levelList)
  return (
    <GamePage cat={'series'} lvl={levelList}/>
  )
}
