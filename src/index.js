import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import CssBaseline from '@material-ui/core/CssBaseline';
import reportWebVitals from './reportWebVitals';

// See https://material-ui.com/es/customization/palette/
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: "#5B764D",
      contrastText: "#F2F2F2"
    },
    secondary: {
      main: "#708C5D",
      contrastText: "#F2F2F2"
    }
  },
  typography: {
    useNextVariants: true,
    palette: {
      primary: "#F2F2F2"
    }
  },
  root: {
    display: 'flex',
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
