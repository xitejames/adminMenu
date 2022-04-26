import React, { Component } from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const styles = {
  menuLeft: {
    position: 'absolute',
    left: '5%',
    top: '5%',
    width: '25%',
    height: '90%',
    backgroundColor: '#453AE0',
    border: 8,
  },
  menuCentre: {
    position: 'absolute',
    left: '5%',
    top: '5%',
    width: '90%',
    height: '90%',
    backgroundColor: '#453AE0',
    border: 8,
  },
  menuRight: {
    position: 'absolute',
    left: '70%',
    top: '5%',
    width: '25%',
    height: '90%',
    backgroundColor: '#453AE0',
    border: 8,
  },

  // BUTTONS FOR THE SMALL MENUS
  buttonLeft: {
    position: 'absolute',
    top: '45%',
    width: '3%',
    height: '10%',
    backgroundColor: '#453AE0',
    minWidth: 0,
    borderRadius: 0,
    border: 4,
    borderColor: 'black',
    '&:hover': {
      backgroundColor: '#8781E6',
    },
  },
  buttonRight: {
    position: 'absolute',
    left: '95%',
    top: '45%',
    width: '3%',
    height: '10%',
    backgroundColor: '#453AE0',
    minWidth: '10px',
    borderRadius: 0,
    border: 4,
    borderColor: 'black',
    '&:hover': {
      backgroundColor: '#8781E6',
    },
  },
  buttonCentre: {
    position: 'absolute',
    left: '40%',
    top: '97.5%',
    width: '20%',
    height: '2%',
    backgroundColor: '#453AE0',
    minWidth: '100px',
    minHeight: '24px',
    borderRadius: 0,
    border: 4,
    borderColor: 'black',
    '&:hover': {
      backgroundColor: '#8781E6',
    },
  },

  // FOR THE BIG MENU
  buttonLeftBig: {
    position: 'absolute',
    top: '45%',
    width: '1%',
    height: '10%',
    backgroundColor: '#453AE0',
    minWidth: 0,
    borderRadius: 0,
    border: 4,
    borderColor: 'black',
    '&:hover': {
      backgroundColor: '#8781E6',
    },
  },
  buttonRightBig: {
    position: 'absolute',
    left: '98.8%',
    top: '45%',
    width: '1%',
    height: '10%',
    backgroundColor: '#453AE0',
    minWidth: '10px',
    borderRadius: 0,
    border: 4,
    borderColor: 'black',
    '&:hover': {
      backgroundColor: '#8781E6',
    },
  },
  buttonCentreBig: {
    position: 'absolute',
    left: '46%',
    top: '98%',
    width: '7%',
    height: '2%',
    backgroundColor: '#453AE0',
    minWidth: '10px',
    minHeight: '10px',
    borderRadius: 0,
    border: 4,
    borderColor: 'black',
    '&:hover': {
      backgroundColor: '#8781E6',
    },
  },

};

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOrientation: 'Left',
    };
  }

  toggleOrientation = (orientation) => {
    this.setState({ menuOrientation: orientation.toUpperCase() });
  };

  isMenuBig = (orientation) => {
    let isBig = false;
    if (orientation.toUpperCase() === 'CENTRE') {
      isBig = true;
    }
    return isBig;
  };

  render() {
    const { menuOrientation } = this.state;
    let menuStyleToUse = styles.menuLeft;

    switch (menuOrientation.toUpperCase()) {
      case 'LEFT':
        menuStyleToUse = styles.menuLeft;
        break;
      case 'CENTRE':
        menuStyleToUse = styles.menuCentre;
        break;
      case 'RIGHT':
        menuStyleToUse = styles.menuRight;
        break;
      default:
    }

    return (

      <Paper
        sx={menuStyleToUse}
        square
      >
        <Box>
          <p>asd</p>
        </Box>

        <Button fullWidth sx={this.isMenuBig(menuOrientation) ? styles.buttonLeftBig : styles.buttonLeft} onClick={() => { this.toggleOrientation('LEFT'); }} />
        <Button fullWidth sx={this.isMenuBig(menuOrientation) ? styles.buttonRightBig : styles.buttonRight} onClick={() => { this.toggleOrientation('RIGHT'); }} />
        <Button fullWidth sx={this.isMenuBig(menuOrientation) ? styles.buttonCentreBig : styles.buttonCentre} onClick={() => { this.toggleOrientation('CENTRE'); }} />

      </Paper>
    );
  }
}

export default Menu;
