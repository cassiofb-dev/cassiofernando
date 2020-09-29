module.exports = {
  siteMetadata: {
    lang: 'en',
    author: 'Cassio Fernando',
    title: 'Cassio Fernando | Computer Scientist-Cientista da Computação',
    siteUrl: 'https://cassiofernando.netlify.app/',
    description: 'Cassio Fernando personal blog and portfolio website, made with Gatsby, React and SASS',
    metaImage: 'https://i.imgur.com/eyz4q0D.png',
    keywords: ['gatsby','react'],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/data`,
        name: 'blog',
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cássio Fernando`,
        short_name: `Fernando`,
        start_url: `/`,
        background_color: `#ccc`,
        theme_color: `#333`,
        display: 'minimal-ui',
        icon: 'src/assets/images/logo.png',
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/skills/`, `/projects/`, `/certificates/`],
      },
    },
  ],
};
