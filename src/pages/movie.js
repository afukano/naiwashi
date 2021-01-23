import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="代表曲" />
    <h3>ルパン三世のテーマ '80 / Lupin the Third '80 (Piano Cover)</h3>
    <p><iframe width="501" height="282" src="https://www.youtube.com/embed/mXPXNeLwd1k" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
    <h3>Tank!(カウボーイビバップ / Cowboy Bebop OP) Piano cover</h3>
    <p><iframe width="501" height="282" src="https://www.youtube.com/embed/uA2PECsJROA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
    <h3>neu (ニエンテ)を弾いてみた　(piano cover)</h3>
    <p><iframe width="501" height="282" src="https://www.youtube.com/embed/vs06K1Le5H4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
  </Layout>
)

export default SecondPage
