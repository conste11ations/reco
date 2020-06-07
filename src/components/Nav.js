import React from 'react';
import { navTheme, navStyle } from '../constants/Themes'
import { MuiThemeProvider } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { AccountCircle } from '@material-ui/icons';


export default function Nav({ name, location }) {
  const classes = navStyle();
  return (
    <>
      <MuiThemeProvider theme={navTheme}>
        <AppBar position='fixed'>
          <Toolbar>
            <img src="reco-logo.png" alt="reco logo" className={classes.logo} />
            <Typography align='center' variant='h6' className={classes.title} noWrap>
              Any recommendations for {name} near {location}?
            </Typography>
            <Button color='inherit'>About</Button>
            <Button color='inherit'>Login</Button>
            <Button color='inherit'>Sign Up</Button>
            <Button>
              <AccountCircle color='secondary' />
            </Button>
          </Toolbar>
        </AppBar>
        <TextField
          placeholder='Placeholder'
          label='TextBox' />
      </MuiThemeProvider>
      <img src='../constants/reco-logo.png' alt='reco logo' />
    </>
  )
}
