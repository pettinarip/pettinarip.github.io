import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const TitleStyled = styled.div`
  font-size: 32px;
  text-align: center;
`

const Title = ({ text }) => <TitleStyled className="title">{text}</TitleStyled>

Title.propTypes = {
  text: PropTypes.string,
}

export default Title
