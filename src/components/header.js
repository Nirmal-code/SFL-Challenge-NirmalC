import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
      class="nav-items"
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>

      <div class="nav-links">
        
         <h4 style={{ margin: 0}} class="home">
          <Link to="/" style={{color:'white', textDecoration: 'none'}}>Home</Link>
        </h4>

        <h4 style={{ margin: 0}} class="page2">
          <Link to="/page-2/" style={{color:'white', textDecoration: 'none'}}>Page2</Link>
        </h4>

        <h4 style={{ margin: 0}} class="typescript">
          <Link to="/using-typescript/" style={{color:'white', textDecoration: 'none'}}>TypeScript</Link>
        </h4>

      </div>

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
