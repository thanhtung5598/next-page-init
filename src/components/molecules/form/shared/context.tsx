import { createContext, type ReactNode, useContext, useMemo } from 'react';

type FormContextProps = object;

type FormProviderProps = {
  children: ReactNode;
};

const initialContext: FormContextProps = {};

const FormContext = createContext<FormContextProps>(initialContext);

export default function FormProvider({ children }: FormProviderProps) {
  const sample = useMemo(() => ({ sample: 'sample' }), []);
  return <FormContext.Provider value={sample}>{children}</FormContext.Provider>;
}

export function useFormContext(): Partial<FormProviderProps> {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useForm must be used within a FormProvider');
  }
  return {
    ...context,
    children: null,
  };
}
