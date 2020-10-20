import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/SEO';

import '../assets/scss/prism-tomorrow.scss';
import 'katex/dist/katex.min.css';

import './BlogPost.scss';

export default function BlogPost({ data: { markdownRemark: post} }) {

  return (
    <div className="blog-post">
      <SEO
        description={post.frontmatter.description}
        language={post.frontmatter.language}
        metaImage={post.frontmatter.metaImage}
        title={post.frontmatter.title}
        pathname={post.frontmatter.path}
      />
      <h1 className='title'>{post.frontmatter.title}</h1>
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
        date(formatString: "MMMM DD, YYYY")
        language
        title
        description
        metaImage
      }
      html
    }
  }
`
