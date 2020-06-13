import React, { useState } from 'react';
import { MuiThemeProvider } from "@material-ui/core/styles";
import Circle from '../Circle';
import { Box, TextField, Typography } from '@material-ui/core';
import { formTheme, useFormStyle } from './../../constants/FormThemes'
import { FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import axios from 'axios'

export default function New({ state, dispatch, list, transition }) {
  const classes = useFormStyle();
  const [businessName, setBusinessName] = useState("");
  const [businessUrl, setBusinessUrl] = useState("");
  const [businessImg, setBusinessImg] = useState("");
  const [comment, setComment] = useState("");

  function recommendBusiness(listId, state, dispatch, businessName, businessUrl, businessImg, comment) {

    let businessObj = {};
    let recommendationObj = {};
    let commentObj = {};

    axios.post(`/api/businesses/`, { name: businessName, website: businessUrl, image: businessImg })
    .then(res => {
      businessObj = res.data; console.log(businessObj); return res.data
    })
      .then(res => {
        return (axios.post(`/api/recommendations/`, { list_id: listId, business_id: businessObj.id }))
      })
      .then(res => {
        recommendationObj = res.data; console.log(recommendationObj); return res.data
      })
      .then(res => {
        return axios.post(`/api/recommendations/${recommendationObj.id}/comments`, { because: comment })
      })
      .then(res => {
        commentObj = res.data; console.log(commentObj); return res.data
      })
      .then(res => dispatch({ type: 'CREATE_RECOMMENDATION_AND_BUSINESS', data: { recommendation: recommendationObj, business: businessObj } }))
      .then(res => dispatch({type: 'CREATE_COMMENT', data: { comment: commentObj, recoID: recommendationObj.id }}))
      .then(() => transition('BUBBLE'))
      .catch(error => console.log("error", error));
  }

  return (
    <>
      <MuiThemeProvider theme={formTheme}>
        <Box mt={25} position="relative" align="center">
          <Circle cx={399} cy={335} r={320} fill="#B1D6EB"></Circle>
        </Box>
        <Box className={classes.root} mt={-62} position="relative" display="flex" justifyContent="center" alignItems="center">
          <FormControl>
            <Typography align='center' variant='h5' style={{ color: '#007065' }}>
              Recommending
            </Typography>
            <TextField className={classes.textField} style={{ width: '28em', margin: '10px' }} id="business-name" label="Business name" variant="outlined"
              value={businessName} onChange={event => setBusinessName(event.target.value)} />
            <TextField className={classes.textField} style={{ width: '28em', margin: '10px' }} id="business-url" label="Business URL" variant="outlined"
              value={businessUrl} onChange={event => setBusinessUrl(event.target.value)} />
            <TextField className={classes.textField} style={{ width: '28em', margin: '10px' }} id="business-img" label="Post an image!" variant="outlined"
              value={businessImg} onChange={event => setBusinessImg(event.target.value)} />
            <Typography align='center' variant='h5' style={{ color: '#007065', marginBottom: '1em' }}>
              for '{<span style={{ color: 'black', fontStyle: 'italic' }}>{list.name}</span>}' because...
            </Typography>
            <TextField className={classes.textField} style={{ width: '28em', margin: '10px', marginTop: '-10px' }} id="business-comment" label="Write the first comment!" variant="outlined"
              value={comment} onChange={event => setComment(event.target.value)} />
          </FormControl>
        </Box>
        <Box position="relative" mt={26}>
          <Button onClick={() => { recommendBusiness(list.id, state, dispatch, businessName, businessUrl, businessImg, comment) }}
            position="relative" variant="contained" size="large" color="primary" className={classes.margin}>
            Submit
        </Button>
          <span style={{ color: '#007065', margin: '0 1em' }}>or</span> <Button variant='outlined' style={{ opacity: .60 }} onClick={() => transition('BUBBLE')}>cancel</Button>

        </Box>
      </MuiThemeProvider>
    </>
  )
};