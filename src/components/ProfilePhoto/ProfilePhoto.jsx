import React from "react"
import PropTypes from "prop-types"

import "./styles.css"

const ProfilePhoto = ({ photo }) => (
  <div className="ProfilePhoto">
    <img className="ProfilePhoto-photo" src={photo} alt="Profile" />
  </div>
)

ProfilePhoto.propTypes = {
  photo: PropTypes.string.isRequired,
}

export default ProfilePhoto
