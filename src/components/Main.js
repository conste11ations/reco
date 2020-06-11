import React from "react";
import { mainTheme, useMainStyle } from '../constants/mainThemes'
import { ThemeProvider } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Search from './Search/Search'

export default function Main({ transitionToShow }) {

  const classes = useMainStyle();

  return (
    <ThemeProvider theme={mainTheme}>
      <div className={classes.root}>
        <h1>Reco</h1>
        <section className={classes.section}>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
          content here', making it look like readable English.
        </section>
        <section className={classes.section}>
          <div>
            <Typography align='center' variant='h6' noWrap>
              Any recommendations for
            </Typography>
            <Search placeholder={"name"} queryKey='list' setResultId={"setResultId"} />

            <Typography align='center' variant='h6' noWrap>
              near
            </Typography>
            <Search placeholder={"location" + ' (optional)'} queryKey='location' setResultId={"setResultId"} />
            <Typography align='center' variant='h6' noWrap>
              ?
            </Typography>
          </div>
          <div>
            {/* <Button onClick={() => { getList(resultId); transitionToShow() }} variant='contained' size='small' color='secondary'> */}
            <Button onClick={() => { transitionToShow() }} variant='contained' size='small' color='secondary'>
              Search
            </Button>
          </div>
        </section>
      </div>
    </ThemeProvider>
  )
}