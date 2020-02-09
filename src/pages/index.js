/** @jsx jsx */
import { jsx } from 'theme-ui'
import LineStyle from '../componets/LineStyle'
import ANiHeader from '../componets/ANiHeader'
import { graphql } from 'gatsby'
import Footer from '../componets/footer'
import SeoGraphql from '../componets/SeoGraphql'
import Modal from '../componets/modal'
import { Fragment, useState } from 'react'
import Button from '../componets/Button'
import InfoBox from '../componets/InfoBox'
import Hero from '../componets/hero'
import {FiSearch} from 'react-icons/fi'


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
        fluid(maxWidth: 90){
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
      <Modal opacity={Model} TOGGLE={HANDLE_CLICK} />
      <div sx={layoutStyle}>
        <SeoGraphql />

        <ANiHeader
        >
          I
        <span sx={{
                 background: '-webkit-linear-gradient(#eee, #333)',
                 WebkitBackgroundClip: 'text',
                 WebkitTextFillColor: 'transparent'
        }}>TEACH</span>PM</ANiHeader>
        <LineStyle />

        <Hero fluid={fluid} about={about} />
        
        {infoBoxes.map(({ name, description }) => (
          <InfoBox key={name} title={name}>{description}</InfoBox>
        ))}
        
        <Button onClick={HANDLE_CLICK}> VIEW MORE <FiSearch/> </Button>
        <Footer />
      </div>
    </Fragment>
  )
}
