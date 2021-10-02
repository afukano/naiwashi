module.exports = {
  siteMetadata: {
    title: `ござ(ピアノ演奏者)の非公式ホームページ ～即興ピアノアレンジの天才ござさん～`,
    description: `ピアノ演奏者「ござ」の非公式HP(ファンサイト)。プロフィール、最新情報、メンバーシップについて、各種リンク(ござのHP、楽譜、過去の音源等)等を掲載しています。他にも過去のライブ配信を視聴する際に役立つアーカイブ案内所やTwitterのまとめ等ファンのためになる情報も掲載しています。`,
    author: `naiwashi817`,
    siteUrl: `https://naiwashi.netlify.app/`,
    image: `/static/goza.png`,
    twitterUsername: `@naiwashi817`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // trackingId: "process.env.GOOGLE_ANALYTICS_ID",
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
        head: true,
      },
    },
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
        background_color: `rgb(115, 163, 39)`,
        theme_color: `rgb(115, 163, 39)`,
        display: `minimal-ui`,
        icon: `src/images/goza.png`,
      },
    },
    `gatsby-plugin-twitter`,
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
