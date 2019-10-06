import { GenericFamily } from "csstype";
import baseStyled, { ThemedStyledInterface } from "styled-components";
import { ResponsiveValue } from "styled-system";

const black = "#000";

const colors = {
  black,
  h1: "#007acc",
  h2: black,
  a: black,
};

const theme = {
  breakpoints: ["576px", "768px", "992px", "1200px", "1800px"],
  defaultWidths: [1, 1, 1, 7 / 8, 3 / 4, 1 / 2],
  blue: "40B6FF",
  main: "blue",
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  fonts: {
    serif: "athelas, georgia, times, serif",
    sansSerif:
      '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif',
  },
  letterSpacings: {
    normal: "normal",
    tracked: "0.1em",
    tight: "-0.05em",
    mega: "0.25em",
  },
  colors,
};

export type Theme = typeof theme;

export interface ThemeProps {
  theme: typeof theme;
}
export interface FontFamilyProps {
  fontFamily?: ResponsiveValue<GenericFamily>;
}
export interface FontFamilyProps {
  fontFamily?: ResponsiveValue<GenericFamily>;
}
export interface ColorProps {
  color?: keyof typeof colors;
}

export default theme;

export const styled = baseStyled as ThemedStyledInterface<Theme>;
