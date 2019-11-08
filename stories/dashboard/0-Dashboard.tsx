import AppBar from "@material-ui/core/AppBar"
import Divider from "@material-ui/core/Divider"
import IconButton from "@material-ui/core/IconButton"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import DashboardIcon from "@material-ui/icons/Dashboard"
import DateRangeIcon from "@material-ui/icons/DateRange"
import MenuIcon from "@material-ui/icons/Menu"
import { storiesOf } from "@storybook/react"
import React from "react"
import styled from "styled-components"
import { Box, FlexRow } from "../../src/components/core/box"
import {
  BodyWrapper,
  HeaderWrapper,
  MainWrapper,
  SidebarMainLayout,
  SidebarWrapper,
} from "../../src/components/dashboard/layouts/main"
import { Sidebar, SidebarContent } from "../../src/components/dashboard/sidebar"
import { Context } from "../../src/containers/context"

const stories = storiesOf("Dashboard", module)

const AppbarTitle = styled(Typography)`
  flex-grow: 1;
`
const ListItemIconEnd = styled(ListItemIcon)`
  justify-content: flex-end;
`

const usePopupState = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return {
    anchorEl,
    open,
    handleClick,
    handleClose,
  }
}

const DashboardMenu = () => {
  const { handleClick, handleClose, anchorEl, open } = usePopupState()
  return (
    <>
      <ListItem
        onClick={handleClick}
        button={true}
        key={"reservation"}
        aria-controls="fade-menu"
        aria-haspopup="true"
      >
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary={"Reservation"} />
        <ListItemIconEnd>
          <ChevronRightIcon />
        </ListItemIconEnd>
      </ListItem>
      <Menu
        anchorEl={anchorEl}
        keepMounted={true}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClose}>Prochaines réservations</MenuItem>
        <MenuItem onClick={handleClose}>Réservations en attente</MenuItem>
      </Menu>
    </>
  )
}
const AvailabilityMenu = () => {
  return (
    <>
      <ListItem button={true} key={"availaility"}>
        <ListItemIcon>
          <DateRangeIcon />
        </ListItemIcon>
        <ListItemText primary={"Disponibilité"} />
      </ListItem>
    </>
  )
}
stories.addDecorator(story => (
  <Context>
    <FlexRow height="100vh" flex={1} backgroundColor="red">
      {story()}
    </FlexRow>
  </Context>
))
stories.add("Dasboard layout", () => (
  <SidebarMainLayout backgroundColor="indigo">
    <HeaderWrapper backgroundColor="black">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <AppbarTitle variant="h6">Eden</AppbarTitle>
        </Toolbar>
      </AppBar>
    </HeaderWrapper>
    <MainWrapper>
      <SidebarWrapper backgroundColor="yellow">
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
      <BodyWrapper backgroundColor="orange">
        <Box backgroundColor="white" flex={1} />
      </BodyWrapper>
    </MainWrapper>
  </SidebarMainLayout>
))
