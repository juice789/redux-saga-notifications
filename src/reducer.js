export function notificationReducer(state = {}, action) {
  switch (action.type) {
    case 'NOTIFICATION_PUSH':
      return {
        ...state,
        [action.notification.id]: action.notification
      }
    case 'NOTIFICATION_POP':
      const result = {}
      for (let k in state) {
        if (k.toString() !== action.id.toString()) {
          result[k] = state[k]
        }
      }
      return result
    default:
      return state
  }
}