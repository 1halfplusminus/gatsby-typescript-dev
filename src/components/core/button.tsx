import styled from "styled-components"
import {
  color,
  fontFamily,
  FontFamilyProps,
  fontSize,
  FontSizeProps,
  fontWeight,
  FontWeightProps,
  lineHeight,
  LineHeightProps,
  margin,
  MarginProps,
  space,
  SpaceProps,
  textAlign,
  TextAlignProps,
  TextColorProps,
  textStyle,
  TextStyleProps,
} from "styled-system"

export type ButtonProps = FontSizeProps &
  SpaceProps &
  FontWeightProps &
  LineHeightProps &
  MarginProps &
  TextAlignProps &
  TextStyleProps &
  FontFamilyProps &
  TextColorProps

export const Button = styled.button<ButtonProps>`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
  ${margin}
  ${textAlign}
  ${textStyle}
  ${fontFamily}
  flex-shrink: 1;
  display: flex;
  :active, :focus {
      outline: none;
  }
`

export default Button
