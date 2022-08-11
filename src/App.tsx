import { ThemeProvider } from '@material-ui/core';

import MuiTheme from './Theme';
import TopPage from './Components/Pages/TopPage';

const App = () => {
  return (
    <div className='App'>
      <ThemeProvider theme={MuiTheme}>
        <TopPage />
      </ThemeProvider>
    </div>
  );
};

export default App;
