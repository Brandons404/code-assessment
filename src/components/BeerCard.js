import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import styled from '@mui/system/styled';

import { useBeer } from '../utils/useBeer';

const getColor = () => {
  const colors = ['#2F3D30', '#8C826C', '#57605C', '#404654', '#34273B'];
  return colors[Math.floor(Math.random() * colors.length)];
};
const CustomImg = styled('img')(({ theme }) => ({
  maxHeight: '96%',
  paddingTop: theme.spacing(),
  transition: 'all ease-in-out 0.4s',
  aspectRatio: '1 / 1',
}));

const containerProps = {
  transition: 'all ease-out 0.4s',
  overflow: 'hidden',
  position: 'relative',
  color: '#000',
  aspectRatio: '1 / 1',
  '&:hover': {
    backgroundColor: '#fff',
    img: {
      opacity: 0,
      transform: 'scale(6)',
    },
    '& .beer-info': {
      opacity: 1,
      transform: 'translate(-50%, -50%) scale(1)',
    },
  },
};

const BeerCard = ({ id, beerName, img, tagline, description, delay }) => {
  const [ready, setReady] = React.useState(false);
  const [color, setColor] = React.useState('#fff');
  const { beerData, setBeer } = useBeer();
  const { show } = beerData;

  React.useEffect(() => {
    setColor(getColor());
  }, []);

  setTimeout(() => {
    setReady(true);
  }, delay);

  const handleClick = () => {
    setBeer({ img, beerName, color });
  };

  return (
    <Box
      width='100%'
      sx={{
        ...containerProps,
        background: color,
        pointerEvents: show ? 'none' : 'auto',
        transform: ready ? 'translateY(0)' : 'translateY(15%)',
        opacity: ready ? 1 : 0,
      }}
      onClick={handleClick}
    >
      <Stack
        className={'beer-info'}
        sx={{
          width: '85%',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) scale(0.01)',
          transition: 'all ease-out 0.4s',
        }}
      >
        <Typography variant='h5' component='h3' fontFamily='Poppins' fontWeight={900}>
          {beerName}
        </Typography>
        <Typography variant='h6' component='h4' fontFamily='Poppins'>
          {tagline}
        </Typography>
      </Stack>
      <CustomImg src={img} alt={beerName} />
    </Box>
  );
};

export default BeerCard;
