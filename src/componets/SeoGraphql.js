/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'

const queryseo = graphql`
  {
    site {
      siteMetadata {
        SEOdescription
        SEOkeywords
        description
        author
        image
        siteUrl
        themeColor
        title
        twitterUsername
      }
    }
  }
`

export default () => {
  const {
    site: {
      siteMetadata: {
        SEOdescription,
        SEOkeywords,
        description,
        author,
        image,
        siteUrl,
        themeColor,
        title,
        twitterUsername,
      },
    },
  } = useStaticQuery(queryseo)
  return (
    <Helmet>
      <html lang="en" amp />
      <title>{`${title} | ${description}`}</title>
      <meta name="description" content={SEOdescription} />
      <meta name="keywords" content={SEOkeywords} />
      <meta name="author" content={author} />
      <meta name="google-site-verification" content="QZ_Wpgkd0apczJIUu70cCeLZiQ8wJ21X8Hq4RlcQpNE" />
      {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"/> */}
      <meta name="theme-color" content={themeColor}></meta>
      {/* facebook cards */}
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={SEOdescription} />
      <meta property="og:image" content={`${siteUrl}${image}`} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="300" />
      <meta property="og:site_name" content={title} />
      {/* twitter card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={SEOdescription} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}
