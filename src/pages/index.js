import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<div className="container">
			<div className="row my-4">
				<div className="col-md-6">
					<p className="accent-text">SACRAMENTO</p>
					<h1 className="display-1">
						DEV
            <br />
						ELOP
            <br />
						ER
          </h1>
				</div>
				<div className="col-md-6">
					<p className="accent-frame">
						Hi! I'm Treighton Mauldin. I am a{" "}
						<span className="highlight">developer, teacher, writer</span>,
						aspiring personal trainer, and amateur photographer in Sacramento,
            Ca. As a Web Developer, with about{" "}
						<span className="highlight">five years of experience</span> with
            PHP, MySQL, JavaScript, HTML, CSS, and WordPress, and{" "}
						<span className="highlight">
							over two years experience working with, and teaching
            </span>{" "}
						React, Node, and MongoDB.
          </p>
					<div className="read-on">
						<h3 className="display-2 text-right">
							<em>REACT</em>
						</h3>
						<h3 className="display-2">
							<em>NODE</em>
						</h3>
						<h3 className="display-2 text-right">
							<em>PHP</em>
						</h3>
					</div>
				</div>
			</div>
			<div className="row mb-5">
				<div className="col">
					<p className="accent-text-alt">
						<span className="accent-frame">LET'S</span> GET D1G1TAL
          </p>
				</div>
			</div>
		</div>
	</Layout>
)

export default IndexPage
