import React from "react"
import { Link } from "gatsby"

import { OutboundLink } from "gatsby-plugin-google-analytics"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="ライブ配信" />
    <h2>ライブ配信について</h2>
    <h3>ライブ配信ってどんな雰囲気？</h3>
    <p>
      <div class="youtube">
        <iframe
          src="https://www.youtube.com/embed/3762IU8rrTg?start=238" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
      メンバーシップ未加入でも閲覧可能な、過去にライブ配信された動画。<br/>
      この動画は、ペンギンの被り物＋電子ピアノだが、素顔出し＋グランドピアノでの配信もある。<br/>
      合間にトークを挟みながら、リクエストを受け付けて即興演奏をする。<br/>
      以前はスーパーチャット(投げ銭)でリクエストすると必ず演奏してもらえた。<br/>
      しかし視聴者数が増えてからはリクエストを捌ききれない状態になったため、スーパーチャットによるリクエストは受け付けていない。<br/>
      配信の最終盤は演奏を止めないままの即興メドレーを数十分に渡り披露するのが恒例。<br/>
      蛍の光が流れたら終わりの合図。<br/>
    </p>
    <h3>いつライブ配信しているの？</h3>
    <p>
      ライブ配信は不定期。突然始まることも稀にある。<br/>
      Youtubeチャンネルの通知をONにしておけば開始時に知ることもできるが直前になりがち。<br/>
      <ul class="tag">
        <li><OutboundLink href="https://www.youtube.com/channel/UC2Kb6k-aGIaKxlNPkrdcoHA" target="_blank" rel="noopener">ござのYoutubeチャンネル</OutboundLink></li>
        <li>【参考ページ】<OutboundLink to="https://weekly.ascii.jp/elem/000/001/634/1634383/" target="_blank" rel="noopener">YouTube「チャンネル登録」「通知設定」をする意味とメリット</OutboundLink></li>
      </ul>
      そこで、ござのTwitterアカウントをフォローし、通知設定をONにしておくことをおすすめする。<br/>
      <blockquote class="twitter-tweet">
        <p lang="ja" dir="ltr">
          今晩2230以降にかけて新年初配信があるかもとの見方も🤏🤏🤏
        </p>
        &mdash; ござ 🎹 (@gprza) 
        <OutboundLink href="https://twitter.com/gprza/status/1348597702674714625?ref_src=twsrc%5Etfw" target="_blank" rel="noopener">
          January 11, 2021
        </OutboundLink>
      </blockquote>
      遅くともライブ配信の数時間前には、ライブ配信をする旨ツイートしてくれる。<br/>
      <ul class="tag">
        <li><OutboundLink href="https://twitter.com/gprza" target="_blank" rel="noopener">ござのTwitterアカウント</OutboundLink></li>
      </ul>
    </p>
    <h3>ないわし？</h3>
    <p>
      Youtube ライブ配信中のチャット欄に度々「ないわし」という言葉が飛び交う。<br/>
      これはYoutubeの投げ銭機能を利用した方へ対する「ナイススーパーチャット」「ナイスパ」と同じ意味である。<br/>
      ござがペンギンの被り物をしながらライブ配信していた事があり、ペンギンさんにイワシのエサ代を投げているということから「ナイスイワシ」「ないわし」と呼ばれるようになった。<br/>
      メンバーシップ限定の絵文字にも存在する、公式な単語でもある。<br/>
      一部のメンバーからは1万円以上の高額投げ銭（赤スパ）を「ナイスマグロ」等と呼ばれることもある。<br/>
    </p>
    <h3>ござからのお知らせ</h3>
    <p>
      <blockquote class="twitter-tweet">
        <p lang="ja" dir="ltr">
          【お知らせ】<br/>
          放送中に寄せられる要望についてですが、大体3種に分けて対応しています。良かったら参考にしてみて下さいね！<br/>
          ①個人的もしくは演奏とは関係のない要望→全てお受けすると際限がないのでお受けできませんすみません🙇‍♂️<br/>
          つづく→
        </p>
        &mdash; ござ 🎹 (@gprza) 
        <OutboundLink href="https://twitter.com/gprza/status/1306804373377314816?ref_src=twsrc%5Etfw">
          September 18, 2020
        </OutboundLink>
      </blockquote>
      <blockquote class="twitter-tweet">
        <p lang="ja" dir="ltr">
          全ての要望に対して逐一実施しないと不公平が生じるため実施の予定はありませんすみません🙇‍♂️<br/>
          ③演奏を視聴するという放送の主眼において明らかに合理的と判断できるご要望→実現した結果(合理的かどうかは別として)反対意見や不満でチャット欄の空気が悪くならなそうならばお受けできます<br/>
          続く→
        </p>
        &mdash; ござ 🎹 (@gprza) 
        <OutboundLink href="https://twitter.com/gprza/status/1306806587357425664?ref_src=twsrc%5Etfw">
          September 18, 2020
        </OutboundLink>
      </blockquote>
    </p>
    <h3>過去のライブ配信を見たい</h3>
    <p>
      ライブ配信した動画は数時間～数日の間にメンバーシップ以外は閲覧不可になってしまう。<br/>
      過去の配信動画を見るためにはメンバーシップに加入する必要がある。<br/>
      メンバーシップに加入すると過去１ヶ月間、もしくは全ての配信動画を閲覧可能。<br/>
    </p>
    <h3>メンバーシップに加入したい</h3>
    <p>
      メンバーシップの内容は以下の通り。<br/>
      <ul class="list">
        <li>お菓子プラン(SnackPlan) ￥490/月  過去一ヶ月間のアーカイブを視聴可能。</li>
        <li>ラーメンプラン(FoodPlan) ￥990/月  全てのアーカイブを視聴可能。</li>
        <li>グランドピアノプラン GrandPianoPlan ￥2,990/月  ラーメンプランと同じ。いっぱい応援したい人向け。</li>
      </ul>
      メンバーシップへの加入方法は以下を参照すると良い。<br/>
      <ul class="tag">
        <li>【参考ページ】<OutboundLink to="https://news.mynavi.jp/article/20201130-1350177/" target="_blank" rel="noopener">YouTube メンバーシップとは? 支払い方法や退会方法を解説</OutboundLink></li>
      </ul>
      ただし、iPhoneの場合は手順がやや複雑なため注意が必要。<br/>
      <ul class="tag">
        <li>【参考ページ】<OutboundLink to="https://did2memo.net/2019/09/02/youtube-channel-member-iphone/" target="_blank" rel="noopener">YouTube メンバーシップとは? 【YouTube】iPhoneからチャンネルの「メンバー登録」をする手順（メンバーになるボタンが表示されない問題の対策）</OutboundLink></li>
      </ul>
    </p>
    <h3>どこにどんな配信動画があるの？</h3>
    <p>
      ござファンの有志がアーカイブ案内表を作成したので参考にすると良い。<br/>
      <ul class="tag">
        <li><OutboundLink to="https://docs.google.com/spreadsheets/d/1TxDGZI-kCibS4e9OAA1Mukiu4lDwfrHN2quc86nfaIc/edit#gid=413512008" target="_blank" rel="noopener">ござさんアーカイブ案内所</OutboundLink><br/>
        <small>Created by <OutboundLink to="https://twitter.com/zan_ryur_goza" target="_blank" rel="noopener">ざん</OutboundLink></small></li>
      </ul>
      また、ござさん演奏回数ランキングも作成されているので、人気曲の目安にすると良い。<br/>
      <ul class="tag">
        <li><OutboundLink to="https://docs.google.com/document/d/e/2PACX-1vSipQ_mM6tbfaMDzLuN9pDXmsiRcsOIDyFOYCFOAUHq3Vi4SBNtZ5rUrbRMKdEN38LVy6Qz1ryiJXgr/pub" target="_blank" rel="noopener">ござさん演奏回数ランキング</OutboundLink><br/>
        <small>Created by <OutboundLink to="https://twitter.com/pinksaurs" target="_blank" rel="noopener">pinksaurs</OutboundLink></small></li>
        <li><OutboundLink to="https://docs.google.com/document/u/0/d/1rwMzJemS9vd9eCM7qFKfJ8--yNYvYP_NQOeypI1h3hc/mobilebasic" target="_blank" rel="noopener">ござさん演奏回数ランキング2021年</OutboundLink><br/>
        <small>Created by <OutboundLink to="https://twitter.com/pinksaurs" target="_blank" rel="noopener">pinksaurs</OutboundLink></small></li>
      </ul>
    </p>
  </Layout>
)

export default SecondPage
