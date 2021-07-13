import React from "react"
import { Link } from "gatsby"

import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="雑談コラボ" />
    <h2>雑談動画</h2>
    <h3>ちょっと雑談放送</h3>
    <p>
      リンク元：ツイキャス<br/>
      投稿者：ござ<br/>
      日付：2021/06/30<br/>
      <ul class="tag">
        <li><OutboundLink href="https://twitcasting.tv/gprza/movie/689995676" target="_blank" rel="noopener">再生できない場合はこちらから</OutboundLink></li>
      </ul>
      <div class="youtube">
        <iframe 
          src="https://twitcasting.tv/gprza/embeddedplayer/689995676?auto_play=false&default_mute=false" 
          frameBorder="0" 
          allowFullScreen
          loading="lazy"
          title="ござ/雑談"
        ></iframe>
      </div>
    </p>
    <br/>
    <h3>ライブ 眠れないのでピアノ弾きます🐘🎹 #657202568</h3>
    <p>
      リンク元：ツイキャス<br/>
      投稿者：いりす<br/>
      日付：2020/12/19<br/>
      <b>■見どころポインツ</b><br/>
      フィギュアスケート風ピアノ解説 / いりす けいちゃん 菊池亮太 事務員G <br/>
      <ul class="tag">
        <li><OutboundLink href="https://twitcasting.tv/iriirisriri/movie/657202568" target="_blank" rel="noopener">再生できない場合はこちらから</OutboundLink></li>
      </ul>
      <div class="youtube">
        <iframe 
          src="https://twitcasting.tv/iriirisriri/embeddedplayer/657202568?auto_play=false&default_mute=false" 
          frameBorder="0" 
          allowFullScreen
          loading="lazy"
          title="いりす/フィギュアスケート"
        ></iframe>
      </div>
    </p>
    <br/>
    <h3>ござさん、ずっしーさん、tjさん、ものはっぱさん、ぜろいちさんとお喋り</h3>
    <p>
      リンク元：ツイキャス<br/>
      投稿者：いりす<br/>
      日付：2020/06/08<br/>
      <ul class="tag">
        <li><OutboundLink href="https://twitcasting.tv/iriirisriri/movie/620679803" target="_blank" rel="noopener">再生できない場合はこちらから</OutboundLink></li>
      </ul>
      <div class="youtube">
        <iframe 
          src="https://twitcasting.tv/iriirisriri/embeddedplayer/620679803?auto_play=false&default_mute=false" 
          frameBorder="0" 
          allowFullScreen
          loading="lazy"
          title="いりす/雑談"
        ></iframe>
      </div>
    </p>
    <br/>
    <h3>ござさん、ずっしーさん、ものはっぱさん、いりすで雑談。ずっしーさんは実在するんです</h3>
    <p>
      リンク元：ツイキャス<br/>
      投稿者：いりす<br/>
      日付：2020/05/08<br/>
      <ul class="tag">
        <li><OutboundLink href="https://twitcasting.tv/iriirisriri/movie/612965835" target="_blank" rel="noopener">再生できない場合はこちらから</OutboundLink></li>
      </ul>
      <div class="youtube">
        <iframe 
          src="https://twitcasting.tv/iriirisriri/embeddedplayer/612965835?auto_play=false&default_mute=false" 
          frameBorder="0" 
          allowFullScreen
          loading="lazy"
          title="いりす/ずっしー"
        ></iframe>
      </div>
    </p>
    <h3>オンライン飲み垂れ流し。ござさん、tjさん、ものはっぱさん、いりす</h3>
    <p>
      リンク元：ツイキャス<br/>
      投稿者：いりす<br/>
      日付：2020/04/22<br/>
      <ul class="tag">
        <li><OutboundLink href="https://twitcasting.tv/iriirisriri/movie/608436682" target="_blank" rel="noopener">再生できない場合はこちらから</OutboundLink></li>
      </ul>
      <div class="youtube">
        <iframe 
          src="https://twitcasting.tv/iriirisriri/embeddedplayer/608436682?auto_play=false&default_mute=false" 
          frameBorder="0" 
          allowFullScreen
          loading="lazy"
          title="いりす/飲み垂れ流し"
        ></iframe>
      </div>
    </p>
    <br/>
  </Layout>
)

export default SecondPage
