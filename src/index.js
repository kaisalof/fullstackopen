import ReactDOM from 'react-dom';
import React from 'react';
//import AppPhonebook from './AppPhonebook';
import Countries from './Countries'
const api_key = process.env.REACT_APP_API_KEY
ReactDOM.render(
  //<AppPhonebook />,
  <Countries />,
  document.getElementById('root')
)
