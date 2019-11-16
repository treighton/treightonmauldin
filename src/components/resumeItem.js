import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"

const resumeItem = props => {
  const { comapany, position, duration, location, description } = props

  return (
    <div className={`card  ${props.active ? 'active' : ''}`} onClick={() => props.handleClick(props.id)}>
      <div className={`card-header`}>
        <div className="card-title">
          <div className="d-flex w100 justify-content-between">
            <h4>{comapany}</h4>
            <small className="text-right"><em> {duration}</em></small>
          </div>
          <h5>
            <em>{position}</em>
          </h5>
        </div>
      </div>
      <div className={`card-body collapse ${props.active ? 'show' : ''}`}>
        <div className="card-text">
          <p>

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
