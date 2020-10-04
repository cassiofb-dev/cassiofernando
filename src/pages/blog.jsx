import React, { useState } from 'react';
import { useStaticQuery ,graphql } from 'gatsby';

import './blog.scss';

import BlogPreview from '../templates/BlogPreview';
import SEO from '../components/SEO';

export default function Blog() {
  const [state, setState] = useState({
    'lang': 'en',
    'tag': 'tags',
  });

  const { allMarkdownRemark: { nodes: posts } } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
          nodes {
            frontmatter {
              path
              date(formatString: "MMMM DD, YYYY")
              language
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

  const setTag = ({ target: {value} }) => {
    const newState = { ...state };
    newState.tag = value;
    setState(newState);
  }

  const setLang = ({ target: {value} }) => {
    const newState = { ...state };
    newState.lang = value;
    setState(newState);
  }

  const allTags = [...new Set(posts.map(post => post.frontmatter.tags).flat())].sort();
  const allLangs = [...new Set(posts.map(post => post.frontmatter.language))].sort();
  const mapLangs = {
    'en': 'english',
    'pt-BR': 'português',
  }

  const renderPosts = posts => {
    const rendered = posts.filter(
      post => {
        if(post.frontmatter.language !== state.lang) return false;
        if(state.tag === 'tags') return true;
        return post.frontmatter.tags.includes(state.tag);
      }
    ).map((x, y) => 
        <BlogPreview 
          key={y} 
          frontmatter={x.frontmatter} 
        /> 
    );

    return rendered.length > 0 ? rendered : state.lang === 'en'
      ? <h2>Tag in another language.</h2>
      : <h2>Tag em outro idioma.</h2>;
  };

  return (
    <div className="blog">
      <SEO title='Cassio Fernando | Blog' />
      <div className='selector-flex'>
        <select
          className='themed-select' 
          defaultValue='en'
          onChange={setLang}
        >
          {allLangs.map((x, y) => <option key={y} value={x}>{mapLangs[x]}</option>)}
        </select>
        <select
          className='themed-select' 
          defaultValue='tags'
          onChange={setTag}
        >
          <option value='tags'>tags</option>
          {allTags.map((x, y) => <option key={y} value={x}>{x}</option>)}
        </select>
      </div>
      <div className='blog-grid'>
        {renderPosts(posts)}
      </div>
    </div>
  );
}
