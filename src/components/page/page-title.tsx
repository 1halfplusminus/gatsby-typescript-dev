import React, { ReactNode } from "react"
import { Title1 } from "../core/title"

export interface PageTitleProps {
  title: ReactNode
}

export const PageTitle = ({ title }: PageTitleProps) => (
  <header>
    <Title1 color="test" fontFamily="sans-serif">
      {title}
    </Title1>
  </header>
)

export default PageTitle
