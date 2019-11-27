import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const ContactLinksStyled = styled.div`
  padding: 10px 0;
  text-align: center;
`

const Link = styled.a`
  padding: 5px;
  margin: 0 3px;
  font-size: 18px;
  color: #fff;

  &:hover {
    color: #d0c365;
  }
`

const ContactLinks = props => (
  <ContactLinksStyled>
    <Link href={props.github} target="__blank">
      <FontAwesomeIcon icon={faGithub} />
    </Link>
    <Link href={props.linkedin} target="__blank">
      <FontAwesomeIcon icon={faLinkedin} />
    </Link>
    <Link href={`mailto:${props.mail}`} target="__blank">
      <FontAwesomeIcon icon={faEnvelope} />
    </Link>
  </ContactLinksStyled>
)

ContactLinks.propTypes = {
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
}

export default ContactLinks
