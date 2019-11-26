import React from "react"
import PropTypes from "prop-types"

import "./styles.css"

const Content = props => <div className="Content">{props.children}</div>

Content.propTypes = {
  children: PropTypes.node,
}

export default Content
