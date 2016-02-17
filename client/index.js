import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import App from './containers/App'
import About from './containers/About'
import configure from './store'

const store = configure()

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" name="home" component={App}>
        <Route path="about" name="about" component={About} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
