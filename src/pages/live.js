import React from "react"
import { Link } from "gatsby"

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
          src="https://www.youtube.com/embed/3762IU8rrTg" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen
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
      <a href="https://www.youtube.com/channel/UC2Kb6k-aGIaKxlNPkrdcoHA">Youtubeチャンネル</a>はこちら<br/>
      【参考ページ】<Link to="https://weekly.ascii.jp/elem/000/001/634/1634383/">YouTube「チャンネル登録」「通知設定」をする意味とメリット</Link><br/>
      <br/>
      そこで、ござのTwitterアカウントをフォローし、通知設定をONにしておくことをおすすめする。<br/>
      <blockquote class="twitter-tweet">
        <p lang="ja" dir="ltr">
          今晩2230以降にかけて新年初配信があるかもとの見方も🤏🤏🤏
        </p>
        &mdash; ござ 🎹 (@gprza) 
        <a href="https://twitter.com/gprza/status/1348597702674714625?ref_src=twsrc%5Etfw">
          January 11, 2021
        </a>
      </blockquote>
      遅くともライブ配信の数時間前には、ライブ配信をする旨ツイートしてくれる。<br/>
      <a href="https://twitter.com/gprza">Twitter</a>はこちら<br/>
    </p>
    <h3>過去のライブ配信をもっと見たい</h3>
    <p>
      ライブ配信した動画は数時間～数日の間にメンバーシップ以外は閲覧不可になってしまう。<br/>
      過去の配信動画を見るためにはメンバーシップに加入する必要がある。<br/>
      メンバーシップに加入すると過去１ヶ月間、もしくは全ての配信動画を閲覧可能。<br/>
      【参考ページ】<Link to="https://news.mynavi.jp/article/20201130-1350177/">YouTube メンバーシップとは? 支払い方法や退会方法を解説</Link><br/>
      <small>※iPhoneは加入方法が分かりづらいとの情報あり</small><br/>
      メンバーシップの内容は以下の通り。<br/>
      <ul>
        <li>お菓子プラン(SnackPlan) ￥490/月  過去一ヶ月間のアーカイブを視聴可能。</li>
        <li>ラーメンプラン(FoodPlan) ￥990/月  全てのアーカイブを視聴可能。</li>
        <li>グランドピアノプラン GrandPianoPlan ￥2,990/月  ラーメンプランと同じ。いっぱい応援したい人向け。</li>
      </ul>
    </p>
    <h3>どこにどんな配信動画があるの？</h3>
    <p>
      ござファンの有志がアーカイブ案内表を作成したので参考にすると良い。<br/>
      <Link to="https://docs.google.com/spreadsheets/d/1TxDGZI-kCibS4e9OAA1Mukiu4lDwfrHN2quc86nfaIc/edit#gid=413512008">ござさんアーカイブ案内所</Link><br/>
      <small>Created by <Link to="https://twitter.com/zan_ryur_goza">ざん</Link></small><br/>
    </p>
  </Layout>
)

export default SecondPage