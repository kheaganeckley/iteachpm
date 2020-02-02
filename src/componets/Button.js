/** @jsx jsx */
import { jsx } from 'theme-ui'

export default props => (
  <button
    {...props}
    sx={{
      fontSize: '17px',
      textDecoration: 'none',
      borderRadius: '6px',
      outline: 'none',
      border: 'none',
      backgroundColor: 'trim',
      boxShadow: '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)',
      letterSpacing: '2px',
      textAlign: 'center',
      margin: '20px',
      color: 'white',
      cursor: 'pointer',
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
