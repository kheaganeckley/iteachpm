/** @jsx jsx */
import { jsx } from 'theme-ui'
import Pulse from 'react-reveal/Pulse'

const headerstyle = {
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontWeight: 'bold',
  color: 'trim',
}

const articlestyle = {
  width: '100%',
  fontFamily: 'Roboto',
  letterSpacing: '1px',
}

export default ({ title, children }) => (
  <Pulse>
    <article sx={articlestyle}>
      <h3 sx={headerstyle}>{title}</h3>
      {children}
    </article>
  </Pulse>
)
