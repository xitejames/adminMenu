import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

const styles = {
  root: {
    flexGrow: 1,
    zIndex: 10,
  },
  dropDown: {
    position: 'absolute',
    top: 10,
    right: 48,
    background: 'none',
    border: 'none',
    boxShadow: 'none',
    '& .MuiSpeedDial-fab': {
      background: 'none',
      border: 'none',
      boxShadow: 'none',
      '&:hover': {
        background: 'none',
        border: 'none',
        boxShadow: 'none',
      },
    },
  },
  dropDownIcon: {
    color: '#FF0099',
    fontSize: 40,
  },
};

export default function OrientationDropDown(props) {
  const { toggleOrientation } = props;
  return (
    <Box sx={styles.root}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={styles.dropDown}
        icon={(
          <ChangeCircleIcon
            sx={styles.dropDownIcon}
          />
)}
        direction="down"
      >
        <SpeedDialAction
          icon={(
            <ArrowCircleLeftOutlinedIcon onClick={(event) => { event.stopPropagation(); toggleOrientation('LEFT'); }} />
)}
          tooltipTitle="Left"
        />
        <SpeedDialAction
          icon={(
            <ArrowCircleRightOutlinedIcon onClick={(event) => { event.stopPropagation(); toggleOrientation('RIGHT'); }} />
)}
          tooltipTitle="Right"
        />
        <SpeedDialAction
          icon={(
            <ArrowCircleDownOutlinedIcon onClick={(event) => { event.stopPropagation(); toggleOrientation('CENTRE'); }} />
)}
          tooltipTitle="Centre"
        />
      </SpeedDial>
    </Box>
  );
}
