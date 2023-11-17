'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import styles from './carruse.module.scss';

const steps = [
  {
    label: 'Ricardo Basurto',
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  },
  {
    label: 'Eiichi Matsuo',
    description:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    label: 'Abraham Contreras',
    description: `lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  },
];

const CarruselTestimonial =() => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = steps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box sx={{ maxWidth: 600, flexGrow: 1}}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: '#F7F7F7',
        }}
      >
        <Typography variant="h3">Testimonios</Typography>
      </Paper>
      <Box sx={{ height: 255, maxWidth: 600, width: '100%', p: 7 }}>
        <div>
          <p>{steps[activeStep].description}</p>
        <div className='flex justify-around items-center mt-[2rem]'>
          <div><AccountCircleIcon style={{fontSize: '5rem'}}/></div>
          <Typography fontWeight={900}  className={styles.name} variant="h5">{steps[activeStep].label}</Typography>
        </div>
        </div>
      </Box>
      <MobileStepper
      sx={{bgcolor: '#F7F7F7'}}
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft color='error' />
            ) : (
              <KeyboardArrowRight color='error' />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight  color='error' />
            ) : (
              <KeyboardArrowLeft   color='error'/>
            )}
          </Button>
        }
      />
    </Box>
  );
}
export default CarruselTestimonial;