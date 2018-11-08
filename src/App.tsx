import React from 'react';
import Paper from '@material-ui/core/Paper';
import Header from './components/Header';

const App = () => (
  <Paper
    elevation={0}
    style={{ padding: 0, margin: 0, backgroundColor: '#fafafa' }}
  >
    <Header />
  </Paper>
);

export default App;
