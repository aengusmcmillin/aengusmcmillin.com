module.exports = {
  siteMetadata: {
    title: `Aengus McMillin`,
    author: `Aengus McMillin`,
    social: {
      email: `aengusmcmillin@gmail.com`,
      twitter: `@aengusmcmillin`
    }
  },
  plugins: [
    "gatsby-theme-aengus-blog",
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.ANALYTICS_TRACKING_ID,
      }
    }
  ]
};