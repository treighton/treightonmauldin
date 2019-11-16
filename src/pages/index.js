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

      </div>
      <div className="row my-4">
        <div className="col-6">
          <div className="col">
            <p className="accent-text">SACRAMENTO</p>
          </div>
          <h1 className="display-1">DEV<br />ELOP<br />ER</h1>
        </div>
        <div className="col">
          <p className="accent-frame">
            Hi! I'm Treighton Mauldin. I am a developer, teacher, writer,
            aspiring personal trainer, and amateur photographer in Sacrmento,
            Ca. As a Web Developer, with about five years of experience with
            PHP, MySQL, JS, HTML, CSS, and WordPress, and over two years
            experience working with, and teaching React, Node, and MongoDB.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>I bring a lot to the table...</h2>
          <p>
            Including in-depth knowledge of the WordPress ecosystem and how to
            use it creatively to solve a variety of problems, strong Javascript
            skills including node js, the current popular frontend ecosystem of
            React, Webpack, and Jest, jQuery (yep still proud of my jQuery
            skills) and my favorite flavor vanilla ES6, and although I'm not
            recreating classical art with pure HTML and CSS I write it with
            passion and attention to the details of accessibility and semantics.
            In addition to coding, I also have excellent communication skills
            and a business mindset that helps deliver profitable projects.
          </p>
          <Link to="/experience">See my Resume</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
