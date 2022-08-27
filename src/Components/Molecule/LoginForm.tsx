// MUI
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

// Component
import InputForm from '../Atoms/InputForm';
import SubmitButton from '../Atoms/SubmitButton';

const LoginForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

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
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <InputForm
            required={true}
            id={'email'}
            label={'Email Address'}
            name={'email'}
            autoComplete={'email'}
            autoFocus={true}
          />
          <InputForm
            required={true}
            id={'password'}
            label={'Password'}
            name={'password'}
            type={'password'}
            autoComplete={'current-password'}
          />
          <SubmitButton>LOG IN</SubmitButton>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
