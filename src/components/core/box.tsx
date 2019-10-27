import { ViewProps } from "react-native"
import styled from "styled-components"
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  fontSize,
  FontSizeProps,
  height,
  HeightProps,
  overflow,
  OverflowProps,
  position,
  PositionProps,
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
  PositionProps &
  HeightProps

export const Box = styled.div<BoxProps>`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${overflow}
  ${flexbox}
  ${position}
  ${height}
  flex-shrink: 1;
  display: flex;
`

export const FlexRow = styled(Box)`
  flex-direction: row;
`

export const FlexColumn = styled(Box)`
  flex-direction: column;
`
