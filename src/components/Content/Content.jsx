import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const ContentStyled = styled.div`
  padding-left: 20px;
  padding-top: 20px;
  max-width: 800px;

  h1 {
    margin-top: 0;
  }
`

const Content = props => <ContentStyled>{props.children}</ContentStyled>

Content.propTypes = {
  children: PropTypes.node,
}

export default Content
