import startOfMonth from "date-fns/startOfMonth"
import keyBy from "lodash/keyBy"
import { ReactNode, useState } from "react"

export const useCalendar = ({ date: defaultDate }: { date: Date } = { date: new Date() }) => {
  const [month, setMonth] = useState(defaultDate)
  const [day, setDay] = useState(defaultDate)

  return {
    day,
    month,
    onMonthChange: ({ date: newDate }: { date: Date }) => setMonth(newDate),
    onDayChange: ({ date: newDate }: { date: Date }) => {
      setMonth(startOfMonth(newDate))
      setDay(newDate)
    },
  }
}

export function useDatedItem<T>({
  items,
  dateExtractor,
  renderItem,
  dateKeyExtractor = date => date.toISOString(),
}: {
  items: T[]
  dateExtractor: (item: T) => Date
  renderItem: (item: T) => ReactNode
  dateKeyExtractor?: (date: Date) => string
}) {
  const keyedItem = keyBy(items, i => dateKeyExtractor(dateExtractor(i)))
  return (date: Date) => {
    const item = keyedItem[dateKeyExtractor(date)]
    return item ? renderItem(item) : undefined
  }
}
