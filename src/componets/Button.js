/** @jsx jsx */
import { jsx } from 'theme-ui'

export default props => (
  <button
    {...props}
    sx={{
      fontSize: '17px',
      textDecoration: 'none',
      borderRadius: '15px',
      outline: 'none',
      border: 'none',
      backgroundColor: 'trim',
      boxShadow: '0 8px 12px 0 rgba(0,0,0,0.2)',
      letterSpacing: '2px',
      textAlign: 'center',
      margin: '20px',
      color: 'white',
      padding: '15px',
      ':hover': {
        backgroundColor: 'black',
        color: 'white',
      },
    }}
  >
    {props.children}
  </button>
)
