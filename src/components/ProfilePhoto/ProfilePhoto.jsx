import React from "react"
import PropTypes from "prop-types"

import "./styles.css"

const ProfilePhoto = props => (
  <div
    className="ProfilePhoto"
    style={{ width: props.size, height: props.size }}
  >
    <div className="flipper">
      <div
        className="ProfilePhoto-photo front"
        style={{ width: props.size, height: props.size }}
      >
        <img
          src={props.photo}
          alt="Profile"
          width={props.size}
          height={props.size}
        />
      </div>
      <div
        className="ProfilePhoto-photo back"
        style={{ width: props.size, height: props.size }}
      >
        <img
          src={props.photo}
          alt="Profile"
          width={props.size}
          height={props.size}
        />
      </div>
    </div>
  </div>
)

ProfilePhoto.propTypes = {
  size: PropTypes.number.isRequired,
  photo: PropTypes.string.isRequired,
}

export default ProfilePhoto
