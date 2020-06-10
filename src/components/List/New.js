import React, { useState } from 'react';
import { MuiThemeProvider } from "@material-ui/core/styles";
import Circle from '../Circle';
import { Box, TextField, Typography } from '@material-ui/core';
import { formTheme, useFormStyle } from './../../constants/FormThemes'
import Search from '../Search'
import { FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export function New() {
  const classes = useFormStyle();
  return (
    <>
      <MuiThemeProvider theme={formTheme}>
        <Box mt={8} position="relative" align="center">
          <Circle></Circle>
        </Box>
        <Box className={classes.root} mt={-50} position="relative" display="flex" justifyContent="center" alignItems="center">
          <FormControl>
            <Typography align='center' variant='h2' noWrap>
              Any recommendations for
            </Typography>
            <TextField className={classes.textField} id="outlined-basic" label="Type a name for your list" variant="outlined" />
            <Typography align='center' variant='h2' noWrap>
              near
            </Typography>
            <TextField className={classes.textField} id="outlined-basic" label="Type a location" variant="outlined" />
            <Typography align='center' variant='h2' noWrap>
              ?
            </Typography>
          </FormControl>
        </Box>
        <Box position="relative" mt={25}>
          <Button position="relative" variant="contained" size="large" color="primary" className={classes.margin}>
            Submit
        </Button>
        </Box>
      </MuiThemeProvider>
    </>
  )
};