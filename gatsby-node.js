const path = require(`path`);

exports.createPages = ({graphql, actions}) => {
  const { createPage } = actions;
  const blogPost = path.resolve(`src/templates/BlogPost.jsx`);

  return graphql(`
    query loadPagesQuery ($limit: Int!) {
      allMarkdownRemark(limit: $limit) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `, { limit: 1000 }).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    // Create blog post pages.
    result.data.allMarkdownRemark.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `${edge.node.frontmatter.path}`,
        component: blogPost,
      })
    })
  })
};
