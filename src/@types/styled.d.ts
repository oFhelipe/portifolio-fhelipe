import 'styled-components'

import ITheme from '../styles/themes/ITheme'

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
