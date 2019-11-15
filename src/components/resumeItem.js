import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const styledExperience = styled.li`
  list-style: none;
`

const resumeItem = props => {
  const { comapany, position, duration, location, description } = props

  return (
    <div className="card ">
      <div className="card-header">
        <div className="card-title">
          <h4>{comapany}</h4>
          <h5>
            <em>{position}</em>
          </h5>
        </div>
      </div>
      <div className="card-body">
        <div className="card-text">
          <p>
            <em>{duration}</em>
          </p>
          <p>
            <em>{location}</em>
          </p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default resumeItem
