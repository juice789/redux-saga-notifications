import { fork, take, cancel } from 'redux-saga/effects'

import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { legacy_createStore as createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { notificationReducer } from '../reducer'

export const sagaRunner = (fn) =>
  function* () {
    const task = yield fork(fn)
    yield take('TEST_END')
    yield cancel(task)
  }

export const getActions = ({ allEffects }) => allEffects
  .filter(({ type }) => type === 'PUT')
  .map(({ payload }) => payload.action)

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