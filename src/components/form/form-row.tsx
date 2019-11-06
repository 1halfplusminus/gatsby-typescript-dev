import css from "@styled-system/css"
import styled from "styled-components"
import { BoxRow } from "../core/box"

export const FormRow = styled(BoxRow)`
  ${css({
    paddingTop: 1,
    paddingBottom: 1,
    paddingLeft: 1,
    paddingRight: 1,
    marginBottom: 1,
  })}
`
