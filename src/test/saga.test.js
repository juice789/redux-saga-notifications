import { expectSaga } from 'redux-saga-test-plan'
import { notificationSaga } from '../saga'
import { sagaRunner, getActions } from './helpers'

describe('popping a notification', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })
  afterEach(() => {
    jest.useRealTimers()
  })
  it('should pop the notification after the duration', (done) => {
    const initAction = {
      type: 'NOTIFICATION_PUSH',
      notification: {
        duration: 1000,
        id: 1
      }
    }

    const expectedActions = [
      {
        type: 'NOTIFICATION_POP',
        id: 1
      }
    ]
    const testSaga = expectSaga(sagaRunner(notificationSaga))

    testSaga.run(false).then((storeState) => {
      try {
        expect(getActions(storeState)).toEqual(expectedActions)
        done()
      } catch (e) {
        done(e)
      }
    })

    testSaga.dispatch(initAction)
    Promise.resolve().then(() => {
      jest.advanceTimersByTime(1000)
      testSaga.dispatch({ type: 'TEST_END' })
    })
  })
  it('should not dispatch before the duration', (done) => {
    const initAction = {
      type: 'NOTIFICATION_PUSH',
      notification: {
        duration: 1000,
        id: 1
      }
    }

    const expectedActions = []
    const testSaga = expectSaga(sagaRunner(notificationSaga))

    testSaga.run(false).then((storeState) => {
      try {
        expect(getActions(storeState)).toEqual(expectedActions)
        done()
      } catch (e) {
        done(e)
      }
    })

    testSaga.dispatch(initAction)
    Promise.resolve().then(() => {
      jest.advanceTimersByTime(500)
      testSaga.dispatch({ type: 'TEST_END' })
    })
  })
  it('should wait for an action to be dispatched if the resolveActions prop is set (ignoring the duration prop)', (done) => {
    const initAction = {
      type: 'NOTIFICATION_PUSH',
      notification: {
        id: 1,
        resolveActions: ['NOTIFICATION_BE_GONE']
      }
    }

    const expectedActions = [
      {
        type: 'NOTIFICATION_POP',
        id: 1
      }
    ]
    const testSaga = expectSaga(sagaRunner(notificationSaga))

    testSaga.run(false).then((storeState) => {
      try {
        expect(getActions(storeState)).toEqual(expectedActions)
        done()
      } catch (e) {
        done(e)
      }
    })

    testSaga.dispatch(initAction)
    testSaga.dispatch({ type: 'NOTIFICATION_BE_GONE' })
    testSaga.dispatch({ type: 'TEST_END' })
  })
  it('should not dispatch until we get the action in the resolveActions array', (done) => {
    const initAction = {
      type: 'NOTIFICATION_PUSH',
      notification: {
        id: 1,
        resolveActions: ['NOTIFICATION_BE_GONE']
      }
    }

    const expectedActions = []
    const testSaga = expectSaga(sagaRunner(notificationSaga))

    testSaga.run(false).then((storeState) => {
      try {
        expect(getActions(storeState)).toEqual(expectedActions)
        done()
      } catch (e) {
        done(e)
      }
    })

    testSaga.dispatch(initAction)
    Promise.resolve().then(() => {
      jest.advanceTimersByTime(60000 * 60 * 24)
      testSaga.dispatch({ type: 'TEST_END' })
    })
  })
  it('should return without doing anything if the notification has controls', (done) => {
    const initAction = {
      type: 'NOTIFICATION_PUSH',
      notification: {
        id: 1,
        buttons: 'yesNo'
      }
    }

    const expectedActions = []
    const testSaga = expectSaga(sagaRunner(notificationSaga))

    testSaga.run(false).then((storeState) => {
      try {
        expect(getActions(storeState)).toEqual(expectedActions)
        done()
      } catch (e) {
        done(e)
      }
    })

    testSaga.dispatch(initAction)
    testSaga.dispatch({ type: 'TEST_END' })
  })
})
describe('confirming a notification', () => {
  it('should dispatch the payload, and pop the notification', (done) => {
    const initAction = {
      type: 'NOTIFICATION_CONFIRMATION',
      id: 1,
      payload: {
        type: 'PAYLOAD_ACTION'
      }
    }
    const expectedActions = [
      {
        type: 'PAYLOAD_ACTION'
      },
      {
        type: 'NOTIFICATION_POP',
        id: 1
      }
    ]
    const testSaga = expectSaga(sagaRunner(notificationSaga))

    testSaga.run(false).then((storeState) => {
      try {
        expect(getActions(storeState)).toEqual(expectedActions)
        done()
      } catch (e) {
        done(e)
      }
    })

    testSaga.dispatch(initAction)
    testSaga.dispatch({ type: 'TEST_END' })
  })
})
