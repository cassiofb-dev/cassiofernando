import React from 'react'
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import favicon from '../assets/images/favicons/light.png';

export default function Seo({title}) {
  const { site: { siteMetadata: seo } } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            lang
            title
            description
          }
        }
      }
    `
  );

  return (
    <Helmet
      htmlAttributes={{lang: seo.lang}}
      title={title || seo.title}
      link={ [ {rel: 'icon', href: favicon, type:'image/png'} ] }
      base={ {target: '_blank', rel: 'noreferrer noopener'} }
      meta={[
        {name: 'title', content: 'Cássio Fernando'},
        {name: 'description', content: 'Computer Scientist | Cientista da Computação'},
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: 'https://cassiofernando.netlify.app/'},
        {property: 'og:title', content: 'Cássui Fernando'},
        {property: 'og:description', content: 'Computer Scientist | Cientista da Computação'},
        {property: 'og:image', content: 'https://i.imgur.com/eyz4q0D.png'},
        {property: 'twitter:card', content: 'summary_large_image'},
        {property: 'twitter:url', content: 'https://cassiofernando.netlify.app/'},
        {property: 'twitter:description', content: 'Computer Scientist | Cientista da Computação'},
        {property: 'twitter:image', content: 'https://i.imgur.com/eyz4q0D.png'},
      ]}
    />
  );
}
