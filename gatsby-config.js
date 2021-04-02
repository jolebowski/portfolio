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
          path: `${__dirname}/static/assets/`,
          name: `assets`,
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
            {
              resolve: `gatsby-remark-prismjs`,
              options: {
                classPrefix: "language-",
                inlineCodeMarker: null,
                aliases: {},
                showLineNumbers: false,
                noInlineHighlight: false,
                // By default the HTML entities <>&'" are escaped.
                // Add additional HTML escapes by providing a mapping
                // of HTML entities and their escape value IE: { '}': '&#123;' }
                escapeEntities: {},
              },
            },
          ],
        },
      },
      `gatsby-plugin-transition-link`,
      `gatsby-plugin-netlify-cms`,
      {
        resolve: `gatsby-remark-video`,
        options: {
          pipelines: [
            {
              name: 'vp9',
              transcode: chain =>
                chain
                  .videoCodec('libvpx-vp9')
                  .noAudio()
                  .outputOptions(['-crf 20', '-b:v 0']),
              maxHeight: 480,
              maxWidth: 900,
              fileExtension: 'webm',
            },
            {
              name: 'h264',
              transcode: chain =>
                chain
                  .videoCodec('libx264')
                  .noAudio()
                  .videoBitrate('1000k'),
              maxHeight: 480,
              maxWidth: 900,
              fileExtension: 'mp4',
            },
          ],
        }
      },
    ]
}