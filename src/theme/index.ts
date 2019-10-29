import { GenericFamily } from "csstype"
import { ResponsiveValue } from "styled-system"

const black = "#000" as const
const primary = "#F44336" as const
export const colors = {
  black,
  h1: primary,
  h2: black,
  a: black,
  primary,
  blue: "#2196F3" as const,
  primaries: ["#E53935"],
  red: "#F44336",
  background: "#FF5722" as const,
  white: "#FAFAFA",
} as const

export interface BreakPoint {
  [key: number]: string | number
  sm?: string | number
  md?: string | number
  lg?: string | number
  xl?: string | number
}
const breakpoints = ["576px", "768px", "992px", "1200px"] as BreakPoint

breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const theme = {
  breakpoints,
  mediaQueries: {
    sm: `@media screen and (max-width: ${breakpoints[0]})`,
    md: `@media screen and (max-width: ${breakpoints[1]})`,
    lg: `@media screen and (max-width: ${breakpoints[2]})`,
    xl: `@media screen and (max-width: ${breakpoints[3]})`,
  },
  defaultWidths: [1, 1, 1, 7 / 8, 3 / 4, 1 / 2],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 13, 15, 24, 32, 48, 64, 96, "3.95285rem"],
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
