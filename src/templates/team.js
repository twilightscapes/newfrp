import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        category
        tags
      }
      html
    }
  }
`

const Team = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <p>Category: {frontmatter.category}</p>
      <p>Tags: {frontmatter.tags}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
}

export default Team
