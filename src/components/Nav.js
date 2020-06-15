import React, { useState, useEffect } from 'react';
import { navTheme, useNavStyle } from '../constants/navThemes'
import { MuiThemeProvider } from "@material-ui/core/styles";
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { AddCircle } from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import Search from './Search/Search';
import useSearchData from "../hooks/useSearchData.js";


export default function Nav({ name, location, transitionToCreateList, transitionToMain, getList, resultId, setResultId }) {

  const classes = useNavStyle();
  return (
    <>
      <MuiThemeProvider theme={navTheme}>
        <AppBar position='fixed'>
          <Toolbar>
            <img src='reco-logo.png' alt="reco logo" className={classes.logo} onClick={() => transitionToMain()} />

            <Box className={classes.title}></Box>
            <Typography align='center' variant='h6' noWrap>
              Any recommendations for
            </Typography>
            <Search placeholder={'E.g. Black Owned MTL Restaurants'} queryKey='list' setResultId={setResultId} />
            <Typography align='center' variant='h6' noWrap>
              near
            </Typography>
            <Search placeholder={'Or type a location instead!'} queryKey='location' setResultId={setResultId}  />
            <Typography align='center' variant='h6' noWrap>
              ?&nbsp;&nbsp;
            </Typography>
            <Button onClick={() => { resultId && getList(resultId) }} className={classes.button} variant='contained' size='small' color='secondary'>
              Search
            </Button>
            <Box className={classes.title}></Box>

            <Button color='inherit'>About</Button>
            <Button color='inherit'>Login</Button>
            <Button color='inherit'>Sign Up</Button>
            <Tooltip disableFocusListener disableTouchListener title="Ask for a recommendation!">
              <Button onClick={() => transitionToCreateList()} color='inherit'>
                <AddCircle fontSize='large' color='inherit' />
              </Button>
            </Tooltip>
          </Toolbar>
        </AppBar>
      </MuiThemeProvider>
    </>
  )
}
