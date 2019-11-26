import React from "react"
import PropTypes from "prop-types"

import "./styles.css"

const Title = ({ text }) => <div className="Title title">{text}</div>

Title.propTypes = {
  text: PropTypes.string,
}

export default Title
