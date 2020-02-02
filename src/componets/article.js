/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Zoom } from 'react-reveal'

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
  <Zoom>
    <article sx={articlestyle}>
      <h3 sx={headerstyle}>{title}</h3>
      {children}
    </article>
  </Zoom>
)
