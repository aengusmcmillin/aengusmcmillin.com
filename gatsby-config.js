const path = require("path");

module.exports = {
  siteMetadata: {
    title: `Aengus McMillin`,
    author: `Aengus McMillin`,
    social: {
      email: `aengusmcmillin@gmail.com`,
      twitter: `@aengusmcmillin`,
    },
    description: ``,
    titleTemplate: ``,
    image: ``,
    url: ``,
    baseUrl: `https://aengusmcmillin.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.ANALYTICS_TRACKING_ID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Aengus McMillin`,
        short_name: `Aengus`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#c95900`,
        icon: `static/icon.png`,
        display: `standalone`,
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: path.join(__dirname, "src", "pages"),
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/templates/default.js"),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1380,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: "560",
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "content/posts/",
        name: "posts",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "content/notes/",
        name: "notes",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "content/brain/",
        name: "brain",
      },
    },
    {
      resolve: "@aengusm/gatsby-theme-brain",
      options: {
        mdxOtherwiseConfigured: true,
      },
    },
  ],
};
