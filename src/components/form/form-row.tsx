import css from "@styled-system/css"
import styled from "styled-components"
import { BoxRow } from "../core/box"

export const FormRow = styled(BoxRow)`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  align-content: center;
  ${css({
    paddingTop: 2,
    paddingBottom: 1,
    paddingLeft: 1,
    paddingRight: 1,
    marginBottom: 2,
  })}
`
