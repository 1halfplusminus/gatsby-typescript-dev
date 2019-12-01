/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
// gatsby-ssr.js
import React, { ReactChild } from "react"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"
import store from "./src/app/store"
import theme from "./src/theme"

export const wrapRootElement = ({ element }: { element: ReactChild }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>{element}</ThemeProvider>
  </Provider>
)
