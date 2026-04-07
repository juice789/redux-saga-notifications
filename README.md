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
  notificationSaga,
  notificationReducer
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

### Subpath exports

Four builds are available as subpath imports:

| Import path | Icons | Styled-components ThemeProvider |
| --- | --- | --- |
| `@juice789/redux-saga-notifications` | react-icons/fa (bundled) | No |
| `@juice789/redux-saga-notifications/iconless` | None | No |
| `@juice789/redux-saga-notifications/themed` | react-icons/fa (bundled) | Yes |
| `@juice789/redux-saga-notifications/themed-iconless` | None | Yes |

```javascript
// Default build - includes react-icons/fa icons, styled-components bundled
import Notifications from '@juice789/redux-saga-notifications'

// Iconless build - no icons bundled
import Notifications from '@juice789/redux-saga-notifications/iconless'

// Themed build - reads colors from styled-components ThemeProvider (styled-components must be installed)
import Notifications from '@juice789/redux-saga-notifications/themed'

// Themed iconless build
import Notifications from '@juice789/redux-saga-notifications/themed-iconless'
```

### Styled-components theme support

The `themed` and `themed-iconless` builds integrate with styled-components `ThemeProvider`. Provide notification colors via the `notificationDefaultTheme` key in your theme:

```jsx
import { ThemeProvider } from 'styled-components'
import Notifications from '@juice789/redux-saga-notifications/themed'

const theme = {
  notificationDefaultTheme: {
    success: { primaryColor: '#499a4e', secondaryColor: '#336c37' },
    info:    { primaryColor: '#5e8bc6', secondaryColor: '#4a6e9c' },
    error:   { primaryColor: '#d26b63', secondaryColor: '#934b45' }
  }
}

const App = () => (
  <ThemeProvider theme={theme}>
    <Notifications />
  </ThemeProvider>
)
```

Theme colors are applied per notification type. The `styles` prop still takes precedence over theme values, and theme values take precedence over built-in defaults.

Alternatively, you can use `createNotificationStyle` directly in the `styles` prop, sourcing colors from any theme context — not just styled-components `ThemeProvider`. This also lets you override individual sub-styles on top:

```jsx
import { useContext } from 'react'
import { ThemeContext } from './context'
import Notifications, { createNotificationStyle } from '@juice789/redux-saga-notifications/themed'

const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <Notifications
      styles={{
        success: {
          ...createNotificationStyle(theme.mainColor, theme.mainColorFade),
          label: (defaults) => ({
            ...defaults,
            color: ({ theme }) => theme.background1
          })
        }
      }}
    />
  )
}
```

`createNotificationStyle(primaryColor, secondaryColor, animateBackground?)` returns a complete notification style object for a given type. Individual sub-styles (`notification`, `label`, `icon`, `button`, etc.) can be overridden on top of it as shown above.

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
    id: Date.now(),
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
    id: Date.now(),
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
    id: Date.now(),
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
| id             | any                          | Unique notification ID                                                                                                                              |
| type           | string                      | Notification type. Choose from 3 built-in notification types: 'success', 'info', 'error' or create a custom type by declaring it in the styles prop |
| label          | string                      | Notification label                                                                                                                                  |
| duration       | number                      | (optional) Notification display duration in milliseconds (default 5000)                                                                             |
| buttons        | string                      | (optional) Show button controls under the notification. Options: 'yesNo', 'ok'                                                                      |
| payload        | Redux action                | (optional) Action to be forwarded after confirming the notification (only if the buttons property is set to 'yesNo' or 'ok')                        |
| blocking       | boolean                     | (optional) Show an overlay behind the notification                                                                                                  |
| resolveActions | array of Redux action types | (optional) The notification will be active until any of the action types are dispatched, ignoring the duration property                             |

### Complete styling example

```javascript
import Notifications, {
  createNotificationStyle
} from '@juice789/redux-saga-notifications'

const styles = {
  container: (defaults) => ({
    ...defaults,
    alignItems: 'flex-end'
  }),
  containerInner: (defaults) => ({
    ...defaults,
    bottom: '45px'
  }),
  overlay: (defaults) => ({
    ...defaults,
    background: 'darkgray'
  }),
  //add a custom notification type and style it with createNotificationStyle
  customStyle1: createNotificationStyle('purple', 'fuchsia', true), //returns a complete notification style object, just set the colors
  //or set every style property manually
  customStyle2: {
    notification: (defaults) => ({
      ...defaults,
      background: 'burlywood'
    }),
    notificationInner: (defaults) => ({
      ...defaults,
      minHeight: '100px'
    }),
    icon: (defaults) => ({
      ...defaults,
      fontSize: '40px'
    }),
    label: (defaults) => ({
      ...defaults,
      color: 'brown'
    }),
    buttonsOuter: (defaults) => ({
      ...defaults,
      background: 'red'
    }),
    button: (defaults) => ({
      ...defaults,
      fontSize: '20px'
    })
  },
  //overriding the default 'error' notification type
  error: {
    ...createNotificationStyle(
      'red',  //primary color
      'blue', //secondary color
      true    //set to false to disable animations
    ),
    label: (defaults) => ({
      ...defaults,
      color: 'black',
      fontSize: '20px'
    })
  }
}

import { FaAmbulance } from 'react-icons/fa'

const icons = {
  customStyle1: <>🐼</>,
  customStyle2: <>🥒</>,
  success: null, //don't use icon for success notification type
  error: <FaAmbulance /> //use an icon from your favourite icon library (react-icons, lucide-react etc.)
}

const App = () => <Notifications styles={styles} icons={icons} />
```

### License

MIT
