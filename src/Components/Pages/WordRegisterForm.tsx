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

import Input from '../Atoms/FormInputText';
import MultiCheckbox from '../Atoms/FormInputMultiSelect';

// Validation rules for word registration form
const validationRules = {
  required: 'Name is required',
  //   pattern: {
  //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  //     message: 'Please enter a valid name',
  //   },
  maxLength: { value: 200, message: 'Characters are too long' },
};

// Input form type
export type FormValues = {
  email: string;
  password: string;
};

const WordRegisterForm = () => {
  const { handleSubmit, control, setValue } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(`data: ${JSON.stringify(data)}`);
  };

  return (
    <div>
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
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar> */}
          <Typography component='h1' variant='h5'>
            Register Word
          </Typography>
          <Box component='form' noValidate sx={{ mt: 1 }}>
            {/* Input for Word name */}
            <Input
              name={'name'}
              rules={validationRules}
              required={true}
              id={'name'}
              type={'text'}
              label={'Word Name'}
              autoComplete={'name'}
              autoFocus={true}
              control={control}
            />
            {/* Input for Word name(eng) */}
            <Input
              name={'nameInIng'}
              rules={validationRules}
              required={true}
              id={'nameInIng'}
              type={'text'}
              label={'Name in English'}
              autoComplete={'nameInEng'}
              autoFocus={true}
              control={control}
            />
            {/* Input for Word name(kana) */}
            <Input
              name={'kana'}
              rules={validationRules}
              required={true}
              id={'kana'}
              type={'text'}
              label={'Name in Hiragana'}
              autoComplete={'kana'}
              autoFocus={true}
              control={control}
            />
            {/* Input for Word meaning */}
            <Input
              name={'meaning'}
              rules={validationRules}
              required={true}
              id={'meaning'}
              type={'text'}
              label={'Meaning'}
              autoComplete={'meaning'}
              autoFocus={true}
              control={control}
            />
            {/* check box */}
            <MultiCheckbox
              control={control}
              setValue={setValue}
              name={'category'}
              label={'Category'}
            />
            {/* Input for Word example */}
            <Input
              name={'example'}
              rules={validationRules}
              required={true}
              id={'example'}
              type={'text'}
              label={'Example'}
              autoComplete={'example'}
              autoFocus={true}
              control={control}
            />
            {/* Input for example in English*/}
            <Input
              name={'exampleInEng'}
              rules={validationRules}
              required={true}
              id={'meaningInEng'}
              type={'text'}
              label={'ExampleInEng'}
              autoComplete={'exampleInEng'}
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
              CONFIRM
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default WordRegisterForm;
