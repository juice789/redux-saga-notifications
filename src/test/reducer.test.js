import { reducer } from '../reducer'

describe('reducer test', () => {
  let initialState

  beforeEach(() => {
    initialState = {
      1: {
        id: '1',
        label: 'test 1'
      }
    }
  })

  it('should return the inital state', () => {
    expect(reducer(initialState, { type: 'TEST_ACTION' })).toEqual(initialState)
  })
  it('should add a notification', () => {
    const action = {
      type: 'NOTIFICATION_PUSH',
      notification: { id: '2', label: 'test 2' }
    }
    const expected = {
      1: { id: '1', label: 'test 1' },
      2: { id: '2', label: 'test 2' }
    }
    expect(reducer(initialState, action)).toEqual(expected)
  })
  it('should add a notification', () => {
    const action = {
      type: 'NOTIFICATION_POP',
      id: '1'
    }
    const expected = {}
    expect(reducer(initialState, action)).toEqual(expected)
  })
})
