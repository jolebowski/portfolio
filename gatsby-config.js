const netlifyCmsPaths = {
  resolve: `gatsby-plugin-netlify-cms-paths`,
  options: {
    cmsConfig: `/static/admin/config.yml`,
  },
}
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
          path: `${__dirname}/src/content`,
        },
      },
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          gfm: true,
          plugins: [
            netlifyCmsPaths,
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1024,
                showCaptions: true,
                linkImagesToOriginal: false,
                tracedSVG: true,
                loading: "lazy",
              },
            },
            `gatsby-remark-responsive-iframe`,
          ],
        },
      },
      `gatsby-plugin-transition-link`,
      'gatsby-plugin-theme-ui',
      `gatsby-plugin-netlify-cms`
    ]
}