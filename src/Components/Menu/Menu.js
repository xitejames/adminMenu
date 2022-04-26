import React from 'react';
import Paper from '@mui/material/Paper';

import { styled } from '@mui/system';

const MyComponent = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  padding: 8,
  borderRadius: 4,
});

function Menu() {
  return (
    <Paper style={{ width: '50%', height: '100%', backgroundColor: 'red' }} />
  );
}

export default Menu;
