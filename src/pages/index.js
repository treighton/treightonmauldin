import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="container">
        <div className="row">
          <div className="col-qtr">
            <Image />
          </div>
          <div className="col">
            <h1>Let's digital!</h1>
            <p>
            Hi! I'm Treighton Mauldin. I am a developer, teacher, writer, aspiring personal trainer, and amateur photographer in Sacrmento, Ca. As a Web Developer, with about five years of experience with PHP, MySQL, JS, HTML, CSS, and WordPress, and over two years experience working with, and teaching React, Node, and MongoDB.
            </p>
          </div>
        </div>
      </div>
  </Layout>
)

export default IndexPage
