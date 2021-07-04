import React from "react"

import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Twitterまとめ" />
    <h2>ござのTwitterまとめ</h2>
    <p>
      ござのTwitterアカウントは2010年に作成されている。<br/>
      そのためTweetの量も多く過去のTweetを見るのも大変である。<br/>
      そこで、ござのTweetから「Twitterのみの音源」「楽譜」「イベント参加」を中心にモーメントにまとめた。<br/>
      以下のリンクは新しい情報順に並べた。<br/>
      <ul class="tag">
        <li><OutboundLink href="https://twitter.com/i/events/1411590457465839616" target="_blank" rel="noopener">ござ　Twitterまとめ③</OutboundLink></li>
        <li><OutboundLink href="https://twitter.com/i/events/1411215056713379846" target="_blank" rel="noopener">ござ　Twitterまとめ②</OutboundLink></li>
        <li><OutboundLink href="https://twitter.com/i/events/1410827112202661890" target="_blank" rel="noopener">ござ　Twitterまとめ①</OutboundLink></li>
      </ul>
    </p>
  </Layout>
)

export default IndexPage
