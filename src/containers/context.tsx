import DateFnsUtils from "@date-io/date-fns"
import { MuiPickersUtilsProvider } from "@material-ui/pickers"
import fr from "date-fns/locale/fr"
import React, { PropsWithChildren } from "react"
import { ThemeProvider } from "styled-components"
import theme from "../theme"

export const Context = ({ children }: PropsWithChildren<{}>) => (
  <>
    <ThemeProvider theme={theme}>
      <MuiPickersUtilsProvider locale={fr} utils={DateFnsUtils}>
        {children}
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  </>
)
