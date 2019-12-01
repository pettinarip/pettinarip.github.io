import React from "react"
import PropTypes from "prop-types"

import ProfilePhoto from "../ProfilePhoto"
import Title from "../Title"
import Subtitle from "../Subtitle"
import Menu from "../Menu"
import Item from "../Item"
import ContactLinks from "../ContactLinks"
import Divisor from "../Divisor"

import photo from "../../images/profile.jpg"

const Sidebar = props => (
  <div className={props.className}>
    <ProfilePhoto photo={photo} />
    <Title text="Pablo Pettinari" />
    <Subtitle text="Front End Engineer" />

    <Divisor />

    <Menu>
      <Item to="/about" text="About me" />
      <Item to="/jobs" text="Jobs & Exp" />
    </Menu>
    <ContactLinks
      github="https://github.com/pettinarip"
      linkedin="https://www.linkedin.com/in/pablo-pettinari-8386b525/"
      mail="pettinarip@gmail.com"
    />
  </div>
)

Sidebar.propTypes = {
  className: PropTypes.string,
}

export default Sidebar
