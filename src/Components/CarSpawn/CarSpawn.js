import React, { Component } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const styles = {
  root: {
    height: '100%',
    width: '100%',
  },
  accordion: {
  },

  text: {
    color: 'black',
    marginBottom: '20px',
    fontWeight: 'bold',
  },
};

class CarSpawn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carToSpawn: '',
    };
  }

  render() {
    const { carToSpawn } = this.state;

    return (
      <Box sx={styles.root}>
        <Accordion sx={styles.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography sx={styles.text}>Car Spawn</Typography>
          </AccordionSummary>
          <AccordionDetails sx={styles.accordionDetails}>
            <Typography sx={styles.text}>
              Type the name of the car to spawn
            </Typography>
            <TextField
              value={carToSpawn}
              fullWidth
              sx={{
                '& .MuiOutlinedInput-root': {
                  border: 3,
                  borderColor: 'black',
                },
              }}
              variant="outlined"
              onChange={(event) => {
                const { value } = event.target;
                this.setState({ carToSpawn: value });
              }}
            />

          </AccordionDetails>
        </Accordion>
      </Box>

    );
  }
}

export default CarSpawn;
