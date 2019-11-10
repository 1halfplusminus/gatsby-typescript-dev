import css from "@styled-system/css"
import styled from "styled-components"
import { Box, FlexRow } from "../../core/box"

export const SidebarMainLayout = styled(Box)`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const HeaderWrapper = styled(Box)`
  flex-basis: 10%;
`

export const MainWrapper = styled(FlexRow)`
  flex: 1;
`

export const SidebarWrapper = styled(Box)`
  display: flex;
  ${css({
    flexBasis: ["20%", "15%"],
  })}
`

export const BodyWrapper = styled(Box)`
  flex: 1;
  display: flex;
  justify-content: center;
`
export const BodyContentWrapper = styled(Box)`
  flex: 1;
  display: flex;
  justify-content: center;
  ${css({
    padding: [2, 4, 6],
  })}
`
