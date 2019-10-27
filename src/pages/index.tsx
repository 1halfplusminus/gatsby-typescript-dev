import React from "react"
import { Link } from "../components/core/text"
import { Layout } from "../components/page/layout"
import PageTitle from "../components/page/page-title"
import SEO from "../gatsby/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PageTitle title={<Link href="/">Gatsby Starter Personal Blog</Link>} />
  </Layout>
)

export default IndexPage
