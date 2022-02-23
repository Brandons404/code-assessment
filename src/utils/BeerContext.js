import { createContext, useState } from 'react';
import bodyScroll from 'body-scroll-toggle';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import styled from '@mui/system/styled';

import TitledContent from '../components/TitledContent';
import AdditionalInfo from '../components/AdditionalInfo';

/* TODO
-MAKE DEFINED "X" BUTTON TO CLOSE MODAL
 */

const defaultData = {
  show: false,
  id: 0,
  beerName: '',
  tagline: '',
  img: '',
  description: '',
  foodPairing: [],
  abv: 0,
  firstBrewed: '',
  color: '#fff',
};

const CustomImg = styled('img')(({ theme }) => ({
  maxHeight: '50vh',
  paddingTop: theme.spacing(2),
  marginBottom: theme.spacing(3),
  transition: 'all ease-in-out 0.4s',
  aspectRatio: '1 / 1',
}));

const getTextColor = (color) => {
  return ['#2F3D30', '#57605C', '#404654', '#34273B'].includes(color) ? 'white' : 'black';
};

export const BeerContext = createContext();

export const BeerProvider = ({ children }) => {
  const [beerData, setBeerData] = useState(defaultData);
  const { show, beerName, tagline, img, description, color } = beerData;

  const textColor = getTextColor(color);

  const setBeer = ({
    show = true,
    id = 0,
    beerName,
    tagline,
    img,
    description,
    foodPairing = [],
    abv,
    firstBrewed,
    color = '#fff',
  }) => {
    bodyScroll.disable();
    setBeerData({
      ...beerData,
      show,
      id,
      beerName,
      tagline,
      img,
      description,
      foodPairing,
      abv,
      firstBrewed,
      color,
    });
  };

  const handleClose = () => {
    bodyScroll.enable();
    setBeerData({ ...defaultData, show: false });
  };

  return (
    <BeerContext.Provider value={{ beerData, setBeer, handleClose }}>
      <Backdrop open={show} onClick={handleClose} sx={{ zIndex: 999 }}>
        <Paper
          elevation={6}
          sx={{
            top: '5%',
            left: '5%',
            background: color,
            textAlign: 'center',
            width: '90%',
            height: '90%',
            position: 'fixed',
            transition: 'all ease-out 0.3s',
            transform: show ? 'scale(1)' : 'scale(0)',
            overflowY: 'scroll',
          }}
        >
          <Typography variant='h3' fontFamily='Poppins' fontWeight={900} my={8} color={textColor}>
            {beerName}
          </Typography>
          <CustomImg src={img} alt={beerName} />
          <TitledContent title={tagline} body={description} color={textColor} />
          <AdditionalInfo textColor={textColor} />
        </Paper>
      </Backdrop>
      {children}
    </BeerContext.Provider>
  );
};
