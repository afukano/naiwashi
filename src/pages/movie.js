import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="おすすめ曲" />
    <h2>おすすめ投稿動画</h2>
    <p>
      <Link to="/movie/twitter">Twitterのみの投稿動画</Link>
    </p>
    <h3>ルパン三世のテーマ '80 / Lupin the Third '80 (Piano Cover)</h3>
    <p>
      <div class="youtube">
        <iframe 
          src="https://www.youtube.com/embed/mXPXNeLwd1k" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </p>
    <h3>Tank!(カウボーイビバップ / Cowboy Bebop OP) Piano cover</h3>
    <p>
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
        frameBorder="0">
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
        ></iframe>
      </div>
    </p>
  </Layout>
)

export default SecondPage
