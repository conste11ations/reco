import React from 'react';
import ReactDOM from 'react-dom';
import { ActionCableProvider } from 'react-actioncable-provider';
import { API_WS_ROOT } from './constants';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {ThemeProvider } from '@material-ui/core/styles'
import appTheme from './constants/appTheme.js';

ReactDOM.render(
  <React.StrictMode>
      <ActionCableProvider url={API_WS_ROOT}>
    <ThemeProvider theme={appTheme}>
      <App />
    </ThemeProvider>
    </ActionCableProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
