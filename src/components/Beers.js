import React from 'react';
import Box from '@mui/material/Grid';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import BeerCard from './BeerCard';

// constants
const beersUrl = 'https://api.punkapi.com/v2/beers?page=4&per_page=20';

const Beers = () => {
  const [allBeers, setAllBeers] = React.useState([]);

  const fetchBeers = async () => {
    try {
      const response = await fetch(beersUrl);
      const beers = await response.json();
      setAllBeers(beers);
      console.log(beers);
    } catch (e) {
      if (process.env.NODE_ENV === 'development') throw new Error(e);
    }
  };

  // cut out unused data from API call
  const data = React.useMemo(
    () =>
      allBeers?.map(({ id, name, tagline, image_url, description }) => ({
        id,
        beerName: name,
        tagline,
        img: image_url,
        description,
      })),
    [allBeers]
  );

  React.useEffect(() => {
    fetchBeers();
  }, []);

  return (
    <Box
      mx={'auto'}
      sx={(theme) => ({
        width: `calc(100vw - ${theme.spacing(4)})`,
        mt: 5,
      })}
    >
      <Typography variant='h2' component='h1' mt={25} fontFamily='Poppins' fontWeight={600}>
        Portfolio Grid 4
      </Typography>
      <Typography variant='body1' component='h2' mb={10} fontFamily='Poppins'>
        This grid shows the items pages in a popup
      </Typography>
      <Grid container spacing={1} mb={5}>
        {data?.map((beer, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={`beer-${beer.id}`}>
            <BeerCard delay={index * 100} {...beer} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Beers;
