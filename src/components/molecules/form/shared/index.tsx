import {
  type DetailedHTMLProps,
  type FormHTMLAttributes,
  type ReactNode,
} from 'react';
import FormProvider from './context';
import type { FieldValues } from 'react-hook-form';
import type { TextFieldProps } from './type';

import TextField from '../text-field';

type Form = {
  children: ReactNode;
  onSubmit: () => void;
} & Omit<
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  'onSubmit'
>;

const Form = ({ children, onSubmit, ...props }: Form) => {
  return (
    <FormProvider>
      <form
        {...props}
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        {children}
      </form>
    </FormProvider>
  );
};

const InputField = <T extends FieldValues>(props: TextFieldProps<T>) => {
  return <TextField {...props} />;
};

Form.InputField = InputField;

export default Form;
