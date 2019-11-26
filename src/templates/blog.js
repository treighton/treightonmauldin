import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default ({ data }) => {
  const post = data.wordpress.post
  console.log(post)
  return (
    <Layout>
      <div className="container">
        <h1>{post.title}</h1>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($post_id: ID!) {
    wordpress {
      post(id: $post_id) {
        id
        title
        content
        date
        slug
      }
    }
  }
`
