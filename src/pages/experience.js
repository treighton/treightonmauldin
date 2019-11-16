import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ResumeItem from "../components/resumeItem"

const resume = [
  {
    company: "Trilogy Education Services, Inc.",
    position: "Instructor",
    duration: "January 2018 - Present",
    location: "Sacramento, CA",
    description:
      "As one of 2 leader instructors, per cohort, at UC Davis Coding Bootcamp I teach groups of 10-60 students Fullstack Web Development using isomorphic javascript and MongoDB.  It is my responsibility to ensure that the curriculum is being taught thoroughly, and consistently, as well as monitor the students performance, and class KPI's gathered from weekly surveys. I have also lead extra curricular workshops and webinars that explore topics more in depth than in a standard class.",
  },
  {
    company: "Page Design Group",
    position: "Lead Full Stack Developer",
    duration: "January 2016 - Present",
    location: "Sacramento, CA",
    description:
      "My responsibilities including architecting and leading a small team of developers in implementing solutions for a variety of clients. In addition I am responsible for estimating, and managing projects ensuring that the projects stay in scope, on schedule, and on budget.  I have also lead initiatives in adopting modern web development practices including version control with git, headless WordPress, dependency management with composer, and continuous deployment with gitlab.",
  },
  {
    company: "Freelance",
    position: "Full Stack Developer",
    duration: "July 2014 - Present",
    location: "The World",
    description:
      "I have worked with many different types of businesses as a contractor designing and building websites for startups, political campaigns, small business, and genetic research labs. ",
  },
  {
    company: "WireFlare",
    position: "Web Developer",
    duration: "July 2015 - April 2016 ",
    location: "Sacramento, CA",
    description:
      "As a Web developer at WireFlare i was responsible for designing and building custom themes and plugins for WordPress and Magento.",
    dev: "",
  },
  {
    company: "idmloco",
    position: "Web development intern",
    duration: "February 2015 - July 2015",
    location: "Sacramento",
    description:
      "I was responsible for building static HTML & CSS versions of photoshop mockups, and maintaining custom WordPress themes and plugins.",
    dev: "",
  },
  {
    company: "Spryling",
    position: "Co Founder",
    duration: "November 2014 - August 2015",
    location: "Sacramento",
    description:
      "I was a Co-Founder of Spryling. Spryling was a Construction Technology Start Up focusing on streamlining the way that project documents are shared, accessed, and controlled. My role consisted of product management and industry relations",
    dev: "",
  },
]

const experience = () => (
  <Layout>
    <SEO title="Web Development Experience" />
    <div className="container">
      <div className="row mt-5">
        <div className="col">

        </div>
      </div>
      <div className="row mb-5">
        <div className="col-md-6">
          <p className="accent-text small">MY STORY</p>
          <h1><span className="display-1">Res<br />ume</span></h1>
        </div>
        <div className="col-md-6 push origin ">
          <div className="accent-frame">
            <p>
              Including in-depth knowledge of the <span className="highlight">WordPress ecosystem</span> and how to use it creatively to solve a variety of problems, strong <span className="highlight"> Javascript</span> skills including node js, the current popular frontend ecosystem of <span className="highlight">React</span>, Webpack, and Jest, <span className="highlight">jQuery</span> (yep still proud of my jQuery skills), and although I'm not                   recreating classical art with pure HTML and CSS I write it with passion and attention to the details of <span className="highlight">accessibility</span> and semantics.
            In addition to coding, I also have <span className="highlight">excellent communication skills</span>
              and a business mindset that helps deliver profitable projects.
          </p>
          </div>
        </div>
      </div>
      <div className="card-columns">
        {resume.map(item => (
          <ResumeItem
            comapany={item.company}
            position={item.position}
            duration={item.duration}
            location={item.location}
            description={item.description}
          />
        ))}
      </div>
    </div>
  </Layout>
)

export default experience
