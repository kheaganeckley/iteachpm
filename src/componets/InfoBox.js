/**@jsx jsx */
import { jsx } from 'theme-ui'
import Article from './article'

export default ({ children, title }) => (
  <div
    sx={{
      width: '70%',
      display: 'flex',
      flexDirection: 'column',
      margin: '20px',
      boxShadow: '9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px rgba(255,255,255, 0.5)',
      opacity: 1,
      backgroundColor: '#E0E5EC',//'backgroundGaintCard',
      borderRadius: '4px',
      padding: '20px',
      textAlign: 'center',
    }}
  >
    <Article title={title}>{children}</Article>
  </div>
)
