import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="雑談コラボ" />
    <h2>雑談動画</h2>
    <h3>ライブ 眠れないのでピアノ弾きます🐘🎹 #657202568</h3>
    <p>
      <b>■見どころポインツ</b><br/>
      フィギュアスケート風ピアノ解説 / いりす けいちゃん 菊池亮太 事務員G <br/>
    </p>
    <p>
      <div class="youtube">
        <iframe 
          src="https://twitcasting.tv/iriirisriri/embeddedplayer/657202568?auto_play=false&default_mute=false" 
          frameborder="0" 
          allowfullscreen
        ></iframe>
      </div>
    </p>
    <br/>
    <h3>ござさん、ずっしーさん、tjさん、ものはっぱさん、ぜろいちさんとお喋り</h3>
    <p>
      <div class="youtube">
        <iframe 
          src="https://twitcasting.tv/iriirisriri/embeddedplayer/620679803?auto_play=false&default_mute=false" 
          frameborder="0" 
          allowfullscreen
        ></iframe>
      </div>
    </p>
    <br/>
    <h3>ござさん、ずっしーさん、ものはっぱさん、いりすで雑談。ずっしーさんは実在するんです</h3>
    <p>
      <div class="youtube">
        <iframe 
          src="https://twitcasting.tv/iriirisriri/embeddedplayer/612965835?auto_play=false&default_mute=false" 
          frameborder="0" 
          allowfullscreen
        ></iframe>
      </div>
    </p>
    <br/>
  </Layout>
)

export default SecondPage
