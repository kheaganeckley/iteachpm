/** @jsx jsx */
import { jsx } from 'theme-ui'
import { FiFacebook, FiTwitter } from 'react-icons/fi'

const footerStyle = {
  fontSize :  '20px',
  backgroundColor: 'footer',
  width: '100%',
  height: '50px',
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center'
}


export default () => (
  <div
  sx={footerStyle}
  >
    i am on 
    facebook
    <FiFacebook />
    and 
    twitter
    <FiTwitter />
  </div>
)
