import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getWinrate = async (userID: string) => {
    const response = await axios.get(`https://api.opendota.com/api/players/${userID}/wl?limit=10`)
    return response.data;
}

export function useWinrate(userID: string){
    const { 
        data: dataWinrate, 
        isError: isErrorWinrate , 
        isLoading: isLoadingWinrate,
        isSuccess: isSuccessWinrate
    } = useQuery({
        queryKey: ['winrate', userID],
        queryFn: () => getWinrate(userID),
      });
      
      let winrate: string | null = null;
      if (dataWinrate) {
          const total_match = dataWinrate.win + dataWinrate.lose;
          winrate = (dataWinrate.win / total_match) * 100;
        //   console.log(winrate);
      }
  
      return { 
          data: winrate, 
          isError: isErrorWinrate, 
          isLoading: isLoadingWinrate, 
          isSuccess: isSuccessWinrate
      };
}