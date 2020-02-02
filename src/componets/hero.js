/** @jsx jsx */
import { jsx } from 'theme-ui'
import Img from 'gatsby-image'

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


export default ({fluid, about}) => (
    <div sx={heroStyle}>
        <Img sx={imageStyle} fluid={fluid} />
        <q sx={herodescription}>{about}</q>
    </div>
)