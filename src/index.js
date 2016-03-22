console.log('in index.js');
import React from 'react';
import ReactDOM from 'react-dom';

import Splash from './components/Splash';

require("./style.scss");

ReactDOM.render(
  <Splash />
  ,
  document.getElementById('app')
);
