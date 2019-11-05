import styled from "styled-components"
import {
  color,
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

export type LabelProps = FontSizeProps &
  SpaceProps &
  FontWeightProps &
  LineHeightProps &
  MarginProps &
  TextAlignProps &
  TextStyleProps

export const Label = styled.label<LabelProps>`
${space}
${fontSize}
${fontWeight}
${lineHeight}
${color}
${margin}
${textAlign}
${textStyle}
`

Label.defaultProps = {
  marginBottom: 2,
}
