import { memo, FC } from 'react';
import TextField from '@mui/material/TextField';

type Props = {
  required?: boolean;
  width?: string;
  type?: string;
  id?: string;
  label?: string;
  name?: string;
  autoComplete?: string;
  autoFocus?: boolean;
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
