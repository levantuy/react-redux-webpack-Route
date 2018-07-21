import React from 'react';
import { Route } from 'react-router';
import App from './components/app/App';
import Home from './components/home/Home';
import About from './components/about/about';

export default (
  <Route path="/" component={App}>
    <Route path="/about-us" component={About} />
  </Route>
);
