/** @jsx jsx */
import { jsx } from 'theme-ui'
import { graphql, useStaticQuery } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Article from './article'
import { FiXCircle } from 'react-icons/fi'
import Button from './Button'

const curtainStyle = {
  width: '100%',
  height: '100%',
  position: 'fixed',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
}

const query = graphql`
  {
    allMdx {
      edges {
        node {
          frontmatter {
            title
            rank
          }
          body
        }
      }
    }
  }
`

export default ({ opacity, TOGGLE }) => {
  const {
    allMdx: { edges },
  } = useStaticQuery(query)

  if (opacity === 0) return null

  return (
    <div sx={curtainStyle}>
      <Button
        onClick={TOGGLE}
        sx={{ backgroundColor: 'modal', color: 'modalText' }}
      >
        <FiXCircle
          sx={{
            height: '30px',
            width: '30px',
          }}
        />
      </Button>

      <div
        sx={{
          overflowY: 'scroll',
          backgroundColor: 'modal',
          color: 'modalText',
          height: '400px',
          width: '50%',
          minWidth: '350px',
          opacity,
          borderRadius: '50px',
          padding: '20px',
        }}
      >
        {edges.map(({ node: { frontmatter: { title }, body } }) => (
          <Article key={title} title={title}>
            <MDXRenderer>{body}</MDXRenderer>
          </Article>
        ))}
      </div>
    </div>
  )
}
