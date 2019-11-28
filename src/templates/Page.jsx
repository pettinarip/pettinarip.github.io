import React from "react"
import { graphql } from "gatsby"

export default function PageTemplate({ data }) {
  const { markdownRemark } = data
  const { html } = markdownRemark

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
