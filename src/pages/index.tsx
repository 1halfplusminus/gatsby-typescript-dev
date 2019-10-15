import { graphql } from "gatsby"
import React from "react"
import { BlogList } from "../components/blogs/blog-list"
import { Link } from "../components/core/text"
import PageTitle from "../components/page/page-title"
import SEO from "../gatsby/seo"
import { BlogPostsIndexQuery } from "../graphqlTypes"
import { styled } from "../theme"

const Layout = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 42rem;
  padding: 2.625rem 1.3125rem;
`

const IndexPage = ({ data }: { data: BlogPostsIndexQuery }) => (
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

export default IndexPage

export const query = graphql`
  query BlogPostsIndex {
    allMarkdownRemark(limit: 1000, sort: { fields: frontmatter___date }) {
      edges {
        node {
          id
          excerpt
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "D MMMM YYYY", locale: "fr")
          }
        }
      }
    }
  }
`
