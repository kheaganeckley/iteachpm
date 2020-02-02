/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FiFacebook, FiTwitter } from 'react-icons/fi'
import {useStaticQuery, graphql} from 'gatsby'


const query = graphql`
{
  site{
    siteMetadata{
      facebook
      twitter
    }
  }
}
`



const footerStyle = {
  fontSize: '20px',
  backgroundColor: 'footer',
  width: '100%',
  height: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}

const LinkStyle = {
  textDecoration: 'none',
  color: 'white',
}

export default () =>{

  const {site:{
    siteMetadata:{
      twitter,
      facebook
    }
  }} = useStaticQuery(query)



  return (
    <div sx={footerStyle}>
      <h3> I am on </h3>
      <a href={facebook} sx={LinkStyle}>
        facebook <FiFacebook />
      </a>
      <a href={twitter} sx={LinkStyle}>
        twitter <FiTwitter />
      </a>
    </div>
  )
} 