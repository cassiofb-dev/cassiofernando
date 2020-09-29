import React, { useState } from 'react';
import { useStaticQuery ,graphql } from 'gatsby';

import './blog.scss';

import BlogPreview from '../templates/BlogPreview';
import SEO from '../components/SEO';

export default function Blog() {
  const [tag, setTag] = useState('tags');

  const { allMarkdownRemark: { nodes: posts } } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          nodes {
            frontmatter {
              path
              date(formatString: "MMMM DD, YYYY")
              author
              title
              description
              tags
            }
            html
          }
        }
      }
    `
  );

  const allTags = [...new Set(posts.map(post => post.frontmatter.tags).flat())].sort();

  return (
    <div className="blog">
      <SEO title='Blog' />
      <div className='selector-flex'>
        <select
          className='themed-select' 
          defaultValue='tags'
          onChange={(event) => setTag(event.target.value)}
        >
          <option value='tags'>tags</option>
          {allTags.map((x, y) => <option key={y} value={x}>{x}</option>)}
        </select>
      </div>
      <div className='blog-grid'>
        {posts.filter(post => {
          return tag === 'tags' ? true : post.frontmatter.tags.includes(tag);
        }).map((x, y) => <BlogPreview key={y} frontmatter={x.frontmatter} /> )}
      </div>
    </div>
  );
}
