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
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
    },
    "& label.Mui-focused": {
      color: "#007065"
    },
    title: {
      flexGrow: 1,
    },
    margin: {
      margin: theme.spacing(1),
    },
    [`& fieldset`]: {
      borderRadius: 25,
    },
  },
}));

export { formTheme, useFormStyle };
