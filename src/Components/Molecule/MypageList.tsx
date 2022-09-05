import { useState } from 'react';

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

import Modal from '../Molecule/EditModal';

// MUI icons
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

// Additional style
const ListText = styled(ListItemText)({
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

const CheckboxList = () => {
  const [showEditModal, setShowEditModal] = useState(false);

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
    setShowEditModal(!showEditModal);
  };
  return (
    <>
      {showEditModal ? <Modal /> : null}
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {[0, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-label-${value}`;

          return (
            <ListItem
              key={value}
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
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={onClickShowEditModal}
                dense
              >
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
                <ListText id={labelId} primary={`親ガチャ${value + 1}`} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default CheckboxList;
