import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/Seo"

export default function PageTemplate({ data }) {
  const { markdownRemark } = data
  const { html, frontmatter } = markdownRemark

  return (
    <>
      <Seo title={frontmatter.title} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  )
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
