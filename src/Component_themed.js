import React from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import { useTheme } from 'styled-components'

import {
  Container,
  ContainerInner,
  Overlay,
  Notification,
  NotificationInner,
  Button,
  Icon,
  Label,
  ButtonsOuter
} from './styles'

import defaultStyle from './defaultStyle'
import { createNotificationStyle } from './defaultStyle'

const buildStylesFromTheme = (theme) => {
  if (!theme?.notificationDefaultTheme) return {}
  return Object.fromEntries(
    Object.entries(theme.notificationDefaultTheme).map(
      ([type, { primaryColor, secondaryColor, animateBackground = true }]) => [
        type,
        createNotificationStyle(primaryColor, secondaryColor, animateBackground)
      ]
    )
  )
}

export const createThemedNotificationsComponent = (defaultIconsParam = {}) => {
  const ThemedNotificationsComponent = ({ styles, icons }) => {
    const dispatch = useDispatch()
    const theme = useTheme()

    const notifications = useSelector(({ notificationReducer }) =>
      Object.values(notificationReducer),
      shallowEqual
    )

    const easyDispatch = (props) => () => {
      dispatch({
        type: props.payload ? 'NOTIFICATION_CONFIRMATION' : 'NOTIFICATION_POP',
        ...props
      })
    }

    const _styles = {
      ...defaultStyle,
      ...buildStylesFromTheme(theme),
      ...styles
    }

    const _icons = {
      ...defaultIconsParam,
      ...icons
    }

    const isOverlay = notifications.find(({ blocking }) => Boolean(blocking))
    return (
      <Container $styles={_styles}>
        <ContainerInner $styles={_styles}>
          {isOverlay ? <Overlay $styles={_styles} /> : null}
          {notifications.map(({ label, id, payload, type, buttons, duration = 5000 }) => (
            <Notification
              $timer={buttons === undefined}
              key={id}
              $styles={_styles[type]}
              $duration={duration}
            >
              <NotificationInner $styles={_styles[type]}>
                {_icons[type] ? (
                  <Icon $styles={_styles[type]}>{_icons[type]}</Icon>
                ) : null}
                <Label $styles={_styles[type]}>{label}</Label>
              </NotificationInner>
              {buttons === 'yesNo' ? (
                <ButtonsOuter $styles={_styles[type]}>
                  <Button
                    $styles={_styles[type]}
                    $half={true}
                    onClick={easyDispatch({ id, payload })}
                  >
                    Yes
                  </Button>
                  <Button
                    $styles={_styles[type]}
                    $half={true}
                    onClick={easyDispatch({ id })}
                  >
                    No
                  </Button>
                </ButtonsOuter>
              ) : null}
              {buttons === 'ok' ? (
                <ButtonsOuter $styles={_styles[type]}>
                  <Button
                    $styles={_styles[type]}
                    onClick={easyDispatch({ id, payload })}
                  >
                    Ok
                  </Button>
                </ButtonsOuter>
              ) : null}
            </Notification>
          ))}
        </ContainerInner>
      </Container>
    )
  }
  return ThemedNotificationsComponent
}

// default export is not used directly — entry points pass icons explicitly
