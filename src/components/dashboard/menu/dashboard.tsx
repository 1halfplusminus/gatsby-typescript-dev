import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import DashboardIcon from "@material-ui/icons/Dashboard"
import DateRangeIcon from "@material-ui/icons/DateRange"
import React from "react"
import styled from "styled-components"
import { usePopupState } from "."

const ListItemIconEnd = styled(ListItemIcon)`
  justify-content: flex-end;
`

export const AvailabilityMenu = () => {
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

export const DashboardMenu = () => {
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
