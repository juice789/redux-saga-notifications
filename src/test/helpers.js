import { fork, take, cancel } from 'redux-saga/effects'
import { compose, map, path, filter, propEq, prop } from 'ramda'

import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { reducer as notificationReducer } from '../reducer'

export const sagaRunner = (fn) =>
  function* () {
    const task = yield fork(fn)
    yield take('TEST_END')
    yield cancel(task)
  }

export const getActions = compose(
  map(path(['payload', 'action'])),
  filter(propEq('type', 'PUT')),
  prop('allEffects')
)

const render = (
  ui,
  {
    preloadedState,
    store = createStore(
      combineReducers({ notificationReducer }),
      preloadedState
    ),
    ...renderOptions
  } = {}
) =>
  rtlRender(ui, {
    wrapper: ({ children }) => <Provider store={store}>{children}</Provider>,
    ...renderOptions
  })

export * from '@testing-library/react'
export { render }