import { useMutation, useQuery } from "@tanstack/react-query";
import { sendData } from "../functions/functions";
import type { form } from "../types";

//Wrapper hook za useQuery sendData
export const useSendData = () => {
  return useMutation({
    mutationFn: (data: form) => sendData(data),
  });
};
