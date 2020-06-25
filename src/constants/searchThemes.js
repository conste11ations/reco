import { fade, makeStyles } from "@material-ui/core/styles";

const useSearchStyle = makeStyles(theme => ({
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: 0,
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: "25px",
    backgroundColor: fade(theme.palette.common.white, 0.95),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.75)
    },
    marginRight: 0,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      minWidth: "260px"
    }
  },
  results: {
    position: "absolute",
    width: "30ch",
    textAlign: "center",
    padding: theme.spacing(0, 6),
  },
  resultItem: {
    padding: "5px",
    backgroundColor: fade(theme.palette.common.white, 0.95),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.6),
      color: theme.palette.text.primary
    },
  }
  // sectionDesktop: {
  //   display: "none",
  //   [theme.breakpoints.up("md")]: {
  //     display: "flex"
  //   }
  // },
  // sectionMobile: {
  //   display: "flex",
  //   [theme.breakpoints.up("md")]: {
  //     display: "none"
  //   }
  // }
}));

export { useSearchStyle }
