import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import BeerProvider from './utils/useBeer';

ReactDOM.render(
  <React.StrictMode>
    <BeerProvider>
      <App />
    </BeerProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
