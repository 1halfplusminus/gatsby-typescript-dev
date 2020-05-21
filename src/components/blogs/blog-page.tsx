import React, { PropsWithChildren } from "react"
import { Title3 } from "../core/title"

export interface BlogPageProps {
  title: string
  subtitle: string
  excerpt: string
}

export const BlogPage = ({ title, subtitle, excerpt }: BlogPageProps) => {
  return <BlogPage.Wrapper />
}
BlogPage.Wrapper = ({ children }: PropsWithChildren<{}>) => {
  return <>{children}</>
}
BlogPage.PageTitle = ({ title }: { title: string }) => {
  return <Title3>{title} </Title3>
}
