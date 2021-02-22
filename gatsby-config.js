module.exports = {
  siteMetadata: {
    title: `ござ(ピアノ演奏者)のホームページ ～即興アレンジの天才ござさん～`,
    description: `ござ(ピアノ演奏者)。ござさん本人の公式HP(ブログ)、楽譜販売、Youtubeチャンネル登録、Twitterへのリンク等を掲載しています。また最新情報、投稿動画、顔出しライブ放送の情報をご案内しています。(非公式ページです)都庁等のストリートピアノ動画やジャズ等のアレンジが人気のピアニスト。`,
    author: `naiwashi817`,
    siteUrl: `https://naiwashi.netlify.app/`,
    image: `/static/goza.png`,
    twitterUsername: `@naiwashi817`,
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
