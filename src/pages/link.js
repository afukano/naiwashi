import React from "react"
import { Link } from "gatsby"

import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="リンク" />
    <h2>リンク</h2>
    <h3>ござ</h3>
    <p>
      <ul class="tag">
        <li><OutboundLink href="https://goza.jp/" target="_blank" rel="noopener">オフィシャルサイト</OutboundLink></li>
        <li><OutboundLink href="https://gozapiano.com/" target="_blank" rel="noopener">公式ホームページ(ブログ)</OutboundLink></li>
        <li><OutboundLink href="https://www.youtube.com/channel/UC2Kb6k-aGIaKxlNPkrdcoHA" target="_blank" rel="noopener">Youtubeチャンネル</OutboundLink></li>        
        <li><OutboundLink href="https://twitter.com/gprza" target="_blank" rel="noopener">Twitter</OutboundLink></li>
        <li><OutboundLink href="https://twitcasting.tv/gprza/" target="_blank" rel="noopener">ツイキャス</OutboundLink></li>
        <li><OutboundLink href="https://www.nicovideo.jp/user/3359408" target="_blank" rel="noopener">ニコニコ動画</OutboundLink></li>
      </ul>
    </p>
    <h3>ござのまとめ</h3>
    <p>
      <ul class="tag">
        <li><OutboundLink href="https://ja.wikipedia.org/wiki/%E3%81%94%E3%81%96_(%E3%83%94%E3%82%A2%E3%83%8B%E3%82%B9%E3%83%88)" target="_blank" rel="noopener">Wikipedia</OutboundLink></li>
        <li><OutboundLink href="https://spice.eplus.jp/featured/0000142460/articles" target="_blank" rel="noopener">ござのニュース記事(SPICE)</OutboundLink></li>
        <li><OutboundLink href="https://www.youtube.com/playlist?list=PLTjfre1_Qtf9z-H451reX99lvQzeGCSKx" target="_blank" rel="noopener">ストリートピアノ再生リスト(YouTube)</OutboundLink></li>
        <li><OutboundLink href="https://www.youtube.com/playlist?list=PLTjfre1_Qtf-G1CMKyUrfisZI03Z0Ke_v" target="_blank" rel="noopener">他チャンネル出演再生リスト(YouTube)</OutboundLink></li>
        <li><OutboundLink href="https://www.nicovideo.jp/user/3359408/video?sortKey=viewCount&sortOrder=desc" target="_blank" rel="noopener">ござの投稿動画(ニコニコ動画)</OutboundLink></li>
        <li><OutboundLink href="https://www.nicovideo.jp/my/mylist/71272433" target="_blank" rel="noopener">ござ以外が投稿した関連動画(ニコニコ動画)</OutboundLink></li>
        <li><OutboundLink href="https://twitter.com/i/events/1416121013348102144" target="_blank" rel="noopener">ござ　Twitterまとめ④</OutboundLink></li>
        <li><OutboundLink href="https://twitter.com/i/events/1411590457465839616" target="_blank" rel="noopener">ござ　Twitterまとめ③</OutboundLink></li>
        <li><OutboundLink href="https://twitter.com/i/events/1411215056713379846" target="_blank" rel="noopener">ござ　Twitterまとめ②</OutboundLink></li>
        <li><OutboundLink href="https://twitter.com/i/events/1410827112202661890" target="_blank" rel="noopener">ござ　Twitterまとめ①</OutboundLink></li>
        <li><OutboundLink href="https://ninbot.com/" target="_blank" rel="noopener">Ninjam「aanon」で検索する</OutboundLink></li>
        <li><OutboundLink href="https://soundcloud.com/pianorz" target="_blank" rel="noopener">SoundCloud</OutboundLink></li>
        <li><OutboundLink href="https://whowatch.tv/archives/3895848" target="_blank" rel="noopener">ふわっち</OutboundLink></li>
      </ul>
    </p>
    <h3>楽譜/書籍等</h3>
    <p>
      <ul class="tag">
        <li><OutboundLink href="https://mucome.net/profile?id=2690" target="_blank" rel="noopener">楽譜 / mucome</OutboundLink></li>
        <li><OutboundLink href="https://store.piascore.com/publishers/1343" target="_blank" rel="noopener">楽譜 / Piascore</OutboundLink></li>
        <li><OutboundLink href="https://www.ymm.co.jp/magazine/piano/" target="_blank" rel="noopener">月刊ピアノ</OutboundLink></li>
        <li><OutboundLink href="https://www.ymm.co.jp/feature/netpianists.php" target="_blank" rel="noopener">総再生数1億回超え！ネットピアニストたちの動画を楽譜にしてみた結果・・・！？</OutboundLink></li>
      </ul>
    </p>
    <h3>ライブ配信</h3>
    <p>
      <ul class="tag">
        <li><OutboundLink href="https://docs.google.com/spreadsheets/d/1TxDGZI-kCibS4e9OAA1Mukiu4lDwfrHN2quc86nfaIc/edit#gid=413512008" target="_blank" rel="noopener">ござさんアーカイブ案内所</OutboundLink><br/>
        <small>Created by <OutboundLink href="https://twitter.com/zan_ryur_goza">ざん</OutboundLink></small></li>
        <li><OutboundLink href="https://docs.google.com/document/d/e/2PACX-1vSipQ_mM6tbfaMDzLuN9pDXmsiRcsOIDyFOYCFOAUHq3Vi4SBNtZ5rUrbRMKdEN38LVy6Qz1ryiJXgr/pub" target="_blank" rel="noopener">ござさん演奏回数ランキング</OutboundLink><br/>
        <small>Created by <OutboundLink href="https://twitter.com/pinksaurs">pinksaurs</OutboundLink></small></li>
        <li><OutboundLink href="https://docs.google.com/document/u/0/d/1rwMzJemS9vd9eCM7qFKfJ8--yNYvYP_NQOeypI1h3hc/mobilebasic" target="_blank" rel="noopener">ござさん演奏回数ランキング2021年</OutboundLink><br/>
        <small>Created by <OutboundLink href="https://twitter.com/pinksaurs" target="_blank" rel="noopener">pinksaurs</OutboundLink></small></li>
      </ul>
    </p>
    <h3>管理人</h3>
    <p>
      <ul class="tag">
        <li><OutboundLink href="https://twitter.com/naiwashi817" target="_blank" rel="noopener">Twitter</OutboundLink></li>
      </ul>
    </p>
  </Layout>
)

export default SecondPage
