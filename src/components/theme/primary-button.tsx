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
`
