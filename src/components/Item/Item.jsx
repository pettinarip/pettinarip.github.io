import React from "react"
import PropTypes from "prop-types"
import { Link } from "@reach/router"

import "./styles.css"

const Item = props => (
  <div className="Item">
    <Link
      to={props.to}
      getProps={({ isPartiallyCurrent }) => {
        return {
          className: isPartiallyCurrent ? "active title" : "title",
        }
      }}
    >
      {props.text}
    </Link>
  </div>
)

Item.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Item
