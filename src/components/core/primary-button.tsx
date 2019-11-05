import css from "@styled-system/css"
import styled from "styled-components"
import {
  background,
  BackgroundColorProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  fontSize,
  FontSizeProps,
  grid,
  GridProps,
  space,
  SpaceProps,
} from "styled-system"

export type ButtonProps = SpaceProps &
  FontSizeProps &
  ColorProps &
  FlexboxProps &
  GridProps &
  BackgroundColorProps

const CoreButton = styled.button<ButtonProps>`
  ${space}
  ${fontSize}
  ${color}
  ${flexbox}
  ${grid}
  ${background}
`
export const PrimaryButton = styled(CoreButton)`
  :hover {
    ${css({
      backgroundColor: "primaryHover",
    })}
    color: #fff;
  }
  font-size: 13px !important;
  text-decoration: none;
  padding: 8px 20px 8px 20px !important;
  font-family: "Open Sans";
  border: none;
  text-transform: uppercase;
  border-radius: 4px;
  font-size: 10px;
  line-height: 20px;
  margin: 10px 0px;
  display: flex;
`

PrimaryButton.defaultProps = {
  backgroundColor: "primary",
  color: "primaryText",
}
