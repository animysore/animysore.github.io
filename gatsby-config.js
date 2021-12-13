module.exports = {
  siteMetadata: {
    title: `My Website`,
    author: `Aniruddha Mysore`,
    description: `I work at Microsoft Research, where I am building tools to improve cloud reliability .`,
    siteUrl: `https://animysore.com/`,
    social: {
      twitter: `https://twitter.com/ani_mysore`,
      linkedin: `https://linkedin.com/in/animysore`,
      github: `https://github.com/animysore`,
      scholar: `https://scholar.google.com/citations?user=wVlafasAAAAJ&hl=en`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/sections`,
        name: `portfolio`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-5TKDEL3XKY", // Google Analytics / GA
        ]
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`
  ],
}
