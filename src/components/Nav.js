import React from 'react';
import { navTheme, useNavStyle } from '../constants/navThemes'
import { MuiThemeProvider } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { AccountCircle } from '@material-ui/icons';
import Search from './Search'


export default function Nav({ name, location }) {
  const classes = useNavStyle();
  return (
    <>
      <MuiThemeProvider theme={navTheme}>
        <AppBar position='fixed'>
          <Toolbar>
            <img src="reco-logo.png" alt="reco logo" className={classes.logo} />
            <Box className={classes.title}></Box>
            <Typography align='center' variant='h6' noWrap>
              Any recommendations for
            </Typography>
            <Search placeholder={name} queryKey='list' />
            <Typography align='center' variant='h6' noWrap>
              near
            </Typography>
            <Search placeholder={location} queryKey='location' />
            <Typography align='center' variant='h6' noWrap>
              ?
            </Typography>
            <Button variant="contained" size="small" color="secondary">
              Search
            </Button>
            <Box className={classes.title}></Box>
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
    </>
  )
}
