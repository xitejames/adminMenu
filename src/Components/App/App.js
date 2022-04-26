import React from 'react';
import Box from '@mui/material/Box';
import Menu from '../Menu';

const styles = {
  root: {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
  },
};

function App() {
  return (
    <Box sx={styles.root}>
      <Menu />
    </Box>
  );
}

export default App;
