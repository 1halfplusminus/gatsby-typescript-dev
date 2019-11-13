import Divider from "@material-ui/core/Divider"
import List from "@material-ui/core/List"
import { storiesOf } from "@storybook/react"
import startOfDay from "date-fns/startOfDay"
import React from "react"
import { useCalendar, useDatedItem } from "../../src/components/calendar"
import { CalendarHeader } from "../../src/components/calendar/calendar-header"
import { CalendarWeeks } from "../../src/components/calendar/calendar-week"
import { Box, FlexRow } from "../../src/components/core/box"
import { AppBar } from "../../src/components/dashboard/appbar"
import { DisponibilityCalendarDayBox } from "../../src/components/dashboard/disponibility/calendar-week-box"
import {
  BodyContentWrapper,
  BodyWrapper,
  HeaderWrapper,
  MainWrapper,
  SidebarMainLayout,
  SidebarWrapper,
} from "../../src/components/dashboard/layouts/main"
import { AvailabilityMenu, DashboardMenu } from "../../src/components/dashboard/menu/dashboard"
import { Sidebar, SidebarContent } from "../../src/components/dashboard/sidebar"
import { DatePickerButton } from "../../src/components/form/date-picker"
import { Context } from "../../src/containers/context"

const stories = storiesOf("Dashboard", module)

stories.addDecorator(story => (
  <Context>
    <FlexRow height="100vh" flex={1}>
      {story()}
    </FlexRow>
  </Context>
))
stories.add("Dasboard layout", () => (
  <SidebarMainLayout>
    <HeaderWrapper>
      <AppBar />
    </HeaderWrapper>
    <MainWrapper>
      <SidebarWrapper>
        <Sidebar>
          <SidebarContent>
            <List>
              <DashboardMenu />
              <AvailabilityMenu />
            </List>
            <Divider />
          </SidebarContent>
        </Sidebar>
      </SidebarWrapper>
      <BodyWrapper>
        <BodyContentWrapper>
          <Box backgroundColor="white" flex={1} />
        </BodyContentWrapper>
      </BodyWrapper>
    </MainWrapper>
  </SidebarMainLayout>
))
stories.add("Dasboard disponibilité", () => {
  const items = [
    { date: new Date(), available: true, holiday: false, reservation: 5, editable: true },
  ]
  const { month, onMonthChange, onDayChange, day } = useCalendar()
  const renderDatedItem = useDatedItem({
    items,
    dateExtractor: i => startOfDay(i.date),
    renderItem: i => (
      <DisponibilityCalendarDayBox
        {...i}
        onDisponibilityChange={disponibility => {
        }}
      />
    ),
  })
  return (
    <Box flex={1}>
      <DatePickerButton value={day} onChange={onDayChange} />
      <Context>
        <CalendarHeader date={month} onMonthChange={onMonthChange} />
        <CalendarWeeks date={month} renderDay={renderDatedItem} />
      </Context>
    </Box>
  )
})
