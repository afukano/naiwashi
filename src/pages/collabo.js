import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="コラボ" />
    <h2>【告知あり】なにかとても楽しくなる予感の放送をします【すごいと思う】</h2>
    <p>情熱大陸 / かてぃん</p>
    <p><iframe width="501" height="282" src="https://www.youtube.com/embed/GOs0KyBD47A?t=5160" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
  </Layout>
)

export default SecondPage
