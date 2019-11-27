import React from "react"
import { graphql } from "gatsby"

import App from "../components/App"

import "../css/global.css"

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

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
