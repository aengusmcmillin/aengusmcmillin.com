const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Aengus McMillin`,
    author: `Aengus McMillin`,
    social: {
      email: `aengusmcmillin@gmail.com`,
      twitter: `@aengusmcmillin`
    },
    description: ``,
    titleTemplate: ``,
    image: ``,
    url: ``
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.ANALYTICS_TRACKING_ID
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: path.join(__dirname, "src", "pages")
      }
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/templates/default.js")
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1380,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "content/",
        name: "content"
      }
    }
  ]
};