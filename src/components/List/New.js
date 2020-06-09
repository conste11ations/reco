import React, { useState } from 'react';
import { MuiThemeProvider } from "@material-ui/core/styles";
import Circle from '../Circle';
import { Box, TextField, Typography } from '@material-ui/core';
import { formTheme, useFormStyle } from './../../constants/FormThemes'


export function New() {
  const classes = useFormStyle();
  return (
    <>
      <MuiThemeProvider theme={formTheme}>
        <Box mt={8} position="relative" align="center">
          <Circle></Circle>
        </Box>
        <Box className={classes.root} mt={-50} position="relative" display="flex" justifyContent="center" alignItems="center">
          <form>
            <Typography align='center' variant='h3' noWrap>
              Any recommendations for
            </Typography>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Typography align='center' variant='h3' noWrap>
              near
            </Typography>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Typography align='center' variant='h3' noWrap>
              ?
            </Typography>
          </form>
        </Box>
      </MuiThemeProvider>
    </>
  )
};