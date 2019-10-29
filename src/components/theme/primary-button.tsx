import css from "@styled-system/css"
import styled from "styled-components"
import Button from "../core/button"

export const PrimaryButton = styled(Button)`
  transition: all 0.5s ease;
  font-weight: 500;
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.15);
  border: 1px solid transparent;
  line-height: 1.5;
  border-radius: 0.25rem;
  text-align: center;
  vertical-align: middle;
  ${css({
    fontSize: [2],
    backgroundColor: "primary",
    color: "white",
    paddingLeft: 3,
    paddingRight: 3,
    paddingTop: 2,
    paddingBottom: 2,
  })}
  :hover {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
      0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
    ${css({
      backgroundColor: "primaries",
    })}
  }
`
