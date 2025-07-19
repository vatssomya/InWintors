import 'styled-components'
import { Theme } from '../contexts/ThemeContext'

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
} 