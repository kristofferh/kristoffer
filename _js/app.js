import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link } from 'react-router';
import { browserHistory } from 'react-router'

import App from './components/app';
import About from './components/about';
import Resume from './components/resume';
import Index from './components/index';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path='/' component={App}>
        <IndexRoute component={Index} />
        <Route path='about' component={About}/>
        <Route path='resume' component={Resume}/>
    </Route>
  </Router>
), document.getElementById('page'));
