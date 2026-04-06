export * from './reducer'
export * from './saga'
export * from './styles'
export * from './defaultStyle'

import { createNotificationsComponent } from './Component'
import defaultIcons from './defaultIcons'

export default createNotificationsComponent(defaultIcons)
