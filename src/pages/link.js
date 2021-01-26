import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="リンク" />
    <p>
      <Link to="https://gozapiano.com/">公式ホームページ(ブログ)はこちら</Link>
    </p>
  </Layout>
)

export default SecondPage
