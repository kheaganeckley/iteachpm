/** @jsx jsx */
import { jsx } from 'theme-ui'
import Article from '../componets/article'
import LineStyle from '../componets/LineStyle'
import ANiHeader from '../componets/ANiHeader'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import Footer from '../componets/footer'
import { MDXRenderer } from 'gatsby-plugin-mdx'

// style

const layoutStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'background',
  color: 'text',
}

const ArticleLayoutStyle = {
  width: '80%',
  display: 'flex',
  flexWrap: 'wrap',
  flexDirection: 'row',
  margin: '25px',
}

const imageStyle = {
  width: '40%',
  height: '40%',
  borderRadius: '50%',
  marginRight: '40px',
}

//queries
export const query = graphql`
  query MyImageQuery {
    file(relativePath: { eq: "DAD.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
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

//react componet
export default ({
  data: {
    allMdx: { edges },
    file: {
      childImageSharp: { fluid },
    },
  },
}) => (
  <div sx={layoutStyle}>
    <ANiHeader>
      PM<span sx={{ color: 'trim' }}>I</span>NVENTIONS
    </ANiHeader>
    <LineStyle />
    <div sx={ArticleLayoutStyle}>
      <Img sx={imageStyle} fluid={fluid} />
      {edges.map(({ node: { frontmatter: { title }, body } }) => (
        <Article key={title} title={title}>
          <MDXRenderer>{body}</MDXRenderer>
        </Article>
      ))}
    </div>
    <Footer />
  </div>
)
