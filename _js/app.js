import React from 'react';
import { Router, Route, IndexRoute, Link } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import App from './components/app';
import About from './components/about';
import Resume from './components/resume';

let history = createBrowserHistory();

React.render((
  <Router history={history}>
    <Route path='/' component={App}>
        <Route path='about' component={About}/>
        <Route path='resume' component={Resume}/>
    </Route>
  </Router>
), document.getElementById('page'));
