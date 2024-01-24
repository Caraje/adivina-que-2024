import { GamePage } from "@/components/categories/GamePage";

// export const levelByCategory = async (cat) => {
//   try {
//     const response = await fetch(`http://localhost:3000/api/levels/movies`, )
//     if (response.ok) {
//       const {levelList} = await response.json()
//       return levelList
//     }
//   } catch (error) {
//     console.log(error)
//     return { error: 'Conection Error' }
//   }
// }

export default async function MoviesPage() {
// const levelList = await levelByCategory('movies') 
// console.log(levelList)
  return (
    <GamePage cat={'movies'} />
  )
}
