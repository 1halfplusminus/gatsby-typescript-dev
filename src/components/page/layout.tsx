import React, { PropsWithChildren } from "react"
import Helmet from "react-helmet"
import styled from "styled-components"
const StyledLayout = styled.div`
  margin-left: auto;
  margin-right: auto;
`

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <StyledLayout>
      <Helmet>
        <style type="text/css">{`
            body, html {
              height: 100%;
              font-family: "Merriweather Black", sans-serif;
              margin: 0;
            }
        `}</style>
      </Helmet>
      {children}
    </StyledLayout>
  )
}
