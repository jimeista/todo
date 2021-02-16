import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createEpicMiddleware } from 'redux-observable'
import { rootReducers, rootEpics } from './redux/root'

import './index.css'
import App from './App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const epicMiddleware = createEpicMiddleware()
const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(epicMiddleware))
)
epicMiddleware.run(rootEpics)

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
)
