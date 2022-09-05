import { useState, useEffect } from 'react';

// Firebase config file
import { auth, db } from '../Config/firebaseConfig';
import { collection, getDocs, doc } from 'firebase/firestore';

// MUI
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import EditModal from '../Molecule/EditModal';

// MUI icons
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { deepPurple } from '@mui/material/colors';

// Additional style
const ListText = styled(ListItemText)({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

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

const CheckboxList = () => {
  const collectionRef = collection(db, 'words');

  const [wordsData, setWordsData] = useState({});
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    const wordsFromFirebase: any[] = [];
    getDocs(collectionRef).then((responce) => {
      //   console.log(
      //     responce.docs.map((doc) => {
      //       return { ...doc.data(), id: doc.id };
      //     })
      //   );
      responce.docs.map((doc) => {
        wordsFromFirebase.push({
          ...doc.data(),
        });
      });
      setWordsData(wordsFromFirebase);
      console.log(wordsData);
    });
    // const WordsFromFirebase = {};
    // const subscriber = db.collection('words').onSnapShot((querySnapShot) => {
    //   querySnapShot.forEach((doc) => {
    //     WordsFromFirebase.push({
    //       ...doc.data(),
    //     });
    //     setWordsData(WordsFromFirebase);
    //   });
    // });
  }, []);

  // I made checkbox for delete multipul words but Idn if I need it anymore.
  //   const handleToggle = (value: number) => () => {
  //     const currentIndex = checked.indexOf(value);
  //     const newChecked = [...checked];

  //     if (currentIndex === -1) {
  //       newChecked.push(value);
  //     } else {
  //       newChecked.splice(currentIndex, 1);
  //     }

  //     setChecked(newChecked);
  //   };

  const onClickShowEditModal = () => {
    setOpen(!open);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <EditModal open={open} />
      {/* {showEditModal ? <EditModal /> : null} */}
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {Object.keys(wordsData).map((index,value: any) => {
          const labelId = `checkbox-list-label-${value}`;
          console.log(value);
          return (
            <ListItem
              key={index}
              secondaryAction={
                <>
                  {/* <IconButton aria-label='edit'>
                  <EditIcon color='success' />
                </IconButton> */}
                  <IconButton edge='end' aria-label='delete'>
                    <DeleteIcon color='warning' />
                  </IconButton>
                </>
              }
              onClick={onClickShowEditModal}
              disablePadding
            >
              <ListItemButton role={undefined} dense>
                <ListItemIcon>
                  {/* <Checkbox
                  edge='start'
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                /> */}
                  <TextSnippetIcon color='primary' />
                </ListItemIcon>
                <ListText id={labelId} primary={`texttext${value[].name}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default CheckboxList;
