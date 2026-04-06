export * from './reducer'
export * from './saga'
export * from './styles'
export * from './defaultStyle'

import { createNotificationsComponent } from './Component'
import defaultIconsIconless from './defaultIcons_iconless'

export default createNotificationsComponent(defaultIconsIconless)
