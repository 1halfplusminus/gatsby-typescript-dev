import styled from "styled-components"
import {
  color,
  flex,
  FlexProps,
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
  textStyle,
  TextStyleProps,
} from "styled-system"
import { TextColorProps } from "../../theme"

export type TextProps = FontSizeProps &
  SpaceProps &
  FontWeightProps &
  LineHeightProps &
  MarginProps &
  TextAlignProps &
  TextStyleProps &
  FontFamilyProps &
  TextColorProps &
  FlexProps

export const Text = styled.div<TextProps>`
  ${space}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${color}
  ${margin}
  ${textAlign}
  ${textStyle}
  ${fontFamily}
  ${flex}
`

export const Link = styled(Text.withComponent("a"))`
  text-decoration: none;
  :hover {
    color: ${props => props.theme.colors.black};
  }
`

Link.defaultProps = {
  color: "black",
}

export default Text
