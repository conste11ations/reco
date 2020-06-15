import React, { useState } from 'react';
import { motion } from "framer-motion"
import { MuiThemeProvider } from "@material-ui/core/styles";
import Circle from '../Circle';
import { Box, TextField, Typography } from '@material-ui/core';
import { formTheme, useFormStyle } from './../../constants/FormThemes'
import { FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios'

export default function New({state, dispatch, recommendation, business, transition, handleReceivedComment}) {
  const classes = useFormStyle();
  const [comment, setComment] = useState("");

  function onSubmit(recoID, comment, handleReceivedComment) {

    console.log("recoID, comment", recoID, comment);

    axios.post(`/api/recommendations/${recoID}/comments`, { because: comment, recommendation_id: recoID })
    .then(res => res.json())
    // .then(res => dispatch({type: 'CREATE_COMMENT', data: { comment: res.data, recoID }}))
    // .then(() => transition('BUBBLE'))
    .catch(e => {throw new Error(e)})
  }
  // scale: [0, 1.3, 0.9, 1, 1.3, 1]
  return (
    <>
      <MuiThemeProvider theme={formTheme}>
        <Box mt={25} position="relative" align="center">
          <Circle cx={395} cy={335} r={250} fill="#F2C94C"></Circle>
        </Box>
        <Box className={classes.root} mt={-65} position="relative" display="flex" justifyContent="center" alignItems="center">
          <FormControl>
            <Typography align='center' variant='h6' style={{color: '#007065', marginBottom: '1em'}}>
              Recommending {<span style={{color: 'white', fontStyle: 'italic'}}>{business.name}</span>} for <br/>'{state.list.name}' because...<br/>
            </Typography>
            <TextField className={classes.textField} style={{width: '28em'}} id="list-name" label="your reason" variant="outlined"
              value={comment} onChange={event => setComment(event.target.value)} />
          </FormControl>
        </Box>
        <Box position="relative" mt={14}>
          <Button onClick={() => onSubmit(state.activeRecoRoom.id, comment, handleReceivedComment)} position="relative" variant="contained" size="large" color="primary" className={classes.margin}>
            Submit
          </Button> 
          <span style={{color: '#007065', margin: '0 1em'}}>or</span>
          <Button variant='outlined' style={{opacity: .60}} onClick={() => transition('BUBBLE')}>cancel</Button>
        </Box>
      </MuiThemeProvider>
    </>
  )
};