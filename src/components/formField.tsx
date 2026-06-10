import type { Props } from "../types";

const FormField = ({
  label,
  inputType,
  placeholder,
  register,
  errors,
  requireP,
  validation,
}: Props) => {
  return (
    <div className="bg-app-secondary text-app-primary p-3 m-3 rounded-[20px] grid grid-cols-1">
      <label>{label}</label>
      <br></br>
      <input
        type={inputType}
        className="bg-app-primary placeholder-app-secondary p-2 rounded-[10px] mt-2 text-app-secondary mb-2"
        placeholder={placeholder}
        {...register(label, { required: requireP, ...validation })}
      />
      {errors[label] && (
        <span>{(errors[label]?.message as string) || "Polje je obvezno"}</span>
      )}
    </div>
  );
};

export default FormField;
