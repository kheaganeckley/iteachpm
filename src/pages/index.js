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

const gaintCardStyle = {
  width: '90%',
  display: 'flex',
  flexDirection: 'column',
  margin: '25px',
  boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
  opacity : 0.8,
  backgroundColor: 'backgroundGaintCard',
  borderRadius: '15px',
  padding: '20px'
}

const imageStyle = {
  width: '90px',
  height: '100px',
  borderRadius: '50%',
}

const heroStyle = {
  width: '100%',
  height: '300px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const herodescription = {
  textTransform: 'uppercase',
  letterSpacing: '2px',
  fontWeight:'bold',
  color: 'trim',
  fontFamily :' Russo One',
  textAlign: 'center',
  width: '60%',
  marginTop: '10px'
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
    
    
      <div
      sx = {heroStyle}
      >
        <Img sx={imageStyle} fluid={fluid} />

        <q 
        sx={herodescription}
        >
        IT IS ABOUT TIME TO TAKE YOUR NEXT STEP IN YOUR CAREER. MY COURSES ON PROJECT MANAGEMENT IS ABOUT CREATING DECISION MAKERS.
        </q> 


      </div>
      
    <div sx={gaintCardStyle}>
      {edges.map(({ node: { frontmatter: { title }, body } }) => (
        <Article key={title} title={title}>
          <MDXRenderer>{body}</MDXRenderer>
        </Article>
      ))}
    </div>
    <Footer />
  </div>
)
