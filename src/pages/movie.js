import React from "react"
import { Link } from "gatsby"

import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="おすすめ曲" />
    <h2>おすすめ投稿動画</h2>
    <h3>ストリートピアノ演奏</h3>
    <p>
      ござの最大の魅力はライブ配信時の即興演奏だが、ストリートピアノの演奏動画は再生回数も多く人気が高い。<br/>
      そこでストリートピアノの演奏動画を集めて再生リストを作成し、再生回数の多い動画順に並べた。<br/>
      以下の動画は作成した再生リストであり、人気の高い動画順に連続再生されるため、まずは何本か動画を視聴していただければと思う。<br/>
      また、他の人が公開しているござの演奏動画も含んでいるため、ござの演奏を更に知りたい人も再生リストを確認することをおすすめする。<br/>
      <div class="youtube">
        <iframe 
          src="https://www.youtube.com/embed/videoseries?list=PLTjfre1_Qtf9z-H451reX99lvQzeGCSKx" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          loading="lazy"
          title="ござ/ストリートピアノ"
        ></iframe>
      </div>
      <br/>
      <ul class="tag">
        <li><OutboundLink href="https://www.youtube.com/playlist?list=PLTjfre1_Qtf9z-H451reX99lvQzeGCSKx" target="_blank" rel="noopener">ストリートピアノ再生リスト</OutboundLink></li>
      </ul>
      メンバーシップに加入しないと基本的に過去のライブ配信は視聴できない。<br/>
      しかしイベントでの配信や切り抜き動画等、メンバーシップ未加入でも視聴可能な動画も存在する。<br/>
      <ul class="tag">
        <li><OutboundLink href="https://www.youtube.com/playlist?list=PLTjfre1_Qtf-IIdufmZdO2irUYL5YNDpi" target="_blank" rel="noopener">配信動画再生リスト</OutboundLink></li>
      </ul>
      もっとござの事を知りたい方は、本人のチャンネル以外にござが出演した、もしくは関連する動画の再生リストも作成してあるので参照して欲しい。
      <ul class="tag">
        <li><OutboundLink href="https://www.youtube.com/playlist?list=PLTjfre1_Qtf-G1CMKyUrfisZI03Z0Ke_v" target="_blank" rel="noopener">他チャンネル再生リスト</OutboundLink></li>
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
          loading="lazy"
          title="ござ/ルパン三世"
        ></iframe>
      </div>
    </p>
    <h3>Tank!(カウボーイビバップ / Cowboy Bebop OP) Piano cover</h3>
    <p>
      アニメ「Cowboy Bebop」のOPテーマ。<br/>
      ピアノソロで、ウッドベース、SAX、トランペット等各パート部を網羅し、原曲のジャズバンドを見事に再現。<br/>
      原曲を聞くとその再現度の高さに驚かされるはず。<br/>
      <OutboundLink href="https://youtu.be/T6zDfxZ4NcE" target="_blank" rel="noopener">原曲</OutboundLink>はこちら。<br/>
      Bebop＝「譜面通りではない自由な即興」というイメージから、ジャズのゆらぎ感も感じられる。<br/>
      安定の超絶技巧がさえわたる、短いながらもスパイスが効いた演奏。<br/>
      <div class="youtube">
        <iframe
          src="https://www.youtube.com/embed/uA2PECsJROA" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          loading="lazy"
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
        loading="lazy"
        scrolling="no" 
        frameBorder="0">
        <OutboundLink href="https://www.nicovideo.jp/watch/sm13496819">「neu(ニエンテ)」を弾いてみた</OutboundLink>
      </iframe>
    </p>
    <p>
      <ul class="tag">
        <li><OutboundLink href="https://www.youtube.com/embed/vs06K1Le5H4" target="_blank" rel="noopener">Youtubeバージョンはこちら</OutboundLink></li>
      </ul>
    </p>
    <h3>「ヘミソフィア(hemisphere)」を弾いてみた</h3>
    <p>
      <div class="youtube">
        <iframe
          src="https://www.youtube.com/embed/yZG9LbP0bwg" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          loading="lazy"
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
        loading="lazy"
        title="ござ/ChainingIntention">
        <OutboundLink href="https://www.nicovideo.jp/watch/sm11494784">「Chaining Intention」を弾いてみた</OutboundLink>
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
          loading="lazy"
          title="ござ/カントリーロード"
        ></iframe>
      </div>
    </p>
  </Layout>
)

export default SecondPage
