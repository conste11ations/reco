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
  },
});

const useMainStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
    width: "100vw",
    backgroundColor: "#ffeecf",
    background: "linear-gradient(45deg, #ffeecf 30%, #ffac80 90%)",
    marginTop: "-20px",
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
    flexDirection: "column",
    height: "10%",
    width: "50%",
    border: "solid",
  },
  sectionBottom: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "10%",
    width: "80%",
    border: "solid",
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



