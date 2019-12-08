import React from "react"
import PropTypes from "prop-types"
import Img from "gatsby-image"

import "./styles.css"

const ProfilePhoto = ({ photo }) => (
  <div className="ProfilePhoto">
    <Img className="ProfilePhoto-photo" fluid={photo} alt="Profile" />
  </div>
)

ProfilePhoto.propTypes = {
  photo: PropTypes.object.isRequired,
}

export default ProfilePhoto
