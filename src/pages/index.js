import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2>プロフィール</h2>
    <p>
      Youtubeを中心に活躍するピアノ演奏者「ござ」の非公式ページ。<br/>
      クラシック、ポップス、Jazz、サブカル系(アニソン、ゲーム曲、ボカロ)等、幅広いレパートリー。<br/>
      即興でおこなうラテン風、ボサノバ風、Jazz風等へのアレンジが持ち味。<br/>
      不定期ではあるが、Youtube生配信で即興演奏を披露する。<br/>
      Youtubeで活動する以前は<Link to="https://www.nicovideo.jp/user/3359408">ニコニコ動画</Link>にて「あんだば先生」と呼ばれていた。<br/>
      <br/>
      <Link to="https://www.ymm.co.jp/magazine/piano/">月刊ピアノ</Link>にて「ござさんの All that Goza's Piano Arrange」を連載中。<br/>
      編曲した楽譜も販売中。(<Link to="https://mucome.net/profile?id=2690">販売サイトはこちら</Link>)<br/>
      <br/>
      <a href="https://www.youtube.com/channel/UC2Kb6k-aGIaKxlNPkrdcoHA">Youtubeチャンネルはこちら</a><br/>
      <br/>
      <a href="https://twitter.com/gprza" target="_blank">Twitterはこちら</a><br/>
    </p>
    <h2>本人による自己紹介</h2>
    <blockquote class="twitter-tweet">
      <p lang="ja" dir="ltr">
        またフォロワーさんが増えたので自己紹介<br/>
        <br/>
        ・ピアノ教室でクラシック12年<br/>
        ・中学高校で吹奏楽（エンジョイ勢）6年（クラリネットとユーフォニアム）<br/>
        ・大学でビッグバンド3年（ピアノ）<br/>
        ・配信でアニソンなどサブカル系9年<br/>
        ・子供の頃から練習の合間にポップスをちょろちょろ<br/>
        <br/>
        みたいな音楽歴です☺️☺️
      </p>
      &mdash; ござ 🎹 (@gprza) 
      <a href="https://twitter.com/gprza/status/1091724201847795712?ref_src=twsrc%5Etfw">
        February 2, 2019
      </a>
    </blockquote>
    <h2>Youtubeチャンネル紹介動画</h2>
    <p><iframe width="501" height="282" src="https://www.youtube.com/embed/FsIOsWyjz7U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
    <h2>書籍/出版物</h2>
    <p>
      <ul>
        <li>
          「総再生数1億回超え！ネットピアニストたちの動画を楽譜にしてみた結果・・・！？」ヤマハミュージックメディア(2020年1月24日発売)<br/>
          <Link to="https://www.ymm.co.jp/feature/netpianists.php">詳細はこちら</Link>
        </li>
        <li>
        「月刊ピアノ」アレンジ講座連載(2020年1月号～現在)
        </li>
        <li>
        「月刊ショパン」 2021年2月号ござ×菊池亮太対談掲載
        </li>
        <li>
        「月刊ショパン」 2021年1月号ござ×ハラミちゃん対談掲載
        </li>
      </ul>
    </p>
  </Layout>
)

export default IndexPage
