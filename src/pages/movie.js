import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="おすすめ曲" />
    <h2>おすすめ投稿動画</h2>
    <p>
      <ul class="tag">
        <li><Link to="/movie/twitter">Twitterのみの投稿動画</Link></li>
      </ul>
    </p>
    <h3>ルパン三世のテーマ '80 / Lupin the Third '80 (Piano Cover)</h3>
    <p>
      アニメをあまり見ない人でも、どこかで聞いたことがあるのでは？<br/>
      アニソンという枠を超えて幅広い世代に親しまれている名曲。<br/>
      このアレンジでは原曲にあるJAZZ要素を生かし、ウォーキングベースによって大人っぽく仕上げられている。<br/>
      アレンジ楽譜も人気で、これをもとにした「弾いてみた動画」も何件かYoutube上に投稿されている。<br/>
      <div class="youtube">
        <iframe 
          src="https://www.youtube.com/embed/mXPXNeLwd1k" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          title="ござ/ルパン三世"
        ></iframe>
      </div>
    </p>
    <h3>Tank!(カウボーイビバップ / Cowboy Bebop OP) Piano cover</h3>
    <p>
      アニメ「Cowboy Bebop」のOPテーマ。<br/>
      ピアノソロで、ウッドベース、SAX、トランペット等各パート部を網羅し、原曲のジャズバンドを見事に再現。<br/>
      原曲を聞くとその再現度の高さに驚かされるはず。<br/>
      <Link to="https://youtu.be/T6zDfxZ4NcE" target="_blank" rel="noopener">原曲</Link>はこちら。<br/>
      Bebop＝「譜面通りではない自由な即興」というイメージから、ジャズのゆらぎ感も感じられる。<br/>
      安定の超絶技巧がさえわたる、短いながらもスパイスが効いた演奏。<br/>
      <div class="youtube">
        <iframe
          src="https://www.youtube.com/embed/uA2PECsJROA" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </p>
    <h3>neu (ニエンテ)を弾いてみた　(piano cover)</h3>
    <p>
      以前はニコニコ動画で生配信や動画投稿を行っており、当時の代表曲としてはここに挙げられているニエンテ、ヘミソフィア、Cheininng　intention が挙げられる。<br/>
      原曲は、音ゲーと呼ばれるジャンルのゲームであるpop'n musicの曲。<br/>
      ニエンテというのはゲーム内のジャンル名であり、曲名は正確にはneu(ノイ)と言う。<br/>
      音ゲーというリズムゲームが元なだけあり、ピアノで弾いても難曲。<br/>
      さらにその緩急のつけ方、畳みかけるような展開はゲーム曲を超えた迫力あるアレンジとなっている。<br/>
      <iframe
        width="312" height="176"  
        src="https://ext.nicovideo.jp/thumb/sm13496819" 
        scrolling="no" 
        frameBorder="0">
        <a href="https://www.nicovideo.jp/watch/sm13496819">「neu(ニエンテ)」を弾いてみた</a>
      </iframe>
    </p>
    <p>
      <Link to="https://www.youtube.com/embed/vs06K1Le5H4" target="_blank" rel="noopener">Youtubeバージョンはこちら</Link>
    </p>
    <h3>「ヘミソフィア(hemisphere)」を弾いてみた</h3>
    <p>
      <div class="youtube">
        <iframe
          src="https://www.youtube.com/embed/yZG9LbP0bwg" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </p>
    <h3>「Chaining Intention」を弾いてみた</h3>
    <p>
      <iframe 
        width="312" height="176" 
        src="https://ext.nicovideo.jp/thumb/sm11494784" 
        scrolling="no" 
        frameBorder="0"
        title="ござ/ChainingIntention">
        <a href="https://www.nicovideo.jp/watch/sm11494784">「Chaining Intention」を弾いてみた</a>
      </iframe>
    </p>
    <h3>実況！ジャズピアノソロ！カントリーロード</h3>
    <p>
      <div class="youtube">
        <iframe 
          src="https://www.youtube.com/embed/M9zVVhpXw6k" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          title="ござ/カントリーロード"
        ></iframe>
      </div>
    </p>
  </Layout>
)

export default SecondPage
