import { createMuiTheme } from '@material-ui/core/styles';

const MuiTheme = createMuiTheme({
  spacing: 8,
  typography: {
    fontSize: 12,
    button: {
      textTransform: 'none',
    },
  },
});

export default MuiTheme;
