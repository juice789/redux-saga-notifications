import React from 'react'
import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux'
import { legacy_createStore as createStore, applyMiddleware, combineReducers, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { defaultRebootTheme } from 'styled-reboot'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles.js'

import {
  notificationSaga,
  notificationReducer
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

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <ThemeProvider theme={defaultRebootTheme}>
    <Provider store={store}>
      <GlobalStyle />
      <App />
    </Provider>
  </ThemeProvider>
)
