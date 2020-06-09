import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    maxWidth: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    zIndex: 900
  },
  drawerPaper: {
    width: drawerWidth,
    zIndex: 900
  },
  drawerContainer: {
    overflow: 'auto'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default useStyles;