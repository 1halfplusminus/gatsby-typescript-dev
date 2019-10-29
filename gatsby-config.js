module.exports = {
  siteMetadata: {
    title: "",
    description: "",
    author: "",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    /*     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    }, */
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kikoo.nc`,
        short_name: `kikoonc`,
        start_url: `/`,
        background_color: `#FF5722`,
        theme_color: `#F44336`,
        display: `minimal-ui`,
        icon: `static/icon.png`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Merriweather:Black", "Montserrat:Regular"],
        },
      },
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-remark`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
