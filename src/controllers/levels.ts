

export const levelByCategory = async (cat: string) => {
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