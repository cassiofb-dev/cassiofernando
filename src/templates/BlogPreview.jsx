import React from 'react';
import { Link } from 'gatsby';

import './BlogPreview.scss';

export default function BlogPreview({ frontmatter }) {
  return (
    <div className='blog-preview'>
      <Link className='themed-link' to={frontmatter.path}>
        <h2>{frontmatter.title}</h2>
      </Link>
      <hr/>
      <p>{frontmatter.description}</p>
      <hr/>
      <p>{frontmatter.author} - <small>{frontmatter.date}</small></p>
      <hr/>
      <div className="tags-grid">
        {
          frontmatter.tags.map((x, y) => 
          <div key={y} className="tag">
            <p className="themed-link">{x}</p>
          </div>)
        }
      </div>
    </div>
  );
}
