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
      <meta name='description' content={seo.description} />
      <link rel='icon' href={favicon} type='image/png' />
      <base target='_blank' rel='noreferrer noopener'></base>
    </Helmet>
  );
}
