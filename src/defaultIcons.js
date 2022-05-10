import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheckCircle,
  faTimesCircle,
  faExclamationCircle
} from '@fortawesome/free-solid-svg-icons'

const defaultIcons = {
  success: <FontAwesomeIcon icon={faCheckCircle} />,
  error: <FontAwesomeIcon icon={faTimesCircle} />,
  info: <FontAwesomeIcon icon={faExclamationCircle} />
}

export default defaultIcons
