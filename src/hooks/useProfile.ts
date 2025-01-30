import axios from "axios";
import { useQuery } from "@tanstack/react-query"; 

// Функция для запроса данных
const getData = async (userID: string) => {
  const response = await axios.get(`https://api.opendota.com/api/players/${userID}/`);
  return response.data;
};

export function useProfile(userID: string) {
  const { data, isError, isLoading, isSuccess } = useQuery({
    queryKey: ['profile', userID],
    queryFn: () => getData(userID),
  });


  return { data, isError, isLoading, isSuccess };
}
