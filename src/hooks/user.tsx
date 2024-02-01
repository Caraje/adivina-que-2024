// const getUserById = async (id:string) => {
  
//   try {
//     const response = await fetch(`http://localhost:3000/api/users/${id}`, {
//       method: 'GET',
//       headers: {
//         'Content-type': 'application/json'
//       }
//     });

//     if (response.ok) {
//       const user = await response.json();

//       return user.cleanUser;  // Retorna la respuesta del servidor
//     } else {
//       console.error('Error fetching user data:', response.status);
//       return null;  // Retorna null o maneja el error según tu lógica
//     }
//   } catch (error) {
//     console.error('Error fetching user data:', error);
//     return null;  // Retorna null o maneja el error según tu lógica
//   }
// }


import { getUserById } from '@/controllers/users';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const useUserData = (id:string) => {
  const { data } = useSession()
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserById(id);
        setUserData(result);
      } catch (error) {
        console.error("Error al obtener los datos del usuario:", error);
      }
    };

    fetchData();
  }, [id, data]);

  return userData;
};

export default useUserData;