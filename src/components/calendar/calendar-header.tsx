import { IconButton } from "@material-ui/core"
import ArrowLeft from "@material-ui/icons/ArrowLeft"
import ArrowRight from "@material-ui/icons/ArrowRight"
import { useUtils } from "@material-ui/pickers"
import { SlideDirection } from "@material-ui/pickers/views/Calendar/SlideTransition"
import css from "@styled-system/css"
import eachDayOfInterval from "date-fns/eachDayOfInterval"
import endOfWeek from "date-fns/endOfWeek"
import startOfWeek from "date-fns/startOfWeek"
import React, { useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import { Box } from "../core/box"

const LeftIcon = styled(ArrowLeft)``
const RightIcon = styled(ArrowRight)``

const CalendarHeaderWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
`
const CalendarHeaderTitle = styled(Box)`
  display: inline-flex;
  flex: 0.2;
  justify-content: center;
  text-transform: capitalize;
`
export const CalendarWeekDay = styled(Box)`
  display: flex;
  font-weight: bold;
  height: 27px;
  text-align: center;
  background-color: #e7e7e7;
  border: solid 1px #c0c0c0;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  ${css({
    flexBasis: "12.5%",
    marginBottom: [1],
    marginLeft: [1],
  })}
`

const CalenderMonthsWrapper = styled(Box)`
  flex-direction: row;
`
const CalenderDayOfWeekWrapper = styled(Box)`
  display: flex;
`

export type SlideDirection = "left" | "right"

const useCalendarHeaderState = ({
  date,
  onMonthChange: onMonthChangeCallback,
}: Pick<CalendarHeaderProps, "date" | "onMonthChange">) => {
  const utils = useUtils()

  const [selectedMonth, setSelectedMonth] = useState(date)
  const monthText = useMemo(
    () => utils.getMonthText(selectedMonth) + " " + utils.getYear(selectedMonth),
    [selectedMonth, date]
  )
  const onMonthChange = ({
    date: currentDate,
    direction,
  }: {
    date: Date
    direction: SlideDirection
  }) => () => {
    const nextMonth =
      direction === "left" ? utils.getPreviousMonth(currentDate) : utils.getNextMonth(currentDate)
    if (nextMonth) {
      setSelectedMonth(nextMonth)
      onMonthChangeCallback({ date: nextMonth })
    }
  }
  const weekDays = () => {
    return eachDayOfInterval({
      start: startOfWeek(selectedMonth, { locale: utils.locale }),
      end: endOfWeek(selectedMonth, { locale: utils.locale }),
    }).map(day => utils.format(day, "EEEE"))
  }
  useEffect(() => {
    setSelectedMonth(date)
  }, [date])
  return {
    monthText,
    selectedMonth,
    onMonthChange,
    weekDays,
  }
}

export interface CalendarHeaderProps {
  date: Date
  onMonthChange: ({ date }: { date: Date }) => void
}

export const CalendarHeader = ({ date, onMonthChange }: CalendarHeaderProps) => {
  const { monthText, onMonthChange: monthChange, selectedMonth, weekDays } = useCalendarHeaderState(
    { date, onMonthChange }
  )
  return (
    <CalendarHeaderWrapper>
      <CalenderMonthsWrapper>
        <IconButton onClick={monthChange({ date: selectedMonth, direction: "left" })}>
          <LeftIcon />
        </IconButton>
        <CalendarHeaderTitle>{monthText}</CalendarHeaderTitle>
        <IconButton onClick={monthChange({ date: selectedMonth, direction: "right" })}>
          <RightIcon />
        </IconButton>
      </CalenderMonthsWrapper>
      <CalenderDayOfWeekWrapper>
        <CalendarWeekDay />
        {weekDays().map((day, index) => (
          <CalendarWeekDay key={index}>{day}</CalendarWeekDay>
        ))}
      </CalenderDayOfWeekWrapper>
    </CalendarHeaderWrapper>
  )
}

CalendarHeader.defaultProps = {
  date: new Date(),
  onMonthChange: () => {
    return
  },
}
