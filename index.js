import 'babel-core/polyfill';
import React from 'react';
import App from './containers/App';
import { Provider } from 'react-redux';
import { finalCreateStore } from './store/configureStore';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import rootReducer from './reducers'
import { createStore } from 'redux';

const store = createStore(rootReducer)
//const store = finalCreateStore(rootReducer)
let rootElement = document.getElementById('root')

React.render(
  <div>
    <Provider store={store}>
      {() => <App />}
    </Provider>
  </div>,
  rootElement
)

require("bootstrap-sass!./assets/stylesheets/bootstrap-sass.config.js");
