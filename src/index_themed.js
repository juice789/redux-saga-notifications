export * from './reducer'
export * from './saga'
export * from './styles'
export * from './defaultStyle'

import { createThemedNotificationsComponent } from './Component_themed'
import defaultIcons from './defaultIcons'

export default createThemedNotificationsComponent(defaultIcons)
