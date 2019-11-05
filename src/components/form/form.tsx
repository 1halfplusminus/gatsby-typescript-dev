import { Form as FormikForm } from "formik"
import { ComponentType } from "react"
import styled from "styled-components"
import {
  color,
  ColorProps,
  display,
  DisplayProps,
  flex,
  flexbox,
  FlexboxProps,
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

export type FormProps = FontSizeProps &
  SpaceProps &
  FontWeightProps &
  LineHeightProps &
  MarginProps &
  TextAlignProps &
  TextStyleProps &
  ColorProps &
  DisplayProps &
  FlexProps &
  FlexboxProps

export const Form = styled<ComponentType<FormProps>>(FormikForm as any)`
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
`

Form.defaultProps = {
  display: "flex",
  flexDirection: "column",
}
