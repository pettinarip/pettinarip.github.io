import React from "react"
import PropTypes from "prop-types"

import "./styles.css"

const Menu = props => <div className="Menu">{props.children}</div>

Menu.propTypes = {
  children: PropTypes.node,
}

export default Menu
