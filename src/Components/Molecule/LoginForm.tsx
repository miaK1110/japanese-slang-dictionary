import { memo } from 'react';
// React-hook-form
import { useForm, SubmitHandler } from 'react-hook-form';

// MUI
import {
  Avatar,
  CssBaseline,
  Box,
  Typography,
  Container,
  Button,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

// Components
import Input from '../Atoms/FormInputText';

// Input form type
export type FormValues = {
  email: string;
  password: string;
};

const LoginForm = memo(() => {
  const { handleSubmit, control } = useForm<FormValues>();

  // Validation rules for login form
  const validationRules = {
    email: {
      required: 'Email is required',
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: 'Please enter a valid email',
      },
      maxLength: { value: 254, message: 'Email is too long' },
    },
    password: {
      required: 'Password is required',
      minLength: { value: 6, message: 'Password is too short' },
    },
  };

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(`data: ${JSON.stringify(data)}`);
  };

  return (
    <Container component='section' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Log in
        </Typography>
        <Box component='form' noValidate sx={{ mt: 1 }}>
          {/* Input for email */}
          <Input
            name={'email'}
            rules={validationRules.email}
            required={true}
            id={'email'}
            type={'email'}
            label={'Email Address'}
            autoComplete={'email'}
            autoFocus={true}
            control={control}
          />
          {/* Input for password */}
          <Input
            name={'password'}
            rules={validationRules.password}
            required={true}
            id={'password'}
            type={'password'}
            label={'Password'}
            autoComplete={'password'}
            autoFocus={true}
            control={control}
          />
          {/* Submit button */}
          <Button
            onClick={handleSubmit(onSubmit)}
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            LOG IN
          </Button>
        </Box>
      </Box>
    </Container>
  );
});

export default LoginForm;
