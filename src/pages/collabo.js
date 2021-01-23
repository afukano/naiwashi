import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="コラボ" />
    <h2>【告知あり】なにかとても楽しくなる予感の放送をします【すごいと思う】 / 事務員G</h2>
    <p>情熱大陸 / かてぃん(1:26:00～)</p>
    <p>
      <iframe width="501" height="282" src="https://www.youtube.com/embed/GOs0KyBD47A?t=5160" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </p>
    <h2>【ゲストたくさん】スタジオからグランドピアノでお送りします！ / 事務員G</h2>
    <p>シロナ戦(ポケモンDP) / 瀬戸一王(1:32:52～)</p>
    <p>
      <iframe width="501" height="282" src="https://www.youtube.com/embed/YVj3qWC2Hn8?t=5572" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </p>
  </Layout>
)

export default SecondPage
