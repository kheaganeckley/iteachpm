/** @jsx jsx */
import { jsx } from 'theme-ui'


const headerstyle ={
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontWeight:'bold'
}

const articlestyle ={
  margin : '10px',
  marginLeft : '30px',
  width: '100%',
  fontFamily: 'Roboto',
  letterSpacing: '1px'
}





export default ({ title, children }) => (
  <article
    sx={articlestyle}
  >
    <h3
      sx={headerstyle}
    >
      {title}
    </h3>
    {children}
  </article>
)
