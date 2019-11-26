import React from "react"
import { graphql } from "gatsby"

import App from "../components/App"

import "../css/global.css"

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
      edges {
        node {
          html
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`

const Home = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => <App edges={edges} />

export default Home
