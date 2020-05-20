import React from 'react';
import Favicon from 'react-favicon';

import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Favicon url="http://oflisback.github.io/react-favicon/public/img/github.ico" />
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
