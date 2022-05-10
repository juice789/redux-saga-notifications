import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { defaultRebootTheme } from 'styled-reboot'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles.js'

import {
  saga as notificationSaga,
  reducer as notificationReducer
} from '../../src'

import App from './App'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  combineReducers({ notificationReducer }),
  {},
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

sagaMiddleware.run(notificationSaga)

ReactDOM.render(
  <ThemeProvider theme={defaultRebootTheme}>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </ThemeProvider>,
  document.querySelector('#root')
)
