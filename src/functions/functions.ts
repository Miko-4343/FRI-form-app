import { formSchema } from "../schemas/schemas";
import type { form, User } from "../types";

/*
Funkcija, ki pridobi podatke iz backenda.
Trenutno jih pridobiva iz začasne json datoteke.
*/
export const fetchData = async () => {
  const res = await fetch("/data/data.json");
  return res.json();
};

/*
Funkcija, ki pošlje podatke na strežnik
Simulira tudi asinhron klic
*/
export const sendData = async (data: User) => {
  const res = await sendFake(data);
  return res;
};

/*
Funkcija, ki doda lažen zamik v pošiljanju podatkov
*/
const sendFake = async (data: User) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  const random = Math.random();

  if (random < 0.1) {
    throw new Error("Random failure occurred");
  }

  console.log(data);

  return {
    success: true,
    code: 200,
  };
};

/*
Funkcija, ki vrrne true/false za validacijo podatkov
*/
export const Validatedata = (data: form) => {
  return formSchema.safeParse(data).success;
};

/*
Funkcija, ki vrne celoten objekt
Z njo je lažje izpisati error message
*/
export const ValidatedataFull = (data: form) => {
  return formSchema.safeParse(data);
};
