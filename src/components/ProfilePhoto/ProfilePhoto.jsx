import React from "react"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "@emotion/styled"

const ProfilePhotoStyled = styled.div`
  padding: 30px 50px;
  text-align: center;

  .ProfilePhoto-photo {
    border-radius: 50%;
    overflow: hidden;
    max-width: 300px;
    margin: 0 auto;
  }
`

const ProfilePhoto = ({ photo }) => {
  const image = getImage(photo)

  return (
    <ProfilePhotoStyled>
      <GatsbyImage className="ProfilePhoto-photo" image={image} alt="Profile" />
    </ProfilePhotoStyled>
  )
}

ProfilePhoto.propTypes = {
  photo: PropTypes.object.isRequired,
}

export default ProfilePhoto
