import { takeEvery, put, delay, take } from 'redux-saga/effects'

function* popNotification({ notification }) {
  if (notification.buttons) {
    return
  }
  if (notification.resolveActions) {
    yield take(notification.resolveActions)
  } else {
    yield delay(notification.duration || 5000)
  }
  yield put({
    type: 'NOTIFICATION_POP',
    id: notification.id
  })
}

function* forwardConfirmation({ id, payload }) {
  yield put(payload)
  yield put({ type: 'NOTIFICATION_POP', id })
}

export function* saga() {
  yield takeEvery('NOTIFICATION_PUSH', popNotification)
  yield takeEvery('NOTIFICATION_CONFIRMATION', forwardConfirmation)
}
