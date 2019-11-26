const path = require("path")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    {
      wordpress {
        posts {
          edges {
            node {
              id
              title
              excerpt
              date
              slug
              author {
                id
                name
              }
            }
          }
        }
      }
    }
  `).then(res => {
    console.log(JSON.stringify(res))
    res.data.wordpress.posts.edges.forEach(({ node }) => {
      createPage({
        path: node.slug,
        component: path.resolve(`./src/templates/blog.js`),
        context: {
          title: node.title,
          post_id: node.id,
        },
      })
    })
  })
}
