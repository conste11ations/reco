import { createMuiTheme, makeStyles } from '@material-ui/core/styles';


const formTheme = createMuiTheme({
  palette: {
    primary: { main: '#ffeecf', contrastText: '#007065' },
    secondary: { main: '#007065', contrastText: '#ffeecf' }
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
    fontSize: 18,
    h2: {
      'fontWeight': 600,
      'color': '#007065'
    },
  },
});

const useFormStyle = makeStyles((theme) => ({
  root: {
    '& > *': {
      position: 'absolute',
      margin: theme.spacing(1),
      marginLeft: theme.spacing(-0.4),
      padding: theme.spacing(1),
      minWidth: '300px',
    },
    title: {
      flexGrow: 1,
    },
    textField: {
      backgroundColor: "white",
      color: "red",
    }
  },
}));

export { formTheme, useFormStyle };
