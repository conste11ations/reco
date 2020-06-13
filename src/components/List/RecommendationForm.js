import React, { useState } from 'react';
import { MuiThemeProvider } from "@material-ui/core/styles";
import Circle from '../Circle';
import { Box, TextField, Typography } from '@material-ui/core';
import { formTheme, useFormStyle } from './../../constants/FormThemes'
import { FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default function New({ list, business, transition }) {
  const classes = useFormStyle();
  const [comment, setComment] = useState("");

  return (
    <>
      <MuiThemeProvider theme={formTheme}>
        <Box mt={25} position="relative" align="center">
          <Circle cx={395} cy={335} r={300} fill="#B1D6EB"></Circle>
        </Box>
        <Box className={classes.root} mt={-65} position="relative" display="flex" justifyContent="center" alignItems="center">
          <FormControl>
            <Typography align='center' variant='h5' style={{ color: '#007065' }}>
              Recommending
            </Typography>
            <TextField className={classes.textField} style={{ width: '28em', margin: '10px' }} id="list-name" label="Business name" variant="outlined"
              value={comment} onChange={event => setComment(event.target.value)} />
            <TextField className={classes.textField} style={{ width: '28em', margin: '10px' }} id="list-name" label="Business website" variant="outlined"
              value={comment} onChange={event => setComment(event.target.value)} />
            <Typography align='center' variant='h5' style={{ color: '#007065', marginBottom: '1em' }}>
              for '{<span style={{ color: 'black', fontStyle: 'italic' }}>{list.name}</span>}' because...
            </Typography>
            <TextField className={classes.textField} style={{ width: '28em', margin: '10px', marginTop: '-10px' }} id="list-name" label="Write the first comment!" variant="outlined"
              value={comment} onChange={event => setComment(event.target.value)} />
          </FormControl>
        </Box>
        <Box position="relative" mt={24}>
          <Button onClick={() => console.log('submit comment func')} position="relative" variant="contained" size="large" color="primary" className={classes.margin}>
            Submit
        </Button>
          <span style={{ color: '#007065', margin: '0 1em' }}>or</span> <Button variant='outlined' style={{ opacity: .60 }} onClick={() => transition('BUBBLE')}>cancel</Button>

        </Box>
      </MuiThemeProvider>
    </>
  )
};