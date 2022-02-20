import Box from '@mui/material/Box';
import Beers from './Beers';
import { useBeer } from '../utils/useBeer';

function App() {
  const { beerData } = useBeer();
  const { show } = beerData;

  const lockStyles = {
    // position: show ? 'fixed' : '',
    // top: show ? `-${window.scrollY}px` : '',
    paddingRight: show ? '16px' : '',
  };

  return (
    <Box textAlign='center' sx={lockStyles}>
      <Beers />
    </Box>
  );
}

export default App;
