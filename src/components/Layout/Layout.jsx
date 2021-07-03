import React from "react"
import { Match } from "@reach/router"
import { config } from "@fortawesome/fontawesome-svg-core"
import { ThemeProvider } from "@emotion/react"
import styled from "@emotion/styled"

import GlobalStyles from "../GlobalStyles"
import Seo from "../Seo"
import Sidebar from "../Sidebar"
import Content from "../Content"
import Map from "../Map"

import mapViewports from "../../config/mapViewports"

import "@fortawesome/fontawesome-svg-core/styles.css"

config.autoAddCss = false // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const theme = {
  colors: {
    primary: "#d0c365",
    base: "#ffffff",
    background: "#555555",
  },
  fonts: {
    base: '"Raleway", sans-serif',
    titles: '"Bree Serif", sans-serif',
  },
}

const LayoutStyled = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;

  .Layout-sidebar {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 400px;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 2;
    overflow: auto;
    min-height: 520px;
  }

  .Layout-map {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
  }

  .Layout-content {
    padding-left: 400px;
  }

  @media all and (max-width: 50em) {
    position: inherit;

    .Layout-sidebar {
      position: relative;
      width: 100%;
    }

    .Layout-map {
      display: none;
    }

    .Layout-content {
      padding-left: 0;
    }
  }
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <LayoutStyled>
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
    </LayoutStyled>
  </ThemeProvider>
)

export default Layout
