import { getAllUsers } from "@/controllers/users";
import { useEffect, useState } from "react"

export const useUserList = () => {
  const [usersList, setUsersList] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAllUsers();
        setUsersList(result);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchData();
  }, [])
  return usersList
}