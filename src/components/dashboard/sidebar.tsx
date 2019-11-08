import Drawer from "@material-ui/core/Drawer"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import React, { PropsWithChildren } from "react"
import styled from "styled-components"

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: theme.mixins.toolbar,
  })
)

export const BaseSidebarContent = ({ children }: PropsWithChildren<{}>) => {
  const classes = useStyles({})
  return <div className={classes.toolbar}>{children}</div>
}

export const SidebarContent = styled(BaseSidebarContent)``

export const Sidebar = styled(Drawer)`
  && {
    flex: 1;
  }
  flex-shrink: 0;
  .MuiDrawer-paper {
    position: inherit;
    flex: 1;
  }
`

Sidebar.defaultProps = {
  variant: "permanent",
}
