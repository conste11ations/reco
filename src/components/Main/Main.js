import React from "react";
import { mainTheme, useMainStyle } from '../../constants/mainThemes';
import { ThemeProvider } from "@material-ui/core/styles";
import { AppBar, Toolbar, Button, Typography, Box, Tooltip } from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';
import Search from '../Search/Search';
import Ball from './Ball.jsx';


export default function Main({ transitionToShow, transitionToCreateList, getList, resultId, setResultId, resetList }) {

  const classes = useMainStyle();

  return (
    <ThemeProvider theme={mainTheme}>
      <AppBar position='fixed' className={classes.nav}>
        <Toolbar>
          <img src='reco-logo.png' alt="reco logo" className={classes.logo} />
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
      <Ball></Ball>
      <div className={classes.root}>
        <h1 className={classes.h1}>Reco</h1>
        <section className={classes.sectionMid}>
          Reco is a platform for building community spaces around local businesses through word-of-mouth.<br/>
          Users create a list asking for recommendations, or respond by adding business contacts. <br/>
          We forge long-lasting bridges between entrepreneurs, small businesses, and their consumers/supporters. 
        </section>
        <section className={classes.sectionBottom}>

          <Typography align='center' variant='h6' noWrap>
            Any recommendations for
            </Typography>
          <Search placeholder={'E.g. Black Owned MTL Restaurants'} queryKey='list' setResultId={setResultId} transitionToShow={transitionToShow} />

          <Typography align='center' variant='h6' noWrap>
            near
            </Typography>
          <Search placeholder={'Or type a location instead!'} queryKey='location' setResultId={setResultId} transitionToShow={transitionToShow} />
          <Typography align='center' variant='h6' noWrap>
            ?&nbsp;&nbsp;
            </Typography>
          <Button onClick={() => { resultId && getList(resultId) }} variant='contained' size='small' color='secondary'>
            Search
            </Button>
        </section>
      </div>
    </ThemeProvider>
  )
}