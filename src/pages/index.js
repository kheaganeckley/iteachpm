/** @jsx jsx */
import { jsx } from 'theme-ui'
import LineStyle from '../componets/LineStyle'
import ANiHeader from '../componets/ANiHeader'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Footer from '../componets/footer'
import SeoGraphql from '../componets/SeoGraphql'
import Curtian from '../componets/curtain'
import { Fragment, useState } from 'react'
import Button from '../componets/Button'
import InfoBox from '../componets/InfoBox'

// style

const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'background',
  color: 'text',
}

const gaintCardStyle = {
  width: '90%',
  display: 'flex',
  flexDirection: 'column',
  margin: '10px',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  opacity: 0.8,
  backgroundColor: 'backgroundGaintCard',
  borderRadius: '15px',
  padding: '20px',
  textAlign: 'center',
}

const imageStyle = {
  width: '90px',
  height: '100px',
  borderRadius: '50%',
}

const heroStyle = {
  width: '100%',
  height: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const herodescription = {
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontWeight: 'bold',
  color: 'trim',
  fontFamily: ' Russo One',
  textAlign: 'center',
  width: '60%',
  marginTop: '10px',
}

//queries
export const query = graphql`
  query MyImageQuery {
    file(relativePath: { eq: "DAD.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    site {
      siteMetadata {
        infoBoxes {
          name
          description
        }
        about
      }
    }
  }
`

//react componet
export default ({
  data: {
    site: {
      siteMetadata: { infoBoxes, about },
    },
    file: {
      childImageSharp: { fluid },
    },
  },
}) => {
  const [Model, setModel] = useState(0)

  const HANDLE_CLICK = () => setModel(prevState => (prevState === 1 ? 0 : 1))

  return (
    <Fragment>
      <Curtian opacity={Model} TOGGLE={HANDLE_CLICK} />
      <div sx={layoutStyle}>
        <SeoGraphql />

        <ANiHeader>
          PM<span sx={{ color: 'trim' }}>I</span>NVENTIONS
        </ANiHeader>
        <LineStyle />

        <div sx={heroStyle}>
          <Img sx={imageStyle} fluid={fluid} />
          <q sx={herodescription}>{about}</q>
        </div>

        {infoBoxes.map(({ name, description }) => (
          <InfoBox title={name}>{description}</InfoBox>
        ))}
        <Button onClick={HANDLE_CLICK}> View more </Button>
        <Footer />
      </div>
    </Fragment>
  )
}
