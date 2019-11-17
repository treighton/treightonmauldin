/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql, Link } from "gatsby"

import Header from "./header"
import "../assets/bootstrap/bootstrap.scss"
import "../assets/app.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="my-5">
        {children}
      </div>
      <div className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col text-center">
              <h2 className="display-2">Recent Projects</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-4 text-center">
              <div className="footer-link">
                <a target="_blank" href="https://soltrans.org">SOLTRANS</a>
              </div>
            </div>
            <div className="col-4 text-center">
              <div className="footer-link">
                <a target="_blank" href="https://farmvetco.org/hbh-search">HBH</a>
              </div>
            </div>
            <div className="col-4 text-center">
              <div className="footer-link">
                <a target="_blank" href="http://chi30.com">CHI30</a>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-4 black-box">
              <div className="colophon">

                <p>Site look and feel by <a href="https://brooke.helmstudio.co" className="">Brooke Campbell</a></p>
                <p>Site built with <a href="https://gatsbyjs.org">Gatsby</a></p>
                <p>Site hosted on <a href="https://netlify.com">Netlify</a></p>
              </div>
            </div>
            <div className="col-4 black-box text-center ">

            </div>
            <div className="col-4 black-box text-right align-items-end">
              <div className="colophon align-bottom">
                <p>Build with ❤ in Sacramento, CA by Tr8on</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
