import React from "react"
import { Link } from "gatsby"

import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="コラボ" />
    <h2>コラボ動画</h2>
    <p>
      <ul class="tag">
        <li><Link to="/collabo/talk">雑談動画</Link></li>
      </ul>
    </p>
    <h3>【告知あり】なにかとても楽しくなる予感の放送をします【すごいと思う】 / 事務員G</h3>
    <p>
      <b>■見どころポインツ</b><br/>
      情熱大陸 / かてぃん
      <div class="youtube">
        <iframe 
          src="https://www.youtube.com/embed/GOs0KyBD47A?start=5160" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          title="事務員G/情熱大陸/かてぃん"
        ></iframe>
      </div>
    </p>
    <br/>
    <h3>菊池亮太さんとピアノとたわむれるコラボ配信！　2020/10/16</h3>
    <p>
      <b>■見どころポインツ</b><br/>
      Close to You [Carpenters](菊池ソロピアノ×ござベース)<br/>
      Close to You [Carpenters](ござソロピアノ×菊池ベース)<br/>
      枯葉(Autumn Leaves)  [Joseph Kosma](+荒城の月)<br/>
      エリーゼのために [ベートーヴェン](ラテン風)<br/>
      ハモって遊ぶ天才二人<br/>
      悲愴 第2楽章 [ベートーヴェン]<br/>
      トルコ行進曲 [モーツァルト](世界一周アレンジ?)<br/>
      Automatic [宇多田ヒカル]
      <div class="youtube">
        <iframe 
          src="https://www.youtube.com/embed/hSuJ3R7ZKuk?start=4724" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          title="ござ/Close to You/菊池亮太"
        ></iframe>
      </div>
    </p>
    <br/>
    <h3>【ゲストたくさん】スタジオからグランドピアノでお送りします！ / 事務員G</h3>
    <p>
      <b>■見どころポインツ</b><br/>
      シロナ戦(ポケモンDP) / 瀬戸一王<br/>
      216番道路(ポケモンDP) / 瀬戸一王
      <div class="youtube">
        <iframe 
          src="https://www.youtube.com/embed/YVj3qWC2Hn8?start=5572" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          title="事務員G/シロナ戦/瀬戸一王"
        ></iframe>
      </div>
    </p>
    <br/>
    <h3>ライブ 眠れないのでピアノ弾きます🐘🎹 #640373180</h3>
    <p>
      <b>■見どころポインツ</b><br/>
      宝島 / ものはっぱ ぜろいち(10:07～)<br/>
      <ul class="tag">
        <li><OutboundLink href="https://twitcasting.tv/iriirisriri/movie/640373180" target="_blank" rel="noopener">再生できない場合はこちらから</OutboundLink></li>
      </ul>
      <div class="youtube">
        <iframe 
          src="https://twitcasting.tv/iriirisriri/embeddedplayer/640373180?auto_play=false&default_mute=false" 
          frameBorder="0" 
          allowFullScreen
          title="いりす/宝島/ものはっぱ"
        ></iframe>
      </div>
    </p>
    <br/>
    <h3>【ゲスト：ござ】スタジオからグランドピアノでお送りします！ / 事務員G</h3>
    <p>
      <b>■見どころポインツ</b><br/>
      革命のエチュードを歌ってみた / 事務員G
      <div class="youtube">
        <iframe 
          src="https://www.youtube.com/embed/Rz-TSfEJvfU?start=3818" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          title="事務員G/革命のエチュード/事務員G"
        ></iframe>
      </div>
    </p>
    <br/>
    <h3>ござさんとコラボセッション！ / ものはっぱ</h3>
    <p>
      <ul class="tag">
        <li><OutboundLink href="https://ssl.twitcasting.tv/m0n0happa/movie/560571690" target="_blank" rel="noopener">再生できない場合はこちらから</OutboundLink></li>
      </ul>
      <div class="youtube">
        <iframe 
          src="https://ssl.twitcasting.tv/m0n0happa/embeddedplayer/560571690?auto_play=false&default_mute=false" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          title="ものはっぱ / ござさんとコラボセッション！ / ものはっぱ"
        ></iframe>
      </div>
    </p>
    <br/>
  </Layout>
)

export default SecondPage
