import { darken } from "polished"
import { ViewProps } from "react-native"
import styled, { css } from "styled-components"
import {
  color,
  ColorProps,
  display,
  DisplayProps,
  flexbox,
  FlexboxProps,
  fontSize,
  FontSizeProps,
  overflow,
  OverflowProps,
  space,
  SpaceProps,
  width,
  WidthProps,
} from "styled-system"

export type ButtonProps = SpaceProps &
  WidthProps &
  FontSizeProps &
  ColorProps &
  ViewProps &
  OverflowProps &
  DisplayProps &
  FlexboxProps

const baseButton = css`
  transform: skew(5deg, 10deg);
  height: 60px;
  width: 200px;
  background: coral;
  font-family: "Teko", sans-serif;
  text-transform: uppercase;
  font-weight: 900;
  font-variant-numeric: slashed-zero tabular-nums;
  line-height: 1em;
  color: indianred;
  border: 0px;
  :hover {
    background: ${darken(0.1)("coral")};
  }
  :focus {
    outline: 0;
  }
`
export const Button = styled.button<ButtonProps>`
  ${baseButton}
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${overflow}
  ${flexbox}
  ${display}
  flex-shrink: 1;
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`
