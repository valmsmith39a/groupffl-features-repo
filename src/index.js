import React from 'react';
import ReactDOM from 'react-dom';

import Splash from './components/Splash';

require('./style.scss');

console.log('in index.js');

ReactDOM.render(
  <Splash />
  ,
  document.getElementById('app')
);
