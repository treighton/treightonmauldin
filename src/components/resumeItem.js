import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const resumeItem = props => {
  const { comapany, position, duration, location, description } = props

  return (
    <li>
      <p>
        <strong>{comapany}</strong>
      </p>
      <p>{position}</p>
      <p>{duration}</p>
      <p>{location}</p>
      <p>{description}</p>
    </li>
  )
}

export default resumeItem
