import { graphql, useStaticQuery } from "gatsby"
import { BlogPostsIndexQuery } from "../../graphqlTypes"

export const useBlogPostsQuery = () => {
  const data = useStaticQuery<BlogPostsIndexQuery>(graphql`
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
  `)
  return data
}
