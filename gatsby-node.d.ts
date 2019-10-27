/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
import { CreateNodeArgs, CreatePagesArgs, CreateWebpackConfigArgs } from "gatsby";
export declare const onCreateNode: ({ node, getNode, actions }: CreateNodeArgs) => void;
export declare const onCreateWebpackConfig: ({ stage, actions, }: CreateWebpackConfigArgs) => void;
export declare const createPages: ({ actions, graphql, reporter, }: CreatePagesArgs) => Promise<void>;
