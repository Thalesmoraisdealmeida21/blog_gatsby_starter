module.exports = {
  siteMetadata: {
    title: `Meu Blog com gatsby`,
    description: `Este é um pequeno blog contruído com gatsby para aprendizado`,
    author: `@thales.morais21`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/`,
      },
    },
    "gatsby-plugin-netlify-cms",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {

        color: `tomato`,

        showSpinner: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-offline`,
  ],
}
