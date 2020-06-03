import { createMuiTheme } from '@material-ui/core';
export const colorScheme = {
  palette: {
    primary: {
      dark: '#2196F3',
      main: '#296efa',
      contrastText: '#fff',
    },
  },
  typography: {
    fontSize: 16,
  }
};

export default createMuiTheme(colorScheme)
