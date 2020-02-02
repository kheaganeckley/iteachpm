/** @jsx jsx */
import { jsx } from 'theme-ui'
import LineStyle from '../componets/LineStyle'
import ANiHeader from '../componets/ANiHeader'
import { graphql } from 'gatsby'
import Footer from '../componets/footer'
import SeoGraphql from '../componets/SeoGraphql'
import Curtian from '../componets/curtain'
import { Fragment, useState } from 'react'
import Button from '../componets/Button'
import InfoBox from '../componets/InfoBox'
import Hero from '../componets/hero'

// style

const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'background',
  color: 'text',
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

        <Hero fluid={fluid} about={about} />
        
        {infoBoxes.map(({ name, description }) => (
          <InfoBox key={name} title={name}>{description}</InfoBox>
        ))}
        
        <Button onClick={HANDLE_CLICK}> View more </Button>
        <Footer />
      </div>
    </Fragment>
  )
}
