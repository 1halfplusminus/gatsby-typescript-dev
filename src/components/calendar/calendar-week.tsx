import { useUtils } from "@material-ui/pickers"
import { MaterialUiPickersDate } from "@material-ui/pickers/typings/date"
import css from "@styled-system/css"
import getWeek from "date-fns/getWeek"
import React, { ReactNode } from "react"
import styled from "styled-components"
import { Box } from "../core/box"

export interface CalendarWeeksProps {
  date: Date
  renderDay: (day: Date) => ReactNode
}
export const CalendarWeekBox = styled(Box)`
  min-height: 117px;
  font-size: 12px;
  background-color: #e7e7e7;
  border: solid 1px #c0c0c0;
  ${css({
    flexBasis: "12.5%",
    marginBottom: [1],
    marginLeft: [1],
  })}
  display: flex;
`

const CalendarWeekBoxEmpty = styled(CalendarWeekBox)`
  border: solid 1px transparent;
  background-color: transparent;
`
const useCalendarWeeks = ({ date }: { date: Date }) => {
  const utils = useUtils()
  const isInMonth = (dateMaybeInMonth: Date) =>
    utils.getMonth(dateMaybeInMonth) === utils.getMonth(date)
  const weeks = utils
    .getWeekArray(utils.startOfMonth(date))
    .map(dates => dates.map(weekDate => (isInMonth(weekDate!) ? weekDate : null)))
  return {
    weeks,
    getWeekNumberString: (toGet: Date) => {
      return getWeek(toGet).toString()
    },
  }
}
export const CalendarWeeksRow = styled(Box)`
  display: flex;
  flex-direction: row;
  flex: 1;
`

export interface CalendarFirstWeekItemProps {
  weekNumber: string
}

export const CalendarFirstWeekItem = ({ weekNumber }: CalendarFirstWeekItemProps) => {
  return (
    <CalendarWeekBox display="flex" justifyContent="center" alignItems="center">
      Semaine #{weekNumber}
    </CalendarWeekBox>
  )
}

export const CalendarWeeks = ({ date, renderDay }: CalendarWeeksProps) => {
  const { getWeekNumberString, weeks } = useCalendarWeeks({ date })
  const renderWeekItem = (dayDate: MaterialUiPickersDate, index: number) => {
    return dayDate ? (
      <CalendarWeekBox key={index}>{renderDay(dayDate)}</CalendarWeekBox>
    ) : (
      <CalendarWeekBoxEmpty />
    )
  }
  const renderRow = (days: MaterialUiPickersDate[], index: number) => {
    return (
      <CalendarWeeksRow key={index}>
        <CalendarFirstWeekItem weekNumber={getWeekNumberString(days.find(e => e !== null)!)} />
        {days.map(renderWeekItem)}
      </CalendarWeeksRow>
    )
  }
  return <>{weeks.map(renderRow)}</>
}

CalendarWeeks.defaultProps = {
  date: new Date(),
  renderDay: () => undefined,
}
