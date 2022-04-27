import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import ArrowCircleDownOutlinedIcon from '@mui/icons-material/ArrowCircleDownOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

const styles = {
  root: {
    height: 320,
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  dropDown: {
    position: 'absolute',
    top: 130,
    right: 40,
    '& .MuiSpeedDial-fab': {
      background: 'none',
    },
  },
  dropDownIcon: {
    color: '#FF0099',
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
          <KeyboardArrowDownOutlinedIcon
            sx={styles.dropDownIcon}
          />
)}
        direction="down"
      >
        <SpeedDialAction
          icon={(
            <ArrowCircleLeftOutlinedIcon onClick={() => { toggleOrientation('LEFT'); }} />
)}
          tooltipTitle="Left"
        />
        <SpeedDialAction
          icon={(
            <ArrowCircleRightOutlinedIcon onClick={() => { toggleOrientation('RIGHT'); }} />
)}
          tooltipTitle="Right"
        />
        <SpeedDialAction
          icon={(
            <ArrowCircleDownOutlinedIcon onClick={() => { toggleOrientation('CENTRE'); }} />
)}
          tooltipTitle="Centre"
        />
      </SpeedDial>
    </Box>
  );
}
