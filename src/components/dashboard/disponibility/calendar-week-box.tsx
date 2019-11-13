import css from "@styled-system/css"
import getDate from "date-fns/getDate"
import React, { useMemo } from "react"
import styled from "styled-components"
import { Box } from "../../core/box"

export interface DisponibilityCalendarDayBoxProps {
  date: Date
  reservation: number
  available: boolean
  holiday: boolean
  editable: boolean
  onDisponibilityChange: (dispo: boolean) => void
}
type WrapperProps = Pick<DisponibilityCalendarDayBoxProps, "available">

const DisponibilityCalendarDayBoxWrapper = styled(Box)<WrapperProps>`
  display: flex;
  justify-content: center;
  flex: 1;
  flex-direction: column;
  ${({ available }) =>
    css({
      backgroundColor: available ? "green" : "coral",
      paddingX: [1],
      paddingY: [2],
    })}
`
const Row = styled(Box)`
  flex-direction: row;
  flex: 1;
  ${css({
    padding: [1],
    fontSize: 1,
  })}
`
const RowBold = styled(Row)`
  font-weight: bold;
`
const booleanToString = (bool: boolean) => {
  return bool === true ? "Oui" : "Non"
}

type DisponibilitySelectProps = Pick<DisponibilityCalendarDayBoxProps, "onDisponibilityChange">

const DisponibilitySelect = ({ onDisponibilityChange }: DisponibilitySelectProps) => (
  <select
    onChange={e => {
      onDisponibilityChange(e.target.value === "1" ? true : false)
    }}
  >
    <option value={1}> Oui </option>
    <option value={0}> Non</option>
  </select>
)

export const DisponibilityCalendarDayBox = ({
  date,
  reservation,
  holiday,
  available,
  editable,
  onDisponibilityChange,
}: DisponibilityCalendarDayBoxProps) => {
  const day = useMemo(() => getDate(date), [date])
  return (
    <DisponibilityCalendarDayBoxWrapper available={!holiday && available}>
      <RowBold> {day}</RowBold>
      <Row> Réservé: {reservation}</Row>
      <Row> Vacances: {booleanToString(holiday)}</Row>
      {editable ? (
        <>
          <RowBold>Disponible: </RowBold>
          <DisponibilitySelect onDisponibilityChange={onDisponibilityChange} />
        </>
      ) : (
        <RowBold> Disponible: {booleanToString(available)}</RowBold>
      )}
    </DisponibilityCalendarDayBoxWrapper>
  )
}
