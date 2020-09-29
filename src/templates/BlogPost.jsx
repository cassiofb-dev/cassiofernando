import React from 'react';
import { graphql } from 'gatsby';

import './BlogPost.scss';

import SEO from '../components/SEO';

export default function BlogPost({ data: { markdownRemark: post} }) {

  return (
    <div className="blog-post">
      <SEO title={post.frontmatter.title}/>
      <h2 className='title'>{post.frontmatter.title}</h2>
      <hr/>
      <div className='markdown' dangerouslySetInnerHTML={{ __html: post.html }}></div>
      <hr/>
      <p className='date'>{post.frontmatter.date}</p>
    </div>
  );
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      frontmatter {
        path
        title
        date(formatString: "MMMM DD, YYYY")
      }
      html
    }
  }
`
