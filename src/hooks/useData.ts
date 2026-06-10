import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../functions/functions";

export const useData = () => {
  return useQuery({
    queryKey: ['data'],
    queryFn: fetchData,
  })
}


