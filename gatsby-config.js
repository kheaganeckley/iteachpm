require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    SEOdescription:
      'I specialise in Home Improvement, Electrical, (HVAC) Air Conditioning and Ventilation, (LPG) Liquid Petroleum Gas installations, and TIG welding.',
    SEOkeywords: 'Eckley Air Conditioning ',
    About:
      'I specialise in Home Improvement, Electrical, (HVAC) Air Conditioning and Ventilation, (LPG) Liquid Petroleum Gas installations,and TIG welding. So give me a call on 083 264 7064 so that I can help you out. Please explore the website further to see some of my work.',
    siteUrl: 'https://dpeckleyprojects.now.sh',
    twitterUsername: 'kheaganD',
    image: './Renovations-min.jpg',
    social: [
      {
        name: 'Facebook',
        link: 'https://web.facebook.com/?_rdc=1&_rdr',
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com/dp_eckley',
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-155301000-1',
      },
    },
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-playground`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Russo One`,
          },
          {
            family: 'Roboto'
          }
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Daivd Eckley Projects`,
        short_name: `D.E.P.`,
        start_url: `/`,
        background_color: `black`,
        theme_color: `black`,
        display: `minimal-ui`,
        icon: `src/images/DPECKLEYPROJECTS500.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://davideckleyprojects.now.sh',
        sitemap: 'https://davideckleyprojects.now.sh/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content/`,
      },
    },
    `gatsby-plugin-mdx`,
  ],
}
