import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/siteLayout"
import { BiGridHorizontal } from "react-icons/bi"
import { MdOutlineRectangle } from "react-icons/md"
import ScrollAnimation from 'react-animate-on-scroll'

const ProjectsPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  const resizeGrid = () => {
    const elements = document.querySelectorAll('.contentpanel');
    elements.forEach(el => {
      el.classList.remove('horizontal-scroll', 'panels');
      el.classList.add('grid-container');
    });
  }
  
  const resizeSwipe = () => {
    const elements = document.querySelectorAll('.contentpanel');
    elements.forEach(el => {
      el.classList.remove('grid-container');
      el.classList.add('horizontal-scroll', 'panels');
  
    });
  }

  return (
    <Layout>
      <div className="spacer" style={{ height: '70px', border: '0px solid yellow' }}></div>
      <div>
      <ScrollAnimation animateIn="" animateOut="" initiallyVisible={true} animateOnce={false} animatePreScroll={true} style={{position:'fixed', left:'0', bottom:'5vh', zIndex:'1', width:'', background:'rgba(0, 0, 0, .6)', color:'#ccc', height:'', borderRadius:'0 12px 12px 0', borderLeft:'none !important',}}> 
<div id="resizer" style={{display:'flex', flexDirection:'column', gap:'30px', justifyContent:'center', 
  alignItems:'center', alignContent:'center', textAlign:'center',  padding:'1rem', textShadow: '1px 1px 0 rgba(121, 115, 115, 0.7)', whiteSpace:'nowrap', fontWeight:'bold',}}><button onClick={resizeGrid}><BiGridHorizontal style={{fontSize:'24px', margin:'0 auto'}} />Grid </button><button onClick={resizeSwipe}><MdOutlineRectangle style={{fontSize:'24px', margin:'0 auto'}} />Swipe</button>



</div>
</ScrollAnimation>
        <div className="contentpanel horizontal-scroll panels" style={{}}>
        <div className="sliderSpacer" style={{height:'', paddingTop:'', display:'none'}}></div>
          {posts.map(({ node }) => (
            <li key={node.id}>
              <a href={node.frontmatter.slug}>
                {node.frontmatter.featuredImage && (
                  <GatsbyImage
                    image={node.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
                    alt={node.frontmatter.title}
                  />
                )}
                <h2>{node.frontmatter.title}</h2>
              </a>
            </li>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: "project" } } }) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            category
            featuredImage {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`

export default ProjectsPage
