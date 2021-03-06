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
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-transition-link`
    ]
}