import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/siteLayout"

const Category = ({ data, pageContext }) => {
  const { category } = pageContext
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout>
        <div className="spacer" style={{height:'70px', border:'0px solid yellow'}}></div>
    <div>
      {/* <h1>Posts in category "{category}"</h1> */}
 
      <ul className="horizontal-scroll panels sitegrad movingBG" style={{marginTop:'1vh', paddingTop:''}}>

      <li className="" style={{height:'50%', paddingTop:'50%'}}></li>

        {posts.map(({ node }) => (
          <li key={node.id}>
           <a href={node.frontmatter.slug}>
            {node.frontmatter.featuredImage && (
              <GatsbyImage
                image={node.frontmatter.featuredImage.childImageSharp.gatsbyImageData}
                alt={node.frontmatter.title}
              />
            )}
             {node.frontmatter.title}</a>
          </li>
        ))}
      </ul>
    </div>
    </Layout>
  )
}


export const query = graphql`
  query($category: String!) {
    allMarkdownRemark(filter: { frontmatter: { category: { eq: $category } } }) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            date(formatString: "MMMM DD, YYYY")
            category
            youtuber
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



export default Category
