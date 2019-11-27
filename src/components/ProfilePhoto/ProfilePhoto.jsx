import React from "react"
import PropTypes from "prop-types"

import "./styles.css"

const ProfilePhoto = props => (
  <div
    className="ProfilePhoto"
    style={{ width: props.size, height: props.size }}
  >
    <div className="ProfilePhoto-photo">
      <img src={props.photo} alt="Profile" />
    </div>
  </div>
)

ProfilePhoto.propTypes = {
  size: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
}

export default ProfilePhoto
