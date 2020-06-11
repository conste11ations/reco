import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

const mainTheme = createMuiTheme({
  palette: {
    primary: { main: '#ffeecf', contrastText: '#007065' },
    secondary: { main: '#007065', contrastText: '#ffeecf' }
  },
  overrides: {
    // Style sheet name ⚛️
    root: {
    },
    MuiButton: {
      // Name of the rule
      text: {
        // Some CSS
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
  },
});

const useMainStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    width: "100vw",
    backgroundColor: "#ffeecf",
    background: 'linear-gradient(45deg, #ffeecf 30%, #ffac80 90%)',
  },
  section: {
    height: "30%",
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }
})
);

export { mainTheme, useMainStyle };



