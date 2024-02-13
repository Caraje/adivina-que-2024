import { getUserById } from '@/controllers/users';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

const useUserData = (id:string) => {
  const { data } = useSession()
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getUserById(id, false);
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