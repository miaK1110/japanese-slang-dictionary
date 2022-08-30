// form input for type=text,password and email

import { memo, FC } from 'react';
import {
  RegisterOptions,
  DeepMap,
  FieldError,
  UseFormRegister,
  Path,
} from 'react-hook-form';
import TextField from '@mui/material/TextField';
import { FormValues } from '../Molecule/LoginForm';

type InputFiledType = 'text' | 'password' | 'email';

type Props = {
  required?: boolean;
  width?: string;
  type?: InputFiledType;
  id?: string;
  label?: string;
  name?: string;
  autoComplete?: string;
  autoFocus?: boolean;
  register?: UseFormRegister<FormValues>;
  error?: boolean;
  helperText?: string | undefined;
  inputRef?: React.RefObject<HTMLInputElement>;
  value?: string;
};

const InputForm: FC<Props> = memo((props) => {
  const { required, type, id, label, name, autoComplete, autoFocus } = props;
  return (
    <div>
      <TextField
        margin='normal'
        required={required}
        fullWidth
        type={type}
        id={id}
        label={label}
        name={name}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
      />
    </div>
  );
});

export default InputForm;
