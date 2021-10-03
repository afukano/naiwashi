import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: 'rgb(115, 163, 39)',
    }}
  >
    <div id="gnav_div"
      style={{
        position: `fixed`, 
        background: 'rgb(115, 163, 39)',
        width: `100%`,
        margin: `0 auto`,
        minHeight: `60px`,
        zIndex: `10`,
      }}
    >
      <nav id="gnav"
        style={{
          maxWidth: 960,
          margin: `0 auto`,
        }}
      >
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
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        marginBottom: `1.45rem`,
      }}
    >
      <p id="header_padding" style={{
          margin: 0,
          color: `white`,
          textDecoration: `none`,
        }}
      >
        &nbsp;
      </p>
      <h1 style={{ margin: 0,
        paddingTop: `30px`, }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          ござ(ピアノ演奏者)の非公式ホームページ
        </Link>
      </h1>
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
