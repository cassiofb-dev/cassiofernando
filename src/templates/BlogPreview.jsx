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
      <p>Cássio Fernando - <small>{frontmatter.date}</small></p>
    </div>
  );
}
