import { GenericFamily } from "csstype"
import { ResponsiveValue } from "styled-system"

const black = "#212121" as const
const white = "#FAFAFA"

export const colors = {
  black,
  h1: "#696969" as const,
  h2: "#696969",
  a: "black",
  primary: "#753373" as const,
  primaryHover: "#2f2f2f" as const,
  primaryText: "white" as const,
  white,
} as const

export type ColorPalette = keyof typeof colors

const theme = {
  breakpoints: ["576px", "768px", "992px", "1200px", "1800px"],
  defaultWidths: [1, 1, 1, 7 / 8, 3 / 4, 1 / 2],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, "3.95285rem"],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  fonts: {
    serif: "'Merriweather','Georgia',serif",
    "sans-serif": "'Montserrat', sans-serif",
  },
  letterSpacings: {
    normal: "normal",
    tracked: "0.1em",
    tight: "-0.05em",
    mega: "0.25em",
  },
  colors,
}

export type Theme = typeof theme

export interface ThemeProps {
  theme: typeof theme
}
export interface FontFamilyProps {
  fontFamily?: ResponsiveValue<GenericFamily>
}

type LiteralUnion<T extends U, U = string> = T | (U & {})

export interface TextColorProps {
  color?: ResponsiveValue<LiteralUnion<"test">>
}

export default theme
