import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const Header = () => (
  <AppBar color="primary" position="static" style={{ height: 64 }}>
    <Toolbar style={{ height: '100%' }}>
      <Typography color="inherit" style={{ fontSize: '24px' }}>
        ToDo App With Hooks
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
