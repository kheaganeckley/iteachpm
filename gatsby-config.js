require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: 'I teach PM',
    description: 'Project managment courses',
    about:
      'It is about time to take your next step in YOUR CAREER. My course on PROJECT MANAGEMENT will make you a DECISION MAKER.',
    infoBoxes: [
      {
        name: 'About',
        description: 'This course prepares you for PMP® exam so that, once passed, you can become a certified project manger. In the work place, this means that you will be a decision maker and not the one taking orders.',
      }, 
      {
        name: 'Pricing',
        description: 'It is R6000 for a 5 day fast track, or alternativly, R6000 for 3 months evening classes.',
      },
      {
        name: 'contact',
        description: 'I am available on (083) 264 7064. Otherwise, you are welcome to email me at davideckley88@gmail.com. I look foward to meeting you.',
      },
    ],
    author: 'kheagan',
    themeColor: '#5e0808',//'#267dbb',
    SEOdescription:
      'IT IS ABOUT TIME TO TAKE YOUR NEXT STEP IN YOUR CAREER. MY COURSES ON PROJECT MANAGEMENT IS ABOUT CREATING DECISION MAKERS.',   
    SEOkeywords: 'David Eckley Project Management',
    About:
      'IT IS ABOUT TIME TO TAKE YOUR NEXT STEP IN YOUR CAREER. MY COURSES ON PROJECT MANAGEMENT IS ABOUT CREATING DECISION MAKERS.',   
    siteUrl: 'https://iteachpm.com',
    twitterUsername: 'kheaganD',
    image: './DAD.jpg',
    facebook: 'https://web.facebook.com/?_rdc=1&_rdr',
    twitter: 'https://twitter.com/dp_eckley',
  },
  plugins: [
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: 'UA-155301000-1',
    //   },
    // },
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
        short_name: `ITeachPM`,
        start_url: `/`,
        background_color: '#5e0808', // `#267dbb`,
        theme_color: '#5e0808',//`#267dbb`,
        display: `standalone`,
        icon: `src/images/DPECKLEYPROJECTS500.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://iteachpm.com',
        sitemap: 'https://iteachpm.com/sitemap.xml',
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
