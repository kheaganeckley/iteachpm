/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FiFacebook, FiTwitter } from 'react-icons/fi'

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

export default () => (
  <div sx={footerStyle}>
    <h3> I am on </h3>
    <a href="https://twitter.com/pminventions" sx={LinkStyle}>
      facebook <FiFacebook />
    </a>
    <a href="https://www.facebook.com/PMINVENTIONS/" sx={LinkStyle}>
      twitter <FiTwitter />
    </a>
  </div>
)
