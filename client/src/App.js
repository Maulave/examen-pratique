import React, { useEffect, useState } from 'react';
import * as axios from 'axios';
import Meteo from './meteo';
import Menu from './menu';
import { useSelector } from 'react-redux';

const App = () => {


  return (
      <div className='App'>
        <Menu />
        <Meteo />
      </div>
  );
}





export default App;

