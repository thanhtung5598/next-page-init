import type { FieldValues } from 'react-hook-form';
import type { TextFieldProps } from '../shared/type';

const TextField = <T extends FieldValues>({
  label,
  isRequired,
  error,
  register,
  registerOptions,
  ...innerProps
}: TextFieldProps<T>) => {
  const registration = innerProps.name
    ? register(innerProps.name, {
        ...(isRequired && { required: `${innerProps.name} is required` }),
        ...registerOptions,
      })
    : {};

  return (
    <div className="m-textfield">
      {label && <label htmlFor={innerProps.name}>{label}</label>}
      <input
        id={innerProps.name}
        name={innerProps.name}
        type={innerProps.type}
        {...registration}
        {...innerProps}
      />
      {error && <p style={{ color: 'red' }}>{error.message}</p>}
    </div>
  );
};

TextField.displayName = 'TextField';

export default TextField;
