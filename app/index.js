'use strict';
import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './store'
import Main from './components/Main';

render(
  <Provider store={store}>
    <Router>
      <MuiThemeProvider>
        <Main />
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('main')
);
