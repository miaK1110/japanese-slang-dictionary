import { createTheme } from '@material-ui/core/styles';

const MuiTheme = createTheme({
  spacing: 8,
  typography: {
    fontSize: 12,
    button: {
      textTransform: 'none',
    },
  },
});

export default MuiTheme;
