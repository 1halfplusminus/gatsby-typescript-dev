import { DisplayProps, height } from "@material-ui/system"
import { ViewProps } from "react-native"
import styled from "styled-components"
import {
  color,
  ColorProps,
  display,
  flexbox,
  FlexboxProps,
  fontSize,
  FontSizeProps,
  HeightProps,
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
  HeightProps &
  DisplayProps

export const Box = styled.div<BoxProps & { container?: boolean }>`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${overflow}
  ${flexbox}
  ${height}
  ${display}
  display: ${({ container }) => (container ? "flex" : "")};
`
export const BoxRow = styled.div<BoxProps>`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${overflow}
  ${flexbox}
  display: flex;
  flex-direction: row;
`

export const FlexRow = styled(Box)`
  flex-direction: row;
  display: flex;
`

export const FlexColumn = styled(Box)`
  flex-direction: column;
  display: flex;
`
