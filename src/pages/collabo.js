import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="コラボ" />
    <h2>コラボ動画</h2>
    <p>
      <Link to="/collabo/talk">雑談動画</Link>
    </p>
    <h3>【告知あり】なにかとても楽しくなる予感の放送をします【すごいと思う】 / 事務員G</h3>
    <p>
      <b>■見どころポインツ</b><br/>
      情熱大陸 / かてぃん
    </p>
    <p>
      <div class="youtube">
        <iframe 
          src="https://www.youtube.com/embed/GOs0KyBD47A?start=5160" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
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
    </p>
    <p>
      <div class="youtube">
        <iframe 
          src="https://www.youtube.com/embed/hSuJ3R7ZKuk?start=4724" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
      </div>
    </p>
    <br/>
    <h3>【ゲストたくさん】スタジオからグランドピアノでお送りします！ / 事務員G</h3>
    <p>
      <b>■見どころポインツ</b><br/>
      シロナ戦(ポケモンDP) / 瀬戸一王<br/>
      216番道路(ポケモンDP) / 瀬戸一王
    </p>
    <p>
      <div class="youtube">
        <iframe 
          src="https://www.youtube.com/embed/YVj3qWC2Hn8?start=5572" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
      </div>
    </p>
    <br/>
    <h3>ライブ 眠れないのでピアノ弾きます🐘🎹 #640373180</h3>
    <p>
      <b>■見どころポインツ</b><br/>
      宝島 / ものはっぱ ぜろいち(10:07～)<br/>
    </p>
    <p>
      <div class="youtube">
        <iframe 
          src="https://twitcasting.tv/iriirisriri/embeddedplayer/640373180?auto_play=false&default_mute=false" 
          frameborder="0" 
          allowfullscreen
        ></iframe>
      </div>
    </p>
    <br/>
    <h3>【ゲスト：ござ】スタジオからグランドピアノでお送りします！ / 事務員G</h3>
    <p>
      <b>■見どころポインツ</b><br/>
      革命のエチュードを歌ってみた / 事務員G
    </p>
    <p>
      <div class="youtube">
        <iframe 
          src="https://www.youtube.com/embed/Rz-TSfEJvfU?start=3818" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
        ></iframe>
      </div>
    </p>
    <br/>
  </Layout>
)

export default SecondPage
