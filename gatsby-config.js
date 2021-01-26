module.exports = {
  siteMetadata: {
    title: `ござ(ピアノ演奏者)のホームページ`,
    description: `ござの経歴や公式HP(ブログ)、楽譜販売へのリンク等を掲載しています。また最新情報から、Youtubeへ投稿した動画、顔出し生放送の情報をご案内しています。(非公式ページです)`,
    author: `@gatsbyjs`,
    siteUrl: `https://naiwashi.netlify.app/`,
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
    `gatsby-plugin-twitter`,
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
