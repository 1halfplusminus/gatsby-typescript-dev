/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React, { ReactChild } from "react"
import { ThemeProvider } from "styled-components"
import theme from "./src/theme"

export const wrapRootElement = ({ element }: { element: ReactChild }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
)
