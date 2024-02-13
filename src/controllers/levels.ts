import { NEXT_PUBLIC_URL_BASE } from "@/utils/env"


export const levelByCategory = async (cat: string) => {
  try {
    const response = await fetch(`${NEXT_PUBLIC_URL_BASE}/levels/${cat}`, )
    if (response.ok) {
      const {levelList} = await response.json()
      return levelList
    }
  } catch (error) {
    console.log(error)
    return { error: 'Conection Error' }
  }
}