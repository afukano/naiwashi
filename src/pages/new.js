import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="What's new" />
    <h2>ござの最新動画</h2>
    <p>
      <div class="youtube">
        <iframe 
          src="https://www.youtube.com/embed/?list=UU2Kb6k-aGIaKxlNPkrdcoHA" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
      </div>
    </p>
    <h2>NEO PIANO CO.LABO. "Invention" 出演決定！</h2>
    <p>
      話題の配信系ピアニスト「かてぃん」「菊池亮太」「ござ」「けいちゃん」によるコラボライブ第2弾。<br/>
      通称「ねぴらぼ」。<br/>
      ■公演日<br/>
      &nbsp;&nbsp;2021年2月11日（木・祝日）<br/>
      &nbsp;&nbsp;18:30開演 / 20:00終演（予定）<br/>
      <br/>
      <a href="http://neopianoco.jp/">公式サイトはこちら</a>
    </p>
    <h2>NET PIANO FUYU MATSURI 2021 出演決定！</h2>
    <p>
      菊池亮太 主催のピアノ奏者によるライブ配信祭り。<br/>
      通称「ネピフユ」。前回「ネピサマ」に続く第2弾。<br/>
      ■公演日<br/>
      &nbsp;&nbsp;2021年1月30日（土） 20:15～<br/>
      <br/>
      <a href="https://twitter.com/komuro_metal/status/1345695150119403521?s=20">詳細はこちら</a>
    </p>
    <h2>NEO PIANO CO.LABO.　完全版　〜副音声付き〜販売中</h2>
    <p>
      2020年7月24日に開催したNEO PIANO CO.LABO.本公演の映像・音源を再編集し新たな映像作品として配信！<br/>
      また、本公演だけでなく、出演者達の副音声verも収録。<br/>
      当日の裏話満載のトークもお楽しみいただけます！<br/>
      ■チケット販売期間<br/>
      &nbsp;&nbsp;カード払い：2020年9月26日(土)17:00〜2021年9月24日(金)23:59まで<br/>
      &nbsp;&nbsp;コンビニ払い：2020年10月6日(火)10:00～2021年9月22日(水)18:00まで<br/>
      <br/>
      <a href="https://eplus.jp/sf/classic/neopiano">詳細はこちら</a>
    </p>
  </Layout>
)

export default SecondPage
