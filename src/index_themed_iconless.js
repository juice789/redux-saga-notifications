export * from './reducer'
export * from './saga'
export * from './styles'
export * from './defaultStyle'

import { createThemedNotificationsComponent } from './Component_themed'
import defaultIconsIconless from './defaultIcons_iconless'

export default createThemedNotificationsComponent(defaultIconsIconless)
