// Form input with react-hook-form for type=text, password and email
import { FC, memo } from 'react';
import { Controller } from 'react-hook-form';

// MUI
import TextField from '@material-ui/core/TextField';

// Form type
import { FormInputProps } from '../Types/Form/FormInputProps';

const FormInputText: FC<FormInputProps> = memo((props) => {
  const {
    name,
    control,
    rules,
    required,
    type,
    id,
    label,
    autoComplete,
    autoFocus,
  } = props;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={''}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          margin='normal'
          fullWidth
          variant='outlined'
          required={required}
          type={type}
          id={id}
          label={label}
          name={name}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          error={!!error}
          onChange={onChange}
          value={value}
          helperText={error ? error.message : null}
        />
      )}
    />
  );
});

export default FormInputText;
