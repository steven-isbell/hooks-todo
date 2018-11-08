import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const App = () => (
  <Paper
    elevation={0}
    style={{ padding: 0, margin: 0, backgroundColor: '#fafafa' }}
  >
    <AppBar color="primary" position="static" style={{ height: 64 }}>
      <Toolbar style={{ height: '100%' }}>
        <Typography color="inherit" style={{ fontSize: '24px' }}>
          ToDo App With Hooks
        </Typography>
      </Toolbar>
    </AppBar>
  </Paper>
);

export default App;
