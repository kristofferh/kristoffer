import React from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import App from './components/app';
import About from './components/about';

let history = createBrowserHistory();

React.render((
  <Router history={history}>
    <Route path='/' component={App}>
        <Route path='about' component={About}/>
    </Route>
  </Router>
), document.getElementById('page'));
