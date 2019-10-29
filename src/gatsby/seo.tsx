/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"
import { SeoQueryQuery } from "../graphqlTypes"

function SEO({
  description,
  lang,
  meta,
  title,
}: {
  description: string
  lang: string
  meta: Array<{ name: string; content: string }>
  title: string
}) {
  const { site } = useStaticQuery<SeoQueryQuery>(
    graphql`
      query SEOQuery {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site!.siteMetadata!.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      /*       titleTemplate={`%s | ${site!.siteMetadata!.title}`} */
      meta={meta}
    />
  )
}

SEO.defaultProps = {
  lang: `fr`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
