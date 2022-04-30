import React, { Component } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import OrientationDropDown from '../OrientationDropDown';

const styles = {
  AppBarRoot: {
    height: '80px',
    width: '100%',
    background: '#0F2027',
    background: '-webkit-linear-gradient(to bottom, #FF0099, #203A43, #0F2027)',
    background: 'linear-gradient(to bottom, #FF0099, #203A43, #0F2027)',
  },
  headingText: {
    color: '#FF0099',
    fontWeight: 'bold',
    fontSize: '30px',
  },
};

class MenuAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      AppBarOrientation: 'Left',
    };
  }

  render() {
    const { toggleOrientation } = this.props;

    return (
      <AppBar sx={styles.AppBarRoot} position="static" color="primary">
        <Toolbar sx={{ width: '100%', height: '100%' }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={styles.headingText}
          >
            CoolMenu
          </Typography>
          <OrientationDropDown
            toggleOrientation={(orientationType) => toggleOrientation(orientationType)}
          />
        </Toolbar>
      </AppBar>
    );
  }
}

export default MenuAppBar;
