import React from 'react';
import 'dotenv/config';
// import { ToastContainer } from 'react-toastify';
// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';
// import { Router } from 'react-router-dom';

// CUSTOM IMPORTS
import './config/ReactotronConfig';
import Routes from './routes';
import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;
