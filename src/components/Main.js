import React from "react";
import { mainTheme } from '../constants/mainThemes'
import { ThemeProvider } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

export default function Main() {
  return (
    <ThemeProvider theme={mainTheme}>
    <h1>Hi I'm main</h1>
    <Button>Overrides CSS</Button>
    </ThemeProvider>
  )
}