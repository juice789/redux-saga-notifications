import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  Container,
  Overlay,
  Notification,
  Inner,
  Button,
  Icon,
  Label,
  Controls
} from './styles'

import defaultStyle from './defaultStyle'
import defaultIcons from './defaultIcons'

const NotificationsComponent = ({ styles, icons }) => {
  const dispatch = useDispatch()

  const notifications = useSelector(({ notificationReducer }) =>
    Object.values(notificationReducer)
  )

  const easyDispatch = (props) => () => {
    dispatch({
      type: props.payload ? 'NOTIFICATION_CONFIRMATION' : 'NOTIFICATION_POP',
      ...props
    })
  }

  const _styles = {
    ...defaultStyle,
    ...styles
  }

  const _icons = {
    ...defaultIcons,
    ...icons
  }

  const isOverlay = notifications.find(({ blocking }) => Boolean(blocking))
  return (
    <Container>
      {isOverlay ? <Overlay /> : null}
      {notifications.map(({ label, id, payload, type, buttons, duration }) => (
        <Notification
          timer={buttons === undefined}
          key={id}
          styles={_styles[type]}
          duration={duration}
        >
          <Inner styles={_styles[type]}>
            {_icons[type] ? (
              <Icon styles={_styles[type]}>{_icons[type]}</Icon>
            ) : null}
            <Label styles={_styles[type]}>{label}</Label>
          </Inner>
          {buttons === 'yesNo' ? (
            <Controls styles={_styles[type]}>
              <Button
                styles={_styles[type]}
                half={true}
                onClick={easyDispatch({ id, payload })}
              >
                Yes
              </Button>
              <Button
                styles={_styles[type]}
                half={true}
                onClick={easyDispatch({ id })}
              >
                No
              </Button>
            </Controls>
          ) : null}
          {buttons === 'ok' ? (
            <Controls styles={_styles[type]}>
              <Button
                styles={_styles[type]}
                onClick={easyDispatch({ id, payload })}
              >
                Ok
              </Button>
            </Controls>
          ) : null}
        </Notification>
      ))}
    </Container>
  )
}

export default NotificationsComponent
