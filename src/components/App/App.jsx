import React from "react"
import { Router, Match } from "@reach/router"

import Sidebar from "../Sidebar"
import Content from "../Content"
import Page from "../Page"

import Map from "../Map"
import mapViewports from "../../config/mapViewports"
import capTrips from "../../data/cap.json"
import ushTrips from "../../data/ush.json"

import "./styles.css"

const App = ({ edges }) => {
  return (
    <div className="App">
      <Sidebar className="App-sidebar" edges={edges} />

      <div className="App-map">
        <Match path="/:page">
          {props => {
            const config =
              props.match &&
              props.match.page &&
              mapViewports.hasOwnProperty(props.match.page)
                ? mapViewports[props.match.page]
                : mapViewports.about
            return (
              <Map
                viewState={config.viewport}
                trips={props.match.page === "about" ? ushTrips : capTrips}
              />
            )
          }}
        </Match>
      </div>

      <div className="App-content">
        <Router>
          <Content path="/">
            {edges.map(({ node }, index) => (
              <Page key={index} path={node.frontmatter.path} html={node.html} />
            ))}
          </Content>
        </Router>
      </div>
    </div>
  )
}

export default App
