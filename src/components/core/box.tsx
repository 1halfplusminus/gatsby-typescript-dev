import { ComponentType } from "react"
import { ViewProps } from "react-native"
import styled from "styled-components"
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

export type BoxProps = SpaceProps &
  WidthProps &
  FontSizeProps &
  ColorProps &
  ViewProps &
  OverflowProps &
  FlexboxProps &
  DisplayProps & {
    container?: boolean
  }

export const Box = styled.div<BoxProps>`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${overflow}
  ${flexbox}
  ${display}
  flex-shrink: 1;
  display: ${({ container }) => container && "flex"};
`

export const FlexRow = styled<ComponentType<BoxProps>>(Box)`
  flex-direction: row;
`

export const FlexColumn = styled<ComponentType<BoxProps>>(Box)`
  flex-direction: column;
`
