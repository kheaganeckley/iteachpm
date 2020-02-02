/**@jsx jsx */
import { jsx } from 'theme-ui'
import Article from './article'

export default ({ children, title }) => (
  <div
    sx={{
      width: '70%',
      display: 'flex',
      flexDirection: 'column',
      margin: '10px',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      opacity: 0.8,
      backgroundColor: 'backgroundGaintCard',
      borderRadius: '15px',
      padding: '20px',
      textAlign: 'center',
    }}
  >
    <Article title={title}>{children}</Article>
  </div>
)
