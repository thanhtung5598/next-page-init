import {
  type DetailedHTMLProps,
  type FormHTMLAttributes,
  type ReactNode,
} from "react";
import FormProvider from "./context";

type Form = {
  children: ReactNode;
  onSubmit: () => void;
} & Omit<
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>,
  "onSubmit"
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

export default Form;
