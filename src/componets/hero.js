/** @jsx jsx */
import { jsx } from 'theme-ui'
import Img from 'gatsby-image'

const imageStyle = {
    width: '90px',
    height: '110px',
    minWidth : '90px',
    maxWidth : '90px',
    minHeight : '100px',
    borderRadius: '50%',
    // borderSize : '5px',
    // borderStyle : 'solid',
    // borderColor: 'trim',
    paddingLeft: '10px'
  }
  
  const heroStyle = {
    width: '100%',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const herodescription = {
    //textTransform: 'uppercase',
    letterSpacing: '2px',
    fontWeight: 900,
    color: 'trim',
    fontFamily: ' Roboto',
    textAlign: 'center',
    width: '60%',
    marginTop: '10px',
    fontSize: 'large'
  }


export default ({fluid, about}) => (
    <div sx={heroStyle}>
        <Img sx={imageStyle} fluid={fluid} />
        <hr sx={{
          width: '70%',
          borderColor: 'trim'
        }}/>
        <q sx={herodescription}>{about}</q>
        <hr sx={{
          width: '50%',
          borderColor: 'trim'
        }}/>
    </div>
)