import React from "react"
import PropTypes from "prop-types"

import "./styles.css"

const Page = ({ html }) => (
  <div className="Page-content" dangerouslySetInnerHTML={{ __html: html }} />
)

Page.propTypes = {
  html: PropTypes.string,
}

export default Page
