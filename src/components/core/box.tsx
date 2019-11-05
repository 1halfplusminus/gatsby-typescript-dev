import { ComponentType } from "react"
import { ViewProps } from "react-native"
import styled from "styled-components"
import {
  color,
  ColorProps,
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
  FlexboxProps

export const Box = styled.div<BoxProps>`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${overflow}
  ${flexbox}
  display: flex;
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

export const FlexRow = styled<ComponentType<BoxProps>>(Box)`
  flex-direction: row;
  display: flex;
`

export const FlexColumn = styled<ComponentType<BoxProps>>(Box)`
  flex-direction: column;
  display: flex;
`
