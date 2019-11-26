import React from "react"
import PropTypes from "prop-types"

import "./styles.css"

const Subtitle = ({ text }) => <div className="Subtitle">{text}</div>

Subtitle.propTypes = {
  text: PropTypes.string,
}

export default Subtitle
