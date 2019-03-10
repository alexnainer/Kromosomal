import React, { Component } from 'react';
import styled from 'styled-components'
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const FabContainer = styled.div`
  position: fixed;
  right: 20px;
  bottom: 20px;
`

class App extends Component {
  render() {
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h6" color="inherit">
                Kromosomal
            </Typography>
          </Toolbar>
        </AppBar>
        <FabContainer>
          <Fab color='primary'>
            <AddIcon/>
          </Fab>
        </FabContainer>
      </div>
    );
  }
}

export default App;
