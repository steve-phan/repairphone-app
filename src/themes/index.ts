import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

export const themes = createTheme({
  palette: {
    primary: {
      main: red[600],
    },
  },
});
