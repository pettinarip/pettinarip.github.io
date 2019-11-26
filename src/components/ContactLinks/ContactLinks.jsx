import React from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

import "./styles.css"

const ContactLinks = props => (
  <div className="ContactLinks">
    <a href={props.github} target="__blank">
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a href={props.linkedin} target="__blank">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a href={`mailto:${props.mail}`} target="__blank">
      <FontAwesomeIcon icon={faEnvelope} />
    </a>
  </div>
)

ContactLinks.propTypes = {
  github: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
}

export default ContactLinks
