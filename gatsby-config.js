module.exports = {
    siteMetadata: {
    title: "Jordan Portfolio",
    description: "This is Jordan Moreira Portfolio Site",
    author: "@jolebowski",
    twitterUsername: "@iamjomoreira",
    image: "/twitter-img.png",
  },
    plugins: [
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
          name: `content`,
          path: `${__dirname}/src/content/posts`,
        },
      },
      `gatsby-plugin-image`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-transition-link`,
      'gatsby-plugin-theme-ui',
      `gatsby-plugin-netlify-cms`
    ]
}