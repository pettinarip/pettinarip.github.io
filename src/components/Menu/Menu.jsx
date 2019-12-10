import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const MenuStyled = styled.div`
  -ms-flex: 1 1 0%;
  flex: 1 1 0%;
`

const Menu = props => <MenuStyled>{props.children}</MenuStyled>

Menu.propTypes = {
  children: PropTypes.node,
}

export default Menu
