import { Link } from "gatsby"
import PropTypes from "prop-types"

import React from "react"



const Header = ({ siteTitle }) => (
  <header className="header">
    <div>
      <div className="container">
        <div className="row py-5">
          <div className="col text-right">
            <Link className="small link__light" to="/experience">RESUME </Link>

            <a className="small link__light" href="https://github.com/treighton">// GITHUB</a>
          </div>
        </div>
        <div className="row pb-5">
          <div className="col">
            <h1 style={{ margin: 0 }}>
              <Link
                to="/"
                style={{
                  color: `#ffffff`,
                  textDecoration: `none`,
                }}
              >
                Tr8on <span className="thin">MAULDIN</span>
              </Link>
            </h1>
          </div>
        </div>
        {/* <div className="row py-5 justify-content-end">
          <div className="col-2 text-center">
            <Link className="link__dark">WORK</Link>
          </div>
          <div className="col-2 text-center">
            <Link className="link__dark">NERD SHIT</Link>
          </div>
          <div className="col-2 text-center">
            <Link className="link__dark">GITHUB</Link>
          </div>
        </div> */}
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
