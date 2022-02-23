import React from 'react';
import Box from '@mui/material/Grid';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';

import BeerCard from './BeerCard';
import { useBeer } from '../utils/useBeer';

const Beers = () => {
  const [allBeers, setAllBeers] = React.useState([]);
  const { beerData } = useBeer();
  const { show } = beerData;

  console.log(allBeers);

  const fetchBeers = async (page) => {
    const beersUrl = `https://api.punkapi.com/v2/beers?page=${page}&per_page=20`;

    try {
      const response = await fetch(beersUrl);
      const beers = await response.json();
      setAllBeers(beers);
    } catch (e) {
      if (process.env.NODE_ENV === 'development') throw new Error(e);
    }
  };

  // cut out unused data from API call
  const data = React.useMemo(
    () =>
      allBeers?.map(
        ({ id, name, tagline, image_url, description, food_pairing, abv, first_brewed }) => ({
          id,
          beerName: name,
          tagline,
          img: image_url,
          description,
          foodPairing: food_pairing,
          abv,
          firstBrewed: first_brewed,
        })
      ),
    [allBeers]
  );

  React.useEffect(() => {
    fetchBeers(1);
  }, []);

  const handlePageChange = (e, page) => {
    fetchBeers(page);
  };

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
      <Paper
        elevation={3}
        sx={{
          background: 'white',
          position: 'fixed',
          bottom: 16,
          left: '50%',
          transform: 'translate(-50%, 0)',
        }}
      >
        <Pagination count={10} hidden={show} onChange={handlePageChange} />
      </Paper>
    </Box>
  );
};

export default Beers;
