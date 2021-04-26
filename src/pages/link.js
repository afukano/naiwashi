import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="リンク" />
    <h2>リンク</h2>
    <h3>ござ</h3>
    <p>
      <Link to="https://gozapiano.com/" target="_blank" rel="noopener">公式ホームページ(ブログ)</Link><br/>
      <Link to="https://www.youtube.com/channel/UC2Kb6k-aGIaKxlNPkrdcoHA" target="_blank" rel="noopener">Youtubeチャンネル</Link><br/>
      <Link to="https://twitter.com/gprza" target="_blank" rel="noopener">Twitter</Link><br/>
      <Link to="https://twitcasting.tv/gprza/" target="_blank" rel="noopener">ツイキャス</Link><br/>
      <Link to="https://www.nicovideo.jp/user/3359408" target="_blank" rel="noopener">ニコニコ動画</Link><br/>
    </p>
    <h3>楽譜/書籍等</h3>
    <p>
      <Link to="https://mucome.net/profile?id=2690" target="_blank" rel="noopener">楽譜 / mucome</Link><br/>
      <Link to="https://store.piascore.com/publishers/1343" target="_blank" rel="noopener">楽譜 / Piascore</Link><br/>
      <Link to="https://www.ymm.co.jp/magazine/piano/" target="_blank" rel="noopener">月刊ピアノ</Link><br/>
      <Link to="https://www.ymm.co.jp/feature/netpianists.php" target="_blank" rel="noopener">総再生数1億回超え！ネットピアニストたちの動画を楽譜にしてみた結果・・・！？</Link><br/>
    </p>
    <h3>ライブ配信</h3>
    <p>
      <Link to="https://docs.google.com/spreadsheets/d/1TxDGZI-kCibS4e9OAA1Mukiu4lDwfrHN2quc86nfaIc/edit#gid=413512008" target="_blank" rel="noopener">ござさんアーカイブ案内所</Link><br/>
      <small>Created by <Link to="https://twitter.com/zan_ryur_goza">ざん</Link></small><br/>
      <Link to="https://docs.google.com/document/d/e/2PACX-1vSipQ_mM6tbfaMDzLuN9pDXmsiRcsOIDyFOYCFOAUHq3Vi4SBNtZ5rUrbRMKdEN38LVy6Qz1ryiJXgr/pub" target="_blank" rel="noopener">ござさん演奏回数ランキング</Link><br/>
      <small>Created by <Link to="https://twitter.com/pinksaurs">pinksaurs</Link></small><br/>
    </p>
    <h3>管理人</h3>
    <p>
      <Link to="https://twitter.com/naiwashi817" target="_blank" rel="noopener">ござのホームページ(非公式)@管理人</Link><br/>
    </p>
  </Layout>
)

export default SecondPage
