module.exports = {
  pathPrefix: "/gatsby-portfolio",
  siteMetadata: {
    title: 'Theodore Pliakas - Portfolio',
    author: 'Theodore Pliakas',
    description: 'A Gatsby.js portfolio website by Theodore Pliakas',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'tpliakas.com',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
}
