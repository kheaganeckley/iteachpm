/** @jsx jsx */
import { jsx } from "theme-ui"
import Article from '../componets/article'
import LineStyle from '../componets/LineStyle'
import ANiHeader from "../componets/ANiHeader"
import Img from 'gatsby-image'
import {graphql} from 'gatsby'
import {FiFacebook, FiTwitter} from 'react-icons/fi'




const layoutStyle = {
  display : 'flex',
  flexDirection : 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor : 'background',
  color: 'text'
}

const ArticleLayoutStyle = {
  width : '80%',
  display : 'flex',
  flexDirection : 'row',
  margin : '25px'
}

const imageStyle = {
  width: '40%',
  height: '40%',
  borderRadius : '50%',
  marginRight :'40px'
}




export const query = graphql`
query MyImageQuery {
  file(relativePath: {eq: "DAD.jpg"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`




export default ({data:{file:{childImageSharp:{fluid}}}}) => <div sx = {layoutStyle}>
<ANiHeader>PM<span sx={{color:'trim'}}>I</span>NVENTIONS</ANiHeader>
<LineStyle/>
<div sx={ArticleLayoutStyle}>
  
    <Img
    sx={imageStyle}
    fluid={fluid}
    />

  <Article
  title='About'
  paragrph = 'lorn skjdbkf kjdfkjsd fjk dfkjsd fjksd fkjsdfkjsd fkjds fkjsd fkj dkjf ksdj fkjsd fkj dskjf sdkjf sd'
  />

</div>

<div sx={ArticleLayoutStyle}>

<Article
  title='Pricing'
  paragrph = 'lorn skjdbkf kjdfkjsd fjk dfkjsd fjksd fkjsdfkjsd fkjds fkjsd fkj dkjf ksdj fkjsd fkj dskjf sdkjf sd'
  />


  <Article
  title='Contact'
  paragrph = 'lorn skjdbkf kjdfkjsd fjk dfkjsd fjksd fkjsdfkjsd fkjds fkjsd fkj dkjf ksdj fkjsd fkj dskjf sdkjf sd'
  />

</div>

</div>