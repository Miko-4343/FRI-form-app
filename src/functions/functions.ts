import { formSchema } from "../schemas/schemas";
import type { form, User } from "../types";

export const fetchData = async () => {
  const res = await fetch("/data/data.json");
  return res.json();
};

export const sendData = async (data: User) => {
  const res = await sendFake(data);
  return res;
};

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

export const Validatedata = (data: form) => {
  return formSchema.safeParse(data).success;
};

export const ValidatedataFull = (data: form) => {
  return formSchema.safeParse(data);
};
