require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'pminventions',
    description: 'Project managment courses',
    about:
      'IT IS ABOUT TIME TO TAKE YOUR NEXT STEP IN YOUR CAREER. MY COURSES ON PROJECT MANAGEMENT IS ABOUT CREATING DECISION MAKERS.',
    infoBoxes: [
      {
        name: 'About',
        description: 'This course prepares you for PMP® exam so that, once passed, you will be a certified project manger. This means that in the work place you can become the decision maker and not the one taking orders.',
      }, 
      {
        name: 'contact',
        description: 'I am available on (083) 264 7064. Otherwise, you are welcome to email me at davideckley88@gmail.com. I look foward to meeting you.',
      },
      {
        name: 'Pricing',
        description: 'R5000 for a 5 day fast track, or, 3 months evening class.',
      },
    ],
    author: 'kheagan',
    themeColor: '#232e36',
    SEOdescription:
      'IT IS ABOUT TIME TO TAKE YOUR NEXT STEP IN YOUR CAREER. MY COURSES ON PROJECT MANAGEMENT IS ABOUT CREATING DECISION MAKERS.',   
    SEOkeywords: 'David Eckley Project Management',
    About:
      'IT IS ABOUT TIME TO TAKE YOUR NEXT STEP IN YOUR CAREER. MY COURSES ON PROJECT MANAGEMENT IS ABOUT CREATING DECISION MAKERS.',   
    siteUrl: 'https://dpeckleyprojects.now.sh',
    twitterUsername: 'kheaganD',
    image: './Renovations-min.jpg',
    facebook: 'https://web.facebook.com/?_rdc=1&_rdr',
    twitter: 'https://twitter.com/dp_eckley',
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
            family: 'Roboto',
          },
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
        name: `Project managment inventions`,
        short_name: `PMINVENTIONS`,
        start_url: `/`,
        background_color: `#232e36`,
        theme_color: `#232e36`,
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
