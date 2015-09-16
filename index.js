import React from 'react';
import App from './containers/App';

let rootElement = document.getElementById('root')

React.render(
  <div>
    <App />
  </div>,
  rootElement
)

require("bootstrap-sass!./assets/stylesheets/bootstrap-sass.config.js");
