import React from 'react'
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import favicon from '../assets/images/favicons/light.png';

export default function Seo() {
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
    <Helmet>
      <html lang={seo.lang} />
      <title>{seo.title}</title>
      <link rel='icon' href={favicon} type='image/png' />
      <base target='_blank' rel='noreferrer noopener'></base>
      
      <meta name="title" content="Cássio Fernando" />
      <meta name="description" content="Computer Scientist | Cientista da Computação" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://cassiofernando.netlify.app/" />
      <meta property="og:title" content="Cássio Fernando" />
      <meta property="og:description" content="Computer Scientist | Cientista da Computação" />
      <meta property="og:image" content="/cassiofernando.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://cassiofernando.netlify.app/" />
      <meta property="twitter:title" content="Cássio Fernando" />
      <meta property="twitter:description" content="Computer Scientist | Cientista da Computação" />
      <meta property="twitter:image" content="/cassiofernando.png" />
    </Helmet>
  );
}
