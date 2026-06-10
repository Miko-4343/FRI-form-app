import { z } from "zod";

//Shema za formo, da jo lahko zod validira
export const formSchema = z.object({
  Ime: z.string().min(3),
  Priimek: z.string().min(3),
  Ulica: z.string(),
  "Poštna številka": z.coerce.number().int().min(1000).max(9999),
  Pošta: z.string(),
  Država: z.string(),
  "Davčna številka": z.coerce.number().int().min(10000000).max(99999999),
  "E-pošta": z.email(),
  "Rojstni dan": z.coerce.date().refine((date) => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    yesterday.setHours(23, 59, 59, 999);
    return date <= yesterday;
  }, "Datum mora biti vsaj en dan pred današnjim"),
});
