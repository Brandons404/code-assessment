import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const TitledContent = ({ title, body, color }) => {
  return (
    <Grid
      container
      spacing={1}
      alignItems='flex-start'
      justifyContent='center'
      sx={{ minHeight: '250px', width: '80%', mx: 'auto', my: 20 }}
    >
      <Grid item xs={4} sx={{ textAlign: 'left' }}>
        <Typography variant='h3' fontFamily='Poppins' color={color} fontWeight={600}>
          {title}
        </Typography>
      </Grid>
      <Grid item xs={8} sx={{ textAlign: 'left' }}>
        <Typography variant='h5' fontFamily='Poppins' color={color}>
          {body}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TitledContent;
