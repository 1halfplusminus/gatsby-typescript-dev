import InputBase from "@material-ui/core/InputBase"
import styled from "styled-components"
import {
  color,
  ColorProps,
  display,
  DisplayProps,
  flex,
  flexbox,
  FlexProps,
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

export type InputProps = FontSizeProps &
  SpaceProps &
  FontWeightProps &
  LineHeightProps &
  MarginProps &
  TextAlignProps &
  TextStyleProps &
  ColorProps &
  DisplayProps &
  FlexProps

export const InputMui = styled(InputBase)<InputProps>`
${space}
${fontSize}
${fontWeight}
${lineHeight}
${color}
${margin}
${textAlign}
${textStyle}
${display}
${flex}
${flexbox}
font-weight: 400;
line-height: 1.5;
color: #495057;
background-color: #fff;
background-clip: padding-box;
border: 1px solid #ced4da;
border-radius: .25rem;
transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
flex-shrink: 1;
border-radius: 0px;
color: #753373;
font-weight: bold;
height: 40px;
border: none;
border-right: 2px solid #eaeaea;
padding: 0.2rem 0.75rem;
line-height: 1.25;
display: flex;
`

InputMui.defaultProps = {
  padding: 1,
  fontSize: 1,
}
