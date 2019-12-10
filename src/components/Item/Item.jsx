import React from "react"
import PropTypes from "prop-types"
import { Link } from "@reach/router"
import styled from "@emotion/styled"

const ItemStyled = styled.div`
  text-align: center;
  padding: 10px 0;

  :first-child {
    padding-top: 0;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${props => props.theme.colors.base};
  }

  a.active,
  a:hover {
    color: ${props => props.theme.colors.primary};
  }
`

const Item = props => (
  <ItemStyled>
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
  </ItemStyled>
)

Item.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}

export default Item
