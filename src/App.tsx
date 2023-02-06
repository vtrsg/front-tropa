import React from 'react';
import './App.css';

import { BrowserRouter } from "react-router-dom";

import Root from './Routes';

function App() {
  return (
    <BrowserRouter>
      <Root/>
    </BrowserRouter>
    
  );
}

export default App;
