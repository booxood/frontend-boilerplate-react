import { createStore, applyMiddleware } from 'redux'
import { syncHistory } from 'react-router-redux'
import { browserHistory } from 'react-router'
import createLogger from 'redux-logger'

import rootReducer from '../reducers'

export default function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  const logger = createLogger()
  const reduxRouterMiddleware = syncHistory(browserHistory)

  const createStoreWithMiddleware = applyMiddleware(
    logger,
    reduxRouterMiddleware
  )(create)

  const store = createStoreWithMiddleware(rootReducer, initialState)

  // Required for replaying actions from devtools to work
  reduxRouterMiddleware.listenForReplays(store)

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
