import React from 'react';
import { useStaticQuery ,graphql } from 'gatsby';

import './blog.scss';

import BlogPreview from '../templates/BlogPreview';

export default function Blog() {
  const { allMarkdownRemark: { nodes: posts } } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          nodes {
            frontmatter {
              path
              title
              date(formatString: "MMMM DD, YYYY")
            }
            html
          }
        }
      }
    `
  );

  return (
    <div className='blog-grid'>
      {posts.map((x, y) => <BlogPreview key={y} frontmatter={x.frontmatter} /> )}
    </div>
  );
}
