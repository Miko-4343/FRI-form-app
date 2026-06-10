import type {
  FieldErrors,
  RegisterOptions,
  UseFormRegister,
} from "react-hook-form";
import type { formSchema } from "../schemas/schemas";
import type z from "zod";
export type Props = {
  label: string;
  inputType: string;
  placeholder: string;
  register: UseFormRegister<any>;
  errors: FieldErrors;
  requireP: boolean;
  validation?: RegisterOptions;
};

export type PoljeType = {
  label: string;
  inputType: string;
  placeholder: string;
  validation: RegisterOptions;
  isDatePicker?: boolean;
};

export type Modal = {
  selectedUser: User | null;
  setSelectedUser: (user: User | null) => void;
  editForm: Partial<User>;
  setEditForm: React.Dispatch<React.SetStateAction<Partial<User>>>;
  setData: React.Dispatch<React.SetStateAction<User[]>>;
};

export type form = z.infer<typeof formSchema>;

export type User = z.infer<typeof formSchema>;
