import css from "@styled-system/css"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker-cssmodules.css"
import styled from "styled-components"
import {
  color,
  ColorProps,
  display,
  DisplayProps,
  flex,
  flexbox,
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

export type StyledDatePickerProps = FontSizeProps &
  SpaceProps &
  FontWeightProps &
  LineHeightProps &
  MarginProps &
  TextAlignProps &
  TextStyleProps &
  ColorProps &
  DisplayProps

export const StyledDatePicker = styled(DatePicker)<StyledDatePickerProps>`
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
  border-radius: 0px;
  color: #753373;
  font-weight: bold;
  height: 50px !important;
  border: none;
  font-size: 20px;
  border-right: 2px solid #eaeaea;
  padding: 0rem 0.75rem;
  line-height: 1.25;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  ${css({
    fontSize: 1,
    color: "primary",
    backgroundColor: "white",
  })}
`
