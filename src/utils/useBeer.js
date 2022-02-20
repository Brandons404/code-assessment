import { useContext } from 'react';
import { BeerContext, BeerProvider } from './BeerContext';

export const useBeer = () => useContext(BeerContext);

export default BeerProvider;
