import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

const mainTheme = createMuiTheme({
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
  }
});

const useMainStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    width: "100vw",
    backgroundColor: "#ffeecf",
    background: "linear-gradient(45deg, #ffeecf 30%, #ffac80 90%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    color: mainTheme.palette.primary.contrastText,
  },
  nav: {
    background: "none",
    boxShadow: "none"
  },
  sectionMid: {
    padding: "10px",
    flexDirection: "column",
    minHeight: "120px",
    width: "50%",
    fontSize: 20,
  },
  sectionBottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "50px",
    width: "80%",
  },
  logo: {
    maxWidth: 200,
    maxHeight: 50,
  },
  title: {
    flexGrow: 1,
  },
})
);

export { mainTheme, useMainStyle };



