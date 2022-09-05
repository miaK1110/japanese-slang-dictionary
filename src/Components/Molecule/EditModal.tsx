import { useState } from 'react';
import { Box, Modal, Typography, Button } from '@mui/material';

// React-hook-form
import { useForm, SubmitHandler } from 'react-hook-form';

// Firebase config file
import { auth, db } from '../Config/firebaseConfig';
import { collection, updateDoc, doc } from 'firebase/firestore';

import Input from '../Atoms/FormInputText';
import MultiCheckbox from '../Atoms/FormInputMultiSelect';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

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
  name: string;
  nameInIng: string;
  kana: string;
  meaning: string;
  category: Array<string>;
  example: string;
  exampleInEng: string;
};

type Props = {
  open: boolean;
};

const EditModal: React.FC<Props> = (props: Props) => {
  //   const [open, setOpen] = useState(false);
  //   const handleOpen = () => setOpen(true);
  //   const handleClose = () => setOpen(false);
  const { open } = props;

  const { handleSubmit, control, setValue } = useForm<FormValues>();

  const user = auth.currentUser;
  const collectionRef = collection(db, 'words');

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(`data: ${JSON.stringify(data)}`);
    if (user) {
      // If user is logged in
      const uid = user.uid;
      const docToUpdate = doc(db, 'words', 'KBiUwNse7gvE1PzMgwhy');
      updateDoc(docToUpdate, {
        name: data.name,
        nameInEng: data.nameInIng,
        kana: data.kana,
        meaning: data.meaning,
        category: data.category,
        example: data.example,
        exampleInEng: data.exampleInEng,
        authRef: `users/${uid}`,
      })
        .then((responce) => {
          // Close modal or something
          alert('Data added');
        })
        .catch((err) => {
          alert(err.message);
        });
    } else {
      // If user is not logged in
      // Need to transition to log-in page
    }
  };

  return (
    <div>
      <Modal
        keepMounted
        open={open}
        // onClose={handleClose}
        aria-labelledby='keep-mounted-modal-title'
        aria-describedby='keep-mounted-modal-description'
      >
        <Box sx={style}>
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
      </Modal>
    </div>
  );
};

export default EditModal;
