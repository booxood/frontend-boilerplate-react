import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import React from 'react'

import App from './containers/App'
import About from './containers/About'
import Login from './containers/Login'
import Todos from './components/Todos'

export default (store) => {
  return (
    <Router history={browserHistory}>
      <Route path="/" name="home" component={App}>
        <Route path="/todos" component={Todos} />
        <Route path="/about/:stuff" component={About} />
        <Route path="/login" component={Login} />        
      </Route>
    </Router>
  )
}
