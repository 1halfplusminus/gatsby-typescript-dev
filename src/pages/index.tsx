import React from "react"
import { useBlogPostsQuery } from "../blogs/hooks/useBlogPostsQuery"
import { BlogList } from "../components/blogs/blog-list"
import { Link } from "../components/core/text"
import { Layout } from "../components/page/layout"
import PageTitle from "../components/page/page-title"
import SEO from "../gatsby/seo"

const IndexPage = () => {
  const data = useBlogPostsQuery()
  return (
    <Layout>
      <SEO title="Home" />
      <PageTitle title={<Link href="/">Gatsby Starter Personal Blog</Link>} />
      {data.allMarkdownRemark.edges.map(edge => {
        return (
          <BlogList
            href={edge.node.fields.slug}
            key={edge.node.id}
            excerpt={edge.node.excerpt}
            title={edge.node.frontmatter.title}
            subtitle={edge.node.frontmatter.date}
          />
        )
      })}
    </Layout>
  )
}

export default IndexPage
