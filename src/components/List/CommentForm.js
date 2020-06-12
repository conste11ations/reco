import React, { useState } from 'react';
import { MuiThemeProvider } from "@material-ui/core/styles";
import Circle from '../Circle';
import { Box, TextField, Typography } from '@material-ui/core';
import { formTheme, useFormStyle } from './../../constants/FormThemes'
import { FormControl } from '@material-ui/core';
import Button from '@material-ui/core/Button';

export default function New({list, business, transition}) {
  const classes = useFormStyle();
  const [comment, setComment] = useState("");

  return (
    <>
      <MuiThemeProvider theme={formTheme}>
        <Box mt={25} position="relative" align="center">
        <Circle cx={395} cy={335} r={250} fill="#F2C94C"></Circle>
        </Box>
        <Box className={classes.root} mt={-65} position="relative" display="flex" justifyContent="center" alignItems="center">
          <FormControl>
            <Typography align='center' variant='h6' style={{color: '#007065', marginBottom: '1em'}}>
              Recommending {<span style={{color: 'white', fontStyle: 'italic'}}>{business.name}</span>} for <br/>'{list.name}' because...<br/>
            </Typography>
            <TextField className={classes.textField} style={{width: '28em'}} id="list-name" label="your reason" variant="outlined"
              value={comment} onChange={event => setComment(event.target.value)} />
          </FormControl>
        </Box>
        <Box position="relative" mt={14}>
          <Button onClick={() => console.log('submit comment func')} position="relative" variant="contained" size="large" color="primary" className={classes.margin}>
            Submit
        </Button> 
        <span style={{color: '#007065', margin: '0 1em'}}>or</span> <Button variant='outlined' style={{opacity: .60}} onClick={() => transition('LIST')}>cancel</Button>
        
        </Box>
      </MuiThemeProvider>
    </>
  )
};


// import React from 'react';
// import {
//   fade,
//   ThemeProvider,
//   withStyles,
//   makeStyles,
//   createMuiTheme,
// } from '@material-ui/core/styles';
// import InputBase from '@material-ui/core/InputBase';
// import InputLabel from '@material-ui/core/InputLabel';
// import TextField from '@material-ui/core/TextField';
// import FormControl from '@material-ui/core/FormControl';
// import { green } from '@material-ui/core/colors';

// const CssTextField = withStyles({
//   root: {
//     '& label.Mui-focused': {
//       color: '#007065',
//     },
//     '& .MuiInput-underline:after': {
//       borderBottomColor: '#007065',
//     },
//     '& .MuiOutlinedInput-root': {
//       '& fieldset': {
//         borderColor: '#007065',
//       },
//       '&:hover fieldset': {
//         borderColor: '#FFEECF',
//       },
//       '&.Mui-focused fieldset': {
//         borderColor: '#007065',
//       },
//     },
//   },
// })(TextField);

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     flexWrap: 'wrap',
//     zIndex: 800
//   },
//   margin: {
//     margin: theme.spacing(1),
//     flexGrow: 1
//   },
// }));

// export default function CustomizedInputs() {
//   const classes = useStyles();

//   return (
//     <form className={classes.root} noValidate>
//       <CssTextField
//         className={classes.margin}
//         label="why you're recommending"
//         variant="outlined"
//         id="custom-css-outlined-input"
//       />
//     </form>
//   );
// }