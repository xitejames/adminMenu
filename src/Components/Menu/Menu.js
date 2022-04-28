import React, { Component } from 'react';
import Paper from '@mui/material/Paper';
import CustomAccordion from '../CustomAccordion';
import MenuAppBar from '../MenuAppBar';

const styles = {
  menuLeft: {
    position: 'absolute',
    left: '1%',
    top: '2%',
    width: '20%',
    height: 'calc(70% - 80px)',
    background: '#0F2027',
    background: '-webkit-linear-gradient(to bottom, #2C5364, #203A43, #0F2027)',
    background: 'linear-gradient(to left, #2C5364, #203A43, #11242b)',
    border: 6,
  },
  menuCentre: {
    position: 'absolute',
    left: '15%',
    top: '5%',
    width: '70%',
    height: 'calc(70% - 80px)',
    background: '#0F2027',
    background: '-webkit-linear-gradient(to bottom, #2C5364, #203A43, #0F2027)',
    background: 'linear-gradient(to left, #2C5364, #203A43, #11242b)',
    border: 6,
  },
  menuRight: {
    position: 'absolute',
    left: '78%',
    top: '2%',
    width: '20%',
    height: 'calc(70% - 80px)',
    background: '#0F2027',
    background: '-webkit-linear-gradient(to bottom, #2C5364, #203A43, #0F2027)',
    background: 'linear-gradient(to left, #2C5364, #203A43, #11242b)',
    border: 6,
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
        <MenuAppBar
          toggleOrientation={(orientationType) => this.toggleOrientation(orientationType)}
        />
        <CustomAccordion menuTitle="Car Spawner" />
      </Paper>
    );
  }
}

export default Menu;
