import { type ReactNode } from 'react';
import {
  type Control,
  type FieldError,
  type FieldValues,
  type Path,
  type RegisterOptions,
  type UseFormRegister,
} from 'react-hook-form';

type CommonFieldProps<T extends FieldValues> = {
  label?: string | ReactNode;
  error?: FieldError;
  type?: string;
  isRequired?: boolean;
  register: UseFormRegister<T>;
  name?: Path<T>;
  registerOptions?: RegisterOptions<T>;
  control?: Control<T>;
};

export type TextFieldProps<T extends FieldValues> = CommonFieldProps<T>;
