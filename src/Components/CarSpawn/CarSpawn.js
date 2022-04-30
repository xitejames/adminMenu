import React, { Component } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';

const styles = {
  root: {
    minHeight: '140px',
    height: '20%',
    width: '100%',
    marginLeft: 0,
  },
  gridBase: {
    width: '100%',
  },
  textHeader: {
    color: '#FF0099',
    fontWeight: 'bold',
    fontSize: '20px',
    marginLeft: '1%',

  },
  carSpawnTextField: {
    width: '100%',
    color: '#FF0099',
    fontWeight: 'bold',
    fontSize: '20px',
    border: '2px solid #FF0099',
    outline: 'none',
    marginBottom: '1%',
    '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: 0,
    },

  },
  spawnButton: {
    color: '#FF0099',
    fontWeight: 'bold',
    fontSize: '20px',
    background: '#0F2027',
    background: '-webkit-linear-gradient(to bottom, #FF0099, #203A43, #0F2027)',
    background: 'linear-gradient(to bottom, #FF0099, #203A43, #0F2027)',
    marginBottom: '2%',
  },
  gridItemStyle: {
    marginLeft: '1%',
    marginRight: '1%',
  },
};

class CarSpawn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carToSpawn: '',
    };
  }

  handleCarSpawn = () => {
    const { carToSpawn } = this.state;
  };

  render() {
    const { carToSpawn } = this.state;

    return (
      <Box sx={styles.root} onClick={((event) => { event.stopPropagation(); })}>
        <Grid container spacing={1} sx={styles.gridBase}>
          <Grid item xs={12}>
            <Typography sx={styles.textHeader}>
              Type the name of the car to spawn
            </Typography>
          </Grid>

          <Grid item xs={12} sx={styles.gridItemStyle}>
            <TextField
              value={carToSpawn}
              sx={styles.carSpawnTextField}
              variant="outlined"
              onChange={(event) => {
                const { value } = event.target;
                this.setState({ carToSpawn: value });
              }}
              InputProps={{
                sx: styles.textHeader,
              }}
            />
          </Grid>
          <Grid item xs={6} sx={styles.gridItemStyle}>
            <Button
              sx={styles.spawnButton}
              onClick={(event) => { event.stopPropagation(); this.handleCarSpawn(); }}
            >
              Spawn Car
            </Button>
          </Grid>
        </Grid>
      </Box>

    );
  }
}

export default CarSpawn;
