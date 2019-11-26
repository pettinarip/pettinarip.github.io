import React from "react"
import PropTypes from "prop-types"

const Page = ({ html }) => <div dangerouslySetInnerHTML={{ __html: html }} />

Page.propTypes = {
  html: PropTypes.string,
}

export default Page
