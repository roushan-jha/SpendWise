import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import GlobalState from './contexts';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalState>
    <ChakraProvider>
    <App />
    </ChakraProvider>
  </GlobalState>
);


// import './index.css';
// import reportWebVitals from './reportWebVitals';

// reportWebVitals();
