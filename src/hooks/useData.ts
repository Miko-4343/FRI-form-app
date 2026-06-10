import { useQuery } from "@tanstack/react-query";
import { fetchData } from "../functions/functions";

//Wrapper hook za useQuery.

export const useData = () => {
  return useQuery({
    queryKey: ["data"],
    queryFn: fetchData,
  });
};
