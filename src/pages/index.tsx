import React from "react"
import { Carousel } from "../components/carousel"
import { Header } from "../components/navigations/header"
import { Layout } from "../components/page/layout"
import SEO from "../gatsby/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Carousel />
  </Layout>
)

export default IndexPage
