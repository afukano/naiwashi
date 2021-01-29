import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Twitter投稿動画" />
    <h2>Twitterのみの投稿動画</h2>
    <p>
      <blockquote class="twitter-tweet">
        <p lang="ja" dir="ltr">
          うっせえわを、うっさくなく弾いてみました。 
          <a href="https://t.co/hQfWJKUkOa">pic.twitter.com/hQfWJKUkOa</a>
        </p>
        &mdash; ござ 🎹 (@gprza) 
        <a href="https://twitter.com/gprza/status/1351795333873864705?ref_src=twsrc%5Etfw">January 20, 2021</a>
      </blockquote>
    </p>
    <p>
      <blockquote class="twitter-tweet">
        <p lang="ja" dir="ltr">
          そろそろ降雪の季節ですねということで、ポケモンダイヤモンド・パールより、216番道路(画面酔い注意) 
          <a href="https://t.co/EhBfZPHdpK">pic.twitter.com/EhBfZPHdpK</a>
        </p>
        &mdash; ござ 🎹 (@gprza) 
        <a href="https://twitter.com/gprza/status/1348528577659113474?ref_src=twsrc%5Etfw">January 11, 2021</a>
      </blockquote>
    </p>
    <p>
      <blockquote class="twitter-tweet">
        <p lang="ja" dir="ltr">VR視点でよく分かるショパン木枯らし(ノンペダル) 
          <a href="https://t.co/qIfzArvV1x">pic.twitter.com/qIfzArvV1x</a>
        </p>
        &mdash; ござ 🎹 (@gprza) 
        <a href="https://twitter.com/gprza/status/1329975652250910720?ref_src=twsrc%5Etfw">November 21, 2020</a>
      </blockquote>
    </p>
    <p>
      <blockquote class="twitter-tweet">
        <p lang="ja" dir="ltr">
          VR技術で体験するショパン視点です。<br/>
          ※画面酔い注意 
          <a href="https://t.co/2KLC65Qqmc">pic.twitter.com/2KLC65Qqmc</a>
        </p>
        &mdash; ござ 🎹 (@gprza) 
        <a href="https://twitter.com/gprza/status/1329361683739856896?ref_src=twsrc%5Etfw">November 19, 2020</a>
      </blockquote>
    </p>
  </Layout>
)

export default IndexPage
