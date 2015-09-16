import React from 'react';
import App from './containers/App';
import './assets/stylesheets/main.sass';

let rootElement = document.getElementById('root')

React.render(
  <div>
    <App />
  </div>,
  rootElement
)
