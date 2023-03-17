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
