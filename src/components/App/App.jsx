import React from "react"
import { Router, Match, Redirect } from "@reach/router"

import Sidebar from "../Sidebar"
import Content from "../Content"
import Page from "../Page"
import Map from "../Map"

import mapViewports from "../../config/mapViewports"

import "./styles.css"

const App = ({ edges }) => {
  return (
    <div className="App">
      <Sidebar className="App-sidebar" edges={edges} />

      <div className="App-map">
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

      <div className="App-content">
        <Router>
          <Content path="/">
            {edges.map(({ node }, index) => (
              <Page key={index} path={node.frontmatter.path} html={node.html} />
            ))}
            <Redirect from="/" to="/about" default noThrow />
          </Content>
        </Router>
      </div>
    </div>
  )
}

export default App
