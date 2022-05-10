/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from './helpers'
import 'jest-styled-components'
import '@testing-library/jest-dom'

import Notifications from '../Component'

it('default component, no notifications', () => {
  const { container } = render(<Notifications />)
  expect(container.firstChild).toMatchSnapshot()
  expect(screen.queryByText(/Test notification/)).not.toBeInTheDocument()
})

it('should show a notification', () => {
  const state = {
    1: {
      label: 'Test notification',
      duration: '5000',
      id: '1'
    }
  }
  const { container } = render(<Notifications />, {
    preloadedState: { notificationReducer: state }
  })
  expect(container.firstChild).toMatchSnapshot()
  expect(screen.queryByText(/Test notification/)).toBeInTheDocument()
  expect(screen.queryByText(/Yes/)).not.toBeInTheDocument()
  expect(screen.queryByText(/No/)).not.toBeInTheDocument()
})

it('should show a yes/no notification', () => {
  const state = {
    1: {
      label: 'Test notification',
      duration: '5000',
      id: '1',
      buttons: 'yesNo'
    }
  }
  const { container } = render(<Notifications />, {
    preloadedState: { notificationReducer: state }
  })
  expect(container.firstChild).toMatchSnapshot()
  expect(screen.queryByText(/Test notification/)).toBeInTheDocument()
  expect(screen.queryByText(/Yes/)).toBeInTheDocument()
  expect(screen.queryByText(/No/)).toBeInTheDocument()
})

it('should show a confirmation notification', () => {
  const state = {
    1: {
      label: 'Test notification',
      duration: '5000',
      id: '1',
      buttons: 'ok'
    }
  }
  const { container } = render(<Notifications />, {
    preloadedState: { notificationReducer: state }
  })
  expect(container.firstChild).toMatchSnapshot()
  expect(screen.queryByText(/Test notification/)).toBeInTheDocument()
  expect(screen.queryByText(/Yes/)).not.toBeInTheDocument()
  expect(screen.queryByText(/No/)).not.toBeInTheDocument()
  expect(screen.queryByText(/Ok/)).toBeInTheDocument()
})
