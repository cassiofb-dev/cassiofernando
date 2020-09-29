import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

export default function SEO({ description, language, metaImage, title, pathname }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
            keywords
            siteUrl
            metaImage
          }
        }
      }
    `
  );

  const pageTitle = title ? title : site.siteMetadata.title;
  const lang = language ? language : 'en';
  const metaDescription = description ? description : site.siteMetadata.description;
  const image = metaImage ? metaImage : site.siteMetadata.metaImage;
  const href = `${site.siteMetadata.siteUrl}${pathname || ''}`;

  return (
    <Helmet defer={false} title={pageTitle}>
      <html lang={lang} />
      <link rel='canonical' href={href} />
      <base target='_blank' rel='noreferrer noopener' />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={href} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={metaDescription}/>
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={href} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={metaDescription}/>
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

// Reference https://www.gatsbyjs.com/tutorial/seo-and-social-sharing-cards-tutorial/
