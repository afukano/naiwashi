import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      //background: `rebeccapurple`,
      //background: 'rgb(115, 193, 118)',
      background: 'rgb(115, 163, 39)',
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          ござ(ピアノ演奏者)のホームページ
        </Link>
      </h1>
    <br/>
    <nav id="gnav">
      <ul>
        <li><Link to="/">Top</Link></li>
        <li><Link to="/new/">New!!</Link></li>
        <li><Link to="/movie/">おすすめ曲</Link></li>
        <li><Link to="/collabo/">コラボ</Link></li>
        <li><Link to="/live/">ライブ配信</Link></li>
        <li><Link to="/link/">リンク</Link></li>
      </ul>
    </nav>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
