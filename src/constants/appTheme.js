import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

export default createMuiTheme({
  palette: {
    primary: { main: '#ffeecf', contrastText: '#007065' },
    secondary: { main: '#007065', contrastText: '#ffeecf' },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 14,
    h6: {
      "fontWeight": 600,
    },
  },
  overrides: {
    MuiCard: {
      backgroundColor: 'red'
    }
  }
});