import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

const mainTheme = createMuiTheme({
  palette: {
    primary: { main: '#ffeecf', contrastText: '#007065' },
    secondary: { main: '#007065', contrastText: '#ffeecf' }
  },
});

const useMainStyle = makeStyles((theme) =>
  ({
    root: {
      flexGrow: 1,
    },
  })
);

export { mainTheme, useMainStyle };

