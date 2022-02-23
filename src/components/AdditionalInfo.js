import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import { useBeer } from '../utils/useBeer';

const AdditionalInfo = ({ textColor }) => {
  const { beerData } = useBeer();

  const { id, foodPairing, abv, firstBrewed } = beerData;

  return (
    <Grid
      container
      spacing={10}
      justifyContent='center'
      alignItems='baseline'
      sx={{ minHeight: '250px', width: '80%', mx: 'auto', my: 10 }}
    >
      {foodPairing?.length && (
        <Grid item xs={3} sx={{ textAlign: 'left' }}>
          <Typography
            gutterBottom
            variant='h5'
            fontFamily='Poppins'
            color={textColor}
            fontWeight={600}
          >
            Goes well with:
          </Typography>
          <Stack>
            {foodPairing?.map((food, index) => (
              <Typography
                key={`beer-${id}-food-pairing-${index}`}
                gutterBottom
                variant='h6'
                fontFamily='Poppins'
                color={textColor}
              >
                - {food}
              </Typography>
            ))}
          </Stack>
        </Grid>
      )}
      {abv && (
        <Grid item xs={3} sx={{ textAlign: 'left' }}>
          <Stack>
            <Typography
              gutterBottom
              variant='h5'
              fontFamily='Poppins'
              color={textColor}
              fontWeight={600}
            >
              Alcohol by volume:
            </Typography>
            <Typography gutterBottom variant='h6' fontFamily='Poppins' color={textColor}>
              {abv}
            </Typography>
          </Stack>
        </Grid>
      )}
      {firstBrewed && (
        <Grid item xs={3} sx={{ textAlign: 'left' }}>
          <Stack>
            <Typography
              gutterBottom
              variant='h5'
              fontFamily='Poppins'
              color={textColor}
              fontWeight={600}
            >
              firstBrewed:
            </Typography>
            <Typography gutterBottom variant='h6' fontFamily='Poppins' color={textColor}>
              {firstBrewed}
            </Typography>
          </Stack>
        </Grid>
      )}
    </Grid>
  );
};

export default AdditionalInfo;
