import styled, { keyframes, css } from 'styled-components'

export const moveup = keyframes({
  from: {
    transform: 'translateY(15px)'
  },
  to: {
    transform: 'translateY(0px)'
  }
})

export const show = keyframes({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
})

export const slidebg = keyframes({
  from: {
    backgroundPositionX: '100%'
  },
  to: {
    backgroundPositionX: '0%'
  }
})

const container = () => ({
  position: 'fixed',
  bottom: '15px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  alignItems: 'center'
})

const overlay = () => ({
  position: 'fixed',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  background: 'black',
  opacity: 0.7,
  zIndex: 10
})

const notification = ({ duration }) => ({
  position: 'relative',
  overflow: 'hidden',
  margin: '15px 15px 0 15px',
  display: 'flex',
  flexDirection: 'column',
  zIndex: 11,
  userSelect: 'none',
  animation: css`
    ${moveup} 0.2s ease none, ${show} 0.2s ease none, ${slidebg} ${duration}ms linear none
  `
})

const inner = () => ({
  display: 'flex',
  minHeight: '30px',
  zIndex: 13,
  alignItems: 'center'
})

const icon = () => ({
  display: 'flex',
  height: '100%',
  fontSize: '28px',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '15px 0 15px 15px',
  color: '#ededee'
})

const label = () => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '15px',
  fontSize: '12px',
  color: '#ededee',
  fontWeight: 'bold'
})

const controls = () => ({
  display: 'flex',
  zIndex: 13
})

const button = ({ half }) => ({
  display: 'flex',
  width: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5px 15px',
  transition: 'background 0.2s ease',
  fontSize: '12px',
  cursor: 'pointer',
  fontSize: '12px',
  color: '#ededee',
  width: half ? '50%' : '100%'
})

export const componentStyles = {
  container,
  overlay,
  notification,
  inner,
  icon,
  label,
  controls,
  button
}

const makeComponent = (key) =>
  styled.div((props) =>
    props?.styles?.[key]
      ? css(props.styles[key](componentStyles[key](props), props))
      : css(componentStyles[key](props))
  )

export const Container = makeComponent('container')
export const Overlay = makeComponent('overlay')
export const Notification = makeComponent('notification')
export const Inner = makeComponent('inner')
export const Icon = makeComponent('icon')
export const Label = makeComponent('label')
export const Controls = makeComponent('controls')
export const Button = makeComponent('button')
