const path = require(`path`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const overviewTemplate = path.resolve(`src/templates/overviewTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    return result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: overviewTemplate,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
