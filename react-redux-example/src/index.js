import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import App from './pages/App';
import NoticesIndex from './pages/NoticesIndex';
import About from './pages/About';
import configureStore from './store/configureStore.js';

const store = configureStore();
// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */}
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={NoticesIndex} />
        <Route path="" component={NoticesIndex} />
        <Route path="about-us" component={About} />
      </Route>
    </Router>
  </Provider>, document.getElementById('root'));
