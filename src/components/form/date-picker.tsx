import InputAdornment from "@material-ui/core/InputAdornment"
import DateRange from "@material-ui/icons/DateRange"
import { DatePicker } from "@material-ui/pickers"
import css from "@styled-system/css"
import React from "react"
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
  display: flex !important;
  flex: 1;
  height: 45px;

  ${css({
    fontSize: 1,
    color: "primary",
  })}
  .MuiInputBase-root {
    display: flex;
    flex: 1;

  }
  .MuiInput-underline:before, .MuiInput-underline:after {
      content: none;
      display: none;
  }
  .MuiInputBase-input {
    line-height: 1.25;
    flex: 1;
    ${css({
      color: "primary",
    })}
  }
`

StyledDatePicker.defaultProps = {
  format: "MM/dd/yyyy",
  InputProps: {
    endAdornment: (
      <InputAdornment position="start">
        <DateRange />
      </InputAdornment>
    ),
  },
}
