import React, { Component } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const styles = {
  root: {
    height: '10%',
    width: '100%',
    minHeight: '60px',
  },
  accordionSummary: {
    minHeight: '60px',
    width: '100%',
  },
};

function CustomAccordion(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = () => {
    setExpanded(!expanded);
  };
  const { menuTitle } = props;

  return (
    <Box sx={styles.root}>
      <Accordion expanded={expanded} onClick={() => handleChange()}>
        <AccordionSummary
          onClick={() => handleChange()}
          sx={styles.accordionSummary}
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>
            {menuTitle !== undefined && menuTitle !== null ? menuTitle : ''}
          </Typography>
        </AccordionSummary>
        <AccordionDetails />
      </Accordion>
    </Box>
  );
}

export default CustomAccordion;
