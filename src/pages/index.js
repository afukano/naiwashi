import React from "react"
import { Link } from "gatsby"

import { OutboundLink } from "gatsby-plugin-google-analytics"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

library.add(fab)

const IndexPage = () => (
  <Layout>
    <SEO title="Top" />
    <h2>「ござ」の経歴(プロフィール)</h2>
    <p>
      ※本サイトは非公式のファンサイトです。オフィシャルサイトはこちら。
      <ul class="tag">
        <li><OutboundLink href="https://goza.jp/" target="_blank" rel="noopener">オフィシャルサイト</OutboundLink></li>
      </ul>
    </p>
    <h3>「ござ」って何者？</h3>
    <p>
      Youtubeを中心に活躍するピアニスト「ござ」。(以降、敬称略)<br/>
      クラシック、ジャズ、ポップス、昭和歌謡、サブカル系(アニソン、ゲーム曲、ボカロ)等、幅広いレパートリー。<br/>
      ジャズ風、ラテン風、クラシック風等への即興アレンジが一番の魅力。<br/>
      <small>※本サイトは非公式ホームページです</small><br/>
      <br/>
      幼少期からピアノに慣れ親しんでおり絶対音感の持ち主。<br/>
      小学校一年生の時、他の人が演奏していた初見の「幻想即興曲」を耳コピ。(冒頭部分のみ)<br/>
      ピアノ教室でクラシックピアノを習う。<br/>
      中学高校では吹奏楽部だった。(クラリネット、ユーフォニアム)<br/>
      大学進学後に(音大ではない)ビッグバンドに加入。<br/>
      その影響もあり、2014年頃にはウォーキングベースの演奏も披露し始める。<br/>
      <small>※「ルパン三世のテーマ '80」が代表的</small><br/>
      本人曰く、手数の多い演奏から徐々に音数を削る方向に向かっているとのこと。<br/>
      大学卒業後はピアノ演奏を趣味として続けられるように、比較的自由な時間を取りやすい介護職に就く。<br/>
      介護職時代に職場でピアノ演奏することもあり、この経験から昭和歌謡等も覚えることとなった。<br/>
      <br/>
      即興アレンジが最大の魅力だが、キラキラした音、圧倒的な音数も特徴的。<br/>
      ずっしー氏が命名した“Goza-Alternate”（ござオルタネイト）と呼ばれる独特の奏法を用いる。<br/>
      <ul class="tag">
        <li><OutboundLink href="https://zussie-piano.com/pse-16beat-paradiddle1/" target rel="noopener">Goza-Alternate について</OutboundLink></li>
      </ul>
      現在の活動場所はYouTubeをメイン、時折ツイキャスで配信している。<br/>
      <ul class="tag">
        <li><OutboundLink href="https://www.youtube.com/channel/UC2Kb6k-aGIaKxlNPkrdcoHA" target="_blank" rel="noopener">ござのYoutubeチャンネル</OutboundLink></li>
        <li><OutboundLink href="https://twitcasting.tv/gprza/" target="_blank" rel="noopener">ござのツイキャス</OutboundLink></li>
      </ul>
      Twitterでも情報発信しているためフォローすることをおすすめする。<br/>
      また、ござについて更に深く知りたい方は、ござのTweetをまとめているので参照して欲しい。<br/>
      <ul class="tag">
        <li><div class="twitter">
          <OutboundLink href="https://twitter.com/gprza?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="true">
            Follow @gprza
          </OutboundLink>
        </div></li>
        <li><Link to="/movie/twitter">ござのTwitterまとめ</Link></li>
      </ul>
      ござは2009年から長く活動しているため、インターネット上の様々な媒体に音源を投稿している。<br/>
      各媒体について以下にまとめたので参照して欲しい。<br/>
      <br/>
      <h4>２ちゃんねるセッションスレ時代「bannsou」「伴奏」名義</h4>
      ござがインターネット上に最初に現れたのは2ちゃんねるに存在していた「セッションスレ」。<br/>
      「bannsou」もしくは「伴奏」名義で活動していた。<br/>
      残念ながらこの時代の音源は多くは残っていない。<br/>
      セッションスレ時代の情報については以下リンク先のTweetのスレッドにまとめた。<br/>
      <ul class="tag">
        <li><OutboundLink href="https://twitter.com/naiwashi817/status/1405125440382017536" target="_blank" rel="noopener">セッションスレ時代について</OutboundLink></li>
      </ul>
      <h4>Ninjam、SoundCloud等</h4>
      後述するニコニコ動画、YouTubeに多くの音源を投稿しているが他にも複数の媒体に音源を投稿している。<br/>
      <br/>
      インターネット上で他のユーザとセッションすることができるNinjamに多くの音源が残っている。<br/>
      以下のリンク先で「aanon」で検索すると、ござがセッションした音源を聴くことができる。<br/>
      <ul class="tag">
        <li><OutboundLink href="https://ninbot.com/" target="_blank" rel="noopener">Ninjam</OutboundLink></li>
      </ul>
      SoundCloudに「pianorz」名義で複数の音源を投稿している。<br/>
      以下のリンク先から音源を聴くことができる。<br/>
      <ul class="tag">
        <li><OutboundLink href="https://soundcloud.com/pianorz" target="_blank" rel="noopener">SoundCloud</OutboundLink></li>
      </ul>
      ふわっちにて一度だけライブ配信しておりアーカイブが残っている。<br/>
      <ul class="tag">
        <li><OutboundLink href="https://whowatch.tv/archives/3895848" target="_blank" rel="noopener">ふわっち</OutboundLink></li>
      </ul>
      <h4>ニコニコ動画時代「_」(アンダーバー)「あんだば先生」「ござにあす」名義</h4>
      2009年からニコニコ動画へピアノ動画の投稿を始めている。<br/>
      動画投稿当初はボカロ曲や音ゲーのような音数、手数が多めの演奏が中心であった。<br/>
      <small>※「ニエンテ」や「Chaining Intention」が代表的</small><br/>
      ニコニコ動画では「あんだば先生」と呼ばれていた。<br/>
      これは投稿者の名前が「_」(アンダーバー)だったため、視聴者から親しみを込めて「あんだば先生」と呼ばれるようになった。<br/>
      その後、新しい名前の投票が行われ「ござ」と「セロニアス」から「ござにあす」に改名し、通称「ござ」と呼ばれることに至った。<br/>
      <ul class="tag">
        <li><OutboundLink href="https://www.nicovideo.jp/user/3359408/video?sortKey=viewCount&sortOrder=desc" target="_blank" rel="noopener">ござの投稿動画(ニコニコ動画)</OutboundLink></li>
        <li><OutboundLink href="https://www.nicovideo.jp/my/mylist/71272433" target="_blank" rel="noopener">ござ以外が投稿した動画(ニコニコ動画)</OutboundLink></li>
      </ul>
      <h4>YouTuber、プロピアニスト宣言</h4>
      長らく知る人ぞ知る存在であったが、<br/>
      都庁のストリートピアノで菊池亮太と「丸の内サディスティック」の連弾動画をYoutubeに投稿。<br/>
      その後、ピアノ仲間からの叱咤激励もあり、介護職を退職し2020年2月15日のライブ配信にてプロ転向を宣言。<br/>
      <small>※この頃、菊池亮太氏から「ござさんの手は国宝だから」と言われた</small><br/>
      ストリートピアノで「Official髭男dism(ヒゲダン)」「ベートーヴェンメドレー」「パプリカ」「クリスマスメドレー」等を演奏し徐々に知られるようになる。<br/>
      <ul class="tag">
        <li><OutboundLink href="https://www.youtube.com/playlist?list=PLTjfre1_Qtf9z-H451reX99lvQzeGCSKx" target="_blank" rel="noopener">ストリートピアノ再生リスト</OutboundLink></li>
      </ul>
      ストリートピアノ動画の再生回数が多いが、<br/>
      不定期に配信されるYoutube顔出しライブ配信での即興演奏がファンから人気。(稀にツイキャスでも配信する)<br/>
      ライブ配信中にチャットで弾いてほしい曲をリクエストすると、運が良ければ弾いてもらえる。<br/>
      以前は、自宅でペンギンの被り物をしながら電子ピアノでの配信が多かったが、最近はグランドピアノで素顔を出して配信することが多い。(ただしマスクはしている)<br/>
      <ul class="tag">
        <li><Link to="/live/">ライブ配信やメンバーシップについて詳細</Link></li>
      </ul>
      Youtubeチャンネルのアイコンはネズミだがこれは特に意味はない。<br/>
      イラスト作成を依頼する際、強いて言えばござは何に似ているか？と聞いた回答がネズミだったため。<br/>
      <br/>
      SPICEのござの記事(インタビューやライブレポート等)の一覧は以下のリンク先。<br/>
      <ul class="tag">
        <li><OutboundLink href="https://spice.eplus.jp/featured/0000142460/articles" target="_blank" rel="noopener">SPICEのござ記事</OutboundLink></li>
      </ul>
      月刊ピアノにて「ござさんの All that Goza's Piano Arrange」を連載中。<br/>
      <ul class="tag">
        <li><OutboundLink href="https://www.ymm.co.jp/magazine/piano/" target="_blank" rel="noopener">月刊ピアノ</OutboundLink></li>
      </ul>
      編曲した楽譜も販売中。<br/>
      <ul class="tag">
        <li><OutboundLink href="https://mucome.net/profile?id=2690" target="_blank" rel="noopener">mucome</OutboundLink>はこちら</li>
        <li><OutboundLink href="https://store.piascore.com/publishers/1343" target="_blank" rel="noopener">Piascore</OutboundLink>はこちら</li>
      </ul>
    </p>
    <h3>ござ本人による経歴紹介</h3>
    <blockquote className="twitter-tweet">
      <p lang="ja" dir="ltr">
        またフォロワーさんが増えたので自己紹介<br/>
        <br/>
        ・ピアノ教室でクラシック12年<br/>
        ・中学高校で吹奏楽（エンジョイ勢）6年（クラリネットとユーフォニアム）<br/>
        ・大学でビッグバンド3年（ピアノ）<br/>
        ・配信でアニソンなどサブカル系9年<br/>
        ・子供の頃から練習の合間にポップスをちょろちょろ<br/>
        <br/>
        みたいな音楽歴です☺️☺️
      </p>
      &mdash; ござ 🎹 (@gprza) 
      <OutboundLink href="https://twitter.com/gprza/status/1091724201847795712?ref_src=twsrc%5Etfw">
        February 2, 2019
      </OutboundLink>
    </blockquote>
    <h3>Youtubeチャンネル紹介動画</h3>
    <p>
      <div class="youtube">
        <iframe  
          src="https://www.youtube.com/embed/FsIOsWyjz7U" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
          loading="lazy"
          title="ござ/ライブ配信"
        ></iframe>
      </div>
    </p>
    <h3>使用機材(機種)</h3>
    <p>
      <ul class="list">
        <li>
          Roland FANTOM-8(シンセサイザー)　2020年～
        </li>
        <li>
          Roland FA-08(シンセサイザー)　2015年～2020年
        </li>
        <li>
          YAMAHA YS10(アップライトピアノ)　～2014年頃
        </li>
      </ul>
      &nbsp;&nbsp;&nbsp;&nbsp;<small>※ライブ配信ではレンタルスタジオでグランドピアノも使用する</small>
    </p>
    <h3>ピアノ書籍/出版物</h3>
    <p>
      <ul class="list">
        <li>
          「総再生数1億回超え！ネットピアニストたちの動画を楽譜にしてみた結果・・・！？」ヤマハミュージックメディア(2020年1月24日発売)<br/>
          <OutboundLink href="https://www.ymm.co.jp/feature/netpianists.php" target="_blank" rel="noopener">詳細</OutboundLink>はこちら
        </li>
        <li>
        「月刊ピアノ」アレンジ講座連載(2020年1月号～現在)
        </li>
        <li>
        「月刊ピアノ」インタビュー掲載(2021年5月号)<br/>
        <OutboundLink href="https://www.ymm.co.jp/p/detail.php?code=GTM01097974" target="_blank" rel="noopener">詳細</OutboundLink>はこちら
        </li>
        <li>
        「月刊ショパン」 2021年2月号ござ×菊池亮太対談掲載<br/>
        <OutboundLink href="https://youtu.be/a7xh3gfaNvE" target="_blank" rel="noopener">対談動画</OutboundLink>はこちら
        </li>
        <li>
        「月刊ショパン」 2021年1月号ござ×ハラミちゃん対談掲載<br/>
        <OutboundLink href="https://youtu.be/p0LQrpxb30E" target="_blank" rel="noopener">対談動画</OutboundLink>はこちら
        </li>
      </ul>
    </p>
  </Layout>
)

export default IndexPage
