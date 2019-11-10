import { Typography } from "@material-ui/core"
import MuiAppBar from "@material-ui/core/AppBar"
import IconButton from "@material-ui/core/IconButton"
import Toolbar from "@material-ui/core/Toolbar"
import MenuIcon from "@material-ui/icons/Menu"
import React from "react"
import styled from "styled-components"

const AppbarTitle = styled(Typography)`
  flex-grow: 1;
`

export const AppBar = () => {
  return (
    <MuiAppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <AppbarTitle variant="h6">Eden</AppbarTitle>
      </Toolbar>
    </MuiAppBar>
  )
}
