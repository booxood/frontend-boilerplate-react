import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import React from 'react'

import configure from './store'
import routes from './routes'

const store = configure()

ReactDOM.render(
  <Provider store={store}>
    {routes(store)}
  </Provider>,
  document.getElementById('root')
)
