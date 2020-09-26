module.exports = {
  siteMetadata: {
    lang: 'en',
    title: 'Cassio Fernando | Computer Scientist',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
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
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/skills/`, `/projects/`, `/certificates/` ,`/blog/`],
      },
    },
  ],
};
