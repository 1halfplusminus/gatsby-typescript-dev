/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
import React, { ReactChild } from "react"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"
import store from "./src/app/store"
import "./src/styled.d.ts"
import theme from "./src/theme"

export const wrapRootElement = ({ element }: { element: ReactChild }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </Provider>
)
