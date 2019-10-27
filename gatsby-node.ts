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
import "./src/index.d.ts"

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
  return
}
