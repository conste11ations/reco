import React, { useState } from 'react';
import { MuiThemeProvider } from "@material-ui/core/styles";
import Circle from '../Circle';
import { Box, TextField, Typography } from '@material-ui/core';
import { formTheme, useFormStyle } from './../../constants/FormThemes'
import { FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export function New(props) {
  const classes = useFormStyle();
  const [name, setName] = useState(props.name || "");
  const [location, setLocation] = useState(props.location || "");
  const [description, setDescription] = useState(props.description || "");
  // const [error, setError] = useState("");

  return (
    <>
      <MuiThemeProvider theme={formTheme}>
        <Box mt={8} position="relative" align="center">
        <Circle cx={400} cy={400} r={400} fill="#ABD3BA"></Circle>
        </Box>
        <Box className={classes.root} mt={-60} position="relative" display="flex" justifyContent="center" alignItems="center">
          <FormControl>
            <Typography align='center' variant='h2' noWrap>
              Any<br />recommendations for
            </Typography>
            <TextField className={classes.textField} id="list-name" label="Type a name for your list" variant="outlined"
              value={name} onChange={event => setName(event.target.value)} />
            <Typography align='center' variant='h2' noWrap>
              near
            </Typography>
            <TextField className={classes.textField} id="list-location" label="Type a location ( Default: Canada )" variant="outlined"
              value={location} onChange={event => setLocation(event.target.value)} />
            <Typography align='center' variant='h2' noWrap>
              ?
            </Typography>
            <TextField className={classes.textField} id="list-description" label="Describe your list! (optional)" variant="outlined"
              value={description} onChange={event => setDescription(event.target.value)} />
          </FormControl>
        </Box>
        <Box position="relative" mt={35}>
          <Button onClick={() => props.onSave(name, location, description)} position="relative" variant="contained" size="large" color="primary" className={classes.margin}>
            Submit
        </Button>
        </Box>
      </MuiThemeProvider>
    </>
  )
};