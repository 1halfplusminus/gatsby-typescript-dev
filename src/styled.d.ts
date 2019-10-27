import "styled-components"
import "styled-system"
import { colors, Theme } from "./theme"

type ThemeColors = keyof typeof colors

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
