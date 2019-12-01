import React from "react"
import { Match } from "@reach/router"
import { config } from "@fortawesome/fontawesome-svg-core"

import Seo from "../Seo"
import Sidebar from "../Sidebar"
import Content from "../Content"
import Map from "../Map"

import mapViewports from "../../config/mapViewports"

import "@fortawesome/fontawesome-svg-core/styles.css"
import "../../css/global.css"
import "./styles.css"

config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const Layout = ({ children }) => (
  <div className="Layout">
    <Seo title="Site" />

    <Sidebar className="Layout-sidebar" />

    <div className="Layout-map">
      <Match path="/:page">
        {props => {
          const { match } = props
          const { viewport, trips } =
            match && mapViewports.hasOwnProperty(match.page)
              ? mapViewports[match.page]
              : mapViewports.about
          return <Map viewState={viewport} trips={trips} />
        }}
      </Match>
    </div>

    <div className="Layout-content">
      <Content>{children}</Content>
    </div>
  </div>
)

export default Layout
