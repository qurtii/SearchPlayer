import axios from "axios"
import { useQuery } from "@tanstack/react-query";

const getMatches = async (userID: string) => {
    const response = await axios.get(`https://api.opendota.com/api/players/${userID}/matches?limit=10`)
    return response.data;
}

export function useLastMatches(userID: string){
    const { 
        data: dataMathes, 
        isError: isErrorMatches , 
        isLoading: isLoadingMacthes,
        isSuccess: isSuccessMatches 
    } = useQuery({
        queryKey: ['matches', userID],
        queryFn: () => getMatches(userID),
      });
    // console.log(dataMathes)
    return { 
        data: dataMathes, 
        isError: isErrorMatches, 
        isLoading: isLoadingMacthes, 
        isSuccess: isSuccessMatches
    }
}