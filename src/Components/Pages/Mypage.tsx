import React from 'react';

// MUI
import {
  Avatar,
  CssBaseline,
  Box,
  Typography,
  Container,
  Stack,
  Badge,
  IconButton,
} from '@mui/material';
// MUI icons
import LogoutIcon from '@mui/icons-material/Logout';
import PostAddIcon from '@mui/icons-material/PostAdd';

import MypageList from '../Molecule/MypageList';

const Mypage = () => {
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
          <Stack direction='row' alignItems='center' spacing={2} sx={{ mb: 3 }}>
            <Typography component='h1' variant='h5'>
              Mypage&#x1f60b;
            </Typography>
            <IconButton
              color='primary'
              aria-label='add words'
              component='label'
              size='large'
            >
              <PostAddIcon fontSize='inherit' />
            </IconButton>
            <IconButton
              color='primary'
              aria-label='log-out'
              component='label'
              size='large'
            >
              <LogoutIcon fontSize='inherit' />
            </IconButton>
          </Stack>
          <MypageList />
        </Box>
      </Container>
    </div>
  );
};

export default Mypage;
