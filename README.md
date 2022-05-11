# Redux-Saga-Notifications

A simple React notification component. Features:

✅ Reducer + Saga included  
✅ Custom styles  
✅ Styled components theme support  
✅ Button controls to confirm a notification (optional) + action forwarding

### Installation

```sh
npm install @juice789/redux-saga-notifications
```

### Demo

<a href="https://juice789.github.io/redux-saga-notifications/">Open demo</a>

### Usage

See example app in demo/src folder

```javascript
import {
  saga as notificationsSaga,
  reducer as notificationReducer
} from '@juice789/redux-saga-notifications'

//add the saga inside rootSaga
//add the reducer in the rootReducer
```

```jsx
import Notifications from '@juice789/redux-saga-notifications'

const App = () => (
  <>
    <div>Include the Notifications component in your app</div>
    <Notifications />
  </>
)
```

### Props

| name   | type   | description              |
| ------ | ------ | ------------------------ |
| styles | object | (optional) custom styles |
| icons  | object | (optional) custom icons  |

### Dispatching a notification

```javascript
store.dispatch({
  type: 'NOTIFICATION_PUSH',
  notification: {
    id: Date.now().toString(),
    type: 'success',
    label: 'Test notification 1',
    duration: 10000
  }
})
```

### Dispatching a notification with button controls

```javascript
store.dispatch({
  type: 'NOTIFICATION_PUSH',
  notification: {
    id: Date.now().toString(),
    type: 'error',
    label: 'Test notification 2',
    buttons: 'ok' //valid options: 'yesNo' or 'ok'
  }
})
```

### Forwarding a custom action after the notification is confirmed

```javascript
store.dispatch({
  type: 'NOTIFICATION_PUSH',
  notification: {
    id: Date.now().toString(),
    type: 'info',
    label: 'Test notification 3',
    payload: {
      type: 'NOTIFICATION_WAS_CONFIRMED',
      foo: 'bar'
    },
    buttons: 'yesNo' //after the yes button is clicked, the payload is dispatched
  }
})
```

The properties of the notification object:

| name           | type                        | description                                                                                                                                         |
| -------------- | --------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| id             | id                          | Unique notification ID                                                                                                                              |
| type           | string                      | Notification type. Choose from 3 built-in notification types: 'success', 'info', 'error' or create a custom type by declaring it in the styles prop |
| label          | string                      | Notification label                                                                                                                                  |
| duration       | number                      | (optional) Notification display duration in milliseconds (default 5000)                                                                             |
| buttons        | string                      | (optional) Show button controls under the notification. Options: 'yesNo', 'ok'                                                                      |
| payload        | Redux action                | (optional) Action to be forwarded after confirming the notification (only if the buttons property is set to 'yesNo' or 'ok')                        |
| blocking       | boolean                     | (optional) Show an overlay behind the notification                                                                                                  |
| resolveActions | array of Redux action types | (optional) The notification will be active until any of the action types are dispatched, ignoring the duration property                             |

### Create a custom notification style with custom icon

```javascript
import Notification, {
  createNotificationStyle
} from '@juice789/redux-saga-notifications'

const styles = {
  customStyle1: createNotificationStyle('purple', 'fuchsia')
}

const icons = {
  customStyle1: <>🐼</>
}

const App = () => <Notifications styles={styles} icons={icons} />

//dispatch the following action to show a notification with the custom style:
const action = {
  type: 'NOTIFICATION_PUSH',
  notification: {
    type: 'customStyle1',
    label: 'Test notification',
    id: Date.now().toString()
  }
}
```

### Override default styles

Default styles included: 'success', 'error', 'info'.  
The keys of the style type object may be: 'container', 'overlay', 'notification', 'inner', 'icon', 'label', 'controls', 'button'.

```javascript
import Notification, {
  createNotificationStyle,
  notificationDefaultTheme
} from '@juice789/redux-saga-notifications'

//notificationDefaultTheme includes the default primary and secondary colors of the default styles

const styles = {
  error: {
    ...createNotificationStyle(
      notificationDefaultTheme.error.primaryColor,
      notificationDefaultTheme.error.secondaryColor
    ),
    label: (defaults) => ({
      ...defaults,
      color: 'pink'
    }),
    button: (defaults) => ({
      ...defaults,
      background: 'pink'
    })
  }
}

const App = () => <Notifications styles={styles} />
```

#### createNotificationStyle function arguments

| name | type      | description                                  |
| ---- | --------- | -------------------------------------------- |
| 1    | css value | primary color                                |
| 2    | css value | secondary color                              |
| 3    | boolean   | disable background animation (default false) |

### Icons

Override default icons.

```javascript
const icons = {
  success: <FontAwesomeIcon icon={faCheckTriangle} />, //use an icon from your favourite icon library (font awesome, line awesome etc.)
  error: null, //don't use icon
  info: <FontAwesomeIcon icon={faExclamationTriangle} />,
  customAwesomeStyle1: <>🐼</>
}
```

### License

MIT
