import React from "react";
import { mainTheme, useMainStyle } from '../constants/mainThemes'
import { MuiThemeProvider } from "@material-ui/core/styles";

export default function Main() {
  return (
    <MuiThemeProvider theme={mainTheme}>
    <h1>Helo main</h1>
    </MuiThemeProvider>
  )
}