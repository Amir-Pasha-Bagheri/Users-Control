import React from 'react';
import { Router } from 'react-router';
import Routes from './Routes/route'
import history from './history'

function App() {
  return (
      <Router history={history}>
        <Routes/>
      </Router>
  );
}

export default App;
