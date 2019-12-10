import React from "react"
import PropTypes from "prop-types"
import styled from "@emotion/styled"

const SubtitleStyled = styled.div`
  font-size: 14px;
  text-align: center;
`

const Subtitle = ({ text }) => <SubtitleStyled>{text}</SubtitleStyled>

Subtitle.propTypes = {
  text: PropTypes.string,
}

export default Subtitle
