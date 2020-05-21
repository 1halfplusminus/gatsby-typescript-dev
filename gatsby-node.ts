/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
import {
  CreateNodeArgs,
  CreatePagesArgs,
  CreateWebpackConfigArgs,
} from "gatsby"
import { createFilePath } from "gatsby-source-filesystem"
import path from "path"
import { Query } from "./src/graphqlTypes"

console.log("onCreateNode")
export const onCreateNode = ({ node, getNode, actions }: CreateNodeArgs) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}
export const onCreateWebpackConfig = ({
  stage,
  actions,
}: CreateWebpackConfigArgs) => {
  if (stage.startsWith("develop")) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          "react-dom": "@hot-loader/react-dom",
        },
      },
    })
  }
}
export const createPages = async ({
  actions,
  graphql,
  reporter,
}: CreatePagesArgs) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/pages/template-blog.tsx`)
  const result = await graphql<Pick<Query, "allMarkdownRemark">>(`
    query allMarkdownPages {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  if (result.data) {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const id = node.id
      if (node.fields && node.fields.slug) {
        createPage({
          path: node.fields.slug,
          component: blogPostTemplate,
          context: {
            id,
          }, // additional data can be passed via context
        })
      }
    })
  }
}
