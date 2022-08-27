import { Container, Typography, Box } from '@mui/material';
import SearchForm from '../Molecule/SearchForm';
import Category from '../Molecule/Category';
import ListPage from './ListPage';
import LoginPage from './LoginPage';

const TopPage = () => {
  return (
    <div>
      {/* <Container maxWidth='sm'>
        <Box component='div' alignItems='center' justifyContent='center'>
          <Typography variant='h4' component='h4' sx={{ py: 2 }}>
            Japanese-Slang
          </Typography>
          <SearchForm />
          <Typography variant='h5' component='h5' sx={{ py: 2 }}>
            Category
          </Typography>
          <Box>
            <Category />
          </Box>
        </Box>
        <ListPage />
      </Container> */}
      <LoginPage />
    </div>
  );
};

export default TopPage;
