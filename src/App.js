import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './App.css';
import Home from './Home'
import purple from '@material-ui/core/colors/purple';

const theme = createMuiTheme({
  palette: {
    primary: { main: purple[500] }, 
    secondary: { main: '#11cb5f' }, 
  },
  typography: { useNextVariants: true },
});


class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Home/>
      </MuiThemeProvider>
    );
  }
}

export default App;
