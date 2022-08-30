import { useEffect, memo } from 'react';
// React-hook-form
import { useForm, Controller, Resolver, SubmitHandler } from 'react-hook-form';

// MUI
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import FormHelperText from '@mui/material/FormHelperText';

// Component
import InputForm from '../Atoms/FormInputText';
import SubmitButton from '../Atoms/SubmitButton';

// input type
export type FormValues = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormValues>();

  // validation rules for login form
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

  // do we need to reset????? not sure
  // useEffect(() => {
  //   if (isSubmitSuccessful) {
  //     reset();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [isSubmitSuccessful]);

  // const formSubmitHandler: SubmitHandler<FormValues> = (data: FormValues) => {
  //   console.log(data);
  // };

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues, e: any) => {
    // e.preventDefault();
    alert('aaaaaaa');
    console.log(`submit: ${data}`);
  };

  // const onSubmit = (e: any) => {
  //   e.preventDefault();
  //   alert('aaaaaaa');
  //   console.
  // };
  return (
    <Container component='main' maxWidth='xs'>
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
        <Box
          component='form'
          noValidate
          sx={{ mt: 1 }}
          onSubmit={handleSubmit((d) => alert(JSON.stringify(d)))}
        >
          {/* Input for email */}
          <Controller
            control={control}
            name='email'
            defaultValue={''}
            rules={validationRules.email}
            render={({ field, fieldState: { error } }) => (
              <InputForm
                required={true}
                id={'email'}
                type={'email'}
                label={'Email Address'}
                autoComplete={'email'}
                autoFocus={true}
                {...field}
                error={!!error?.message}
                helperText={error?.message}
              />
            )}
          />
          {/* <FormHelperText>{fieldState.error?.message}</FormHelperText> */}
          {/* Input for password */}
          {/* <Controller
            control={control}
            name='password'
            defaultValue={''}
            rules={validationRules.password}
            render={({ field, fieldState: { error } }) => (
              <InputForm
                required={true}
                id={'password'}
                type={'password'}
                label={'Password'}
                autoComplete={'password'}
                autoFocus={true}
                {...field}
                error={!!error?.message}
                helperText={error?.message}
              />
            )}
          /> */}
          {/* <button onSubmit={handleSubmit((e) => onSubmit)}>aa</button> */}

          <SubmitButton>LOG IN</SubmitButton>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
