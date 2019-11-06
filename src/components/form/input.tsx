import TextareaAutosize from "@material-ui/core/TextareaAutosize"
import TextField, { TextFieldProps } from "@material-ui/core/TextField"
import { Field, FieldAttributes } from "formik"
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

export const Input = styled(Field)<FieldAttributes<TextFieldProps & InputProps>>`
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
flex: 1;
`

export const TextArea = styled(TextareaAutosize)<InputProps>`
  height: inherit;
  flex: 1;
`

Input.defaultProps = {
  padding: 1,
  fontSize: 1,
  component: TextField,
}
