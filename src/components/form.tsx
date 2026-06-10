import { Controller, useForm } from "react-hook-form";
import FormField from "./formField";
import { useEffect } from "react";
import { AlertDialog, Button, Flex, Text } from "@radix-ui/themes";
import { polja } from "../constants/index.js";
import type { form, PoljeType } from "../types/index.js";
import { Validatedata, ValidatedataFull } from "../functions/functions.js";
import { useSendData } from "../hooks/useSendData.ts";
import { toast } from "react-toastify";
import DatePicker from "react-datepicker";
import ResetButton from "./resetButton.tsx";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
    reset,
    control,
  } = useForm({
    resetOptions: { keepErrors: false }, // pobriše error message pri resetu
    defaultValues: {
      Ime: "",
      Priimek: "",
      Ulica: "",
      "Poštna številka": null,
      Pošta: "",
      Država: "",
      "Davčna številka": null,
      "E-pošta": "",
      "Rojstni dan": null,
    },
  }); // default values, zato da reset ve na kaj naj jih nastavi
  const mutation = useSendData();
  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]); // funkcija, ki se zgodi ob mountingu in vsakič, ko je se posodbi stanje isSubmitsuccessful in  nato pokliče reset
  const onSubmit = (data: form) => {
    const res = ValidatedataFull(data);

    if (res.success) {
      toast.promise(mutation.mutateAsync(data), {
        pending: "Podatki se pošiljajo",
        success: "Podatki so bili uspešno poslani",
        error: "Nekaj se je zalomilo :(",
      });
    } else {
      toast.error(res.error.issues[0].message);
    }
  }; // funkcija, ki simulira pošiljanje podatkov iz forme

  let filtriranaPolja = polja.filter((elem) => elem.label !== "Dummy text");
  return (
    <main>
      <div className="bg-app-primary text-app-secondary p-2 m-2 rounded-[20px] grid justify-center">
        <div className="bg-app-secondary text-app-primary rounded-[20px] text-2xl p-2 flex justify-center m-2">
          <Text>FORM</Text>
        </div>
        <form className="grid grid-cols-3" onSubmit={handleSubmit(onSubmit)}>
          {filtriranaPolja.map((polje: PoljeType, id) =>
            polje.isDatePicker ? (
              <div
                key={id}
                className="bg-app-secondary text-app-primary p-3 m-3 rounded-[20px] grid grid-cols-1"
              >
                <label>Rojstni dan</label>
                <br></br>
                <Controller
                  name={polje.label as keyof form}
                  control={control}
                  rules={{ required: "Polje je obvezno" }}
                  render={({ field }) => (
                    <DatePicker
                      selected={field.value ? new Date(field.value) : null}
                      onChange={(date) =>
                        field.onChange(date?.toISOString().split("T")[0] ?? "")
                      }
                      placeholderText={polje.placeholder}
                      isClearable
                      dateFormat="dd.mm.yyyy"
                      className="bg-app-primary placeholder-app-secondary p-2 rounded-[10px] mt-2 text-app-secondary mb-2"
                    />
                  )}
                />

                {errors["Rojstni dan"] && (
                  <span>
                    {(errors["Rojstni dan"]?.message as string) ||
                      "Polje je obvezno"}
                  </span>
                )}
              </div>
            ) : (
              <FormField
                key={id}
                label={polje.label}
                inputType={polje.inputType}
                placeholder={polje.placeholder}
                register={register}
                errors={errors}
                requireP={true}
                validation={polje.validation}
              />
            ),
          )}
          <div></div>
          <div className="flex justify-center items-center">
            <button className="bg-app-secondary rounded-[18px] text-app-primary p-5 size-fit mr-5">
              Pošlji
            </button>
            <ResetButton
              resetFn={() =>
                reset({
                  Ime: "",
                  Priimek: "",
                  Ulica: "",
                  "Poštna številka": null,
                  Pošta: "",
                  Država: "",
                  "Davčna številka": null,
                  "E-pošta": "",
                  "Rojstni dan": null,
                })
              }
            />
          </div>
        </form>
      </div>
    </main>
  );
};

export default Form;
