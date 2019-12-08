import React, { Component } from "react"
import { StaticMap } from "react-map-gl"
import { PhongMaterial } from "@luma.gl/core"
import { AmbientLight, PointLight, LightingEffect } from "@deck.gl/core"
import DeckGL from "@deck.gl/react"
import { TripsLayer } from "@deck.gl/geo-layers"

import mapStyles from "../../config/mapStyles.json"

const ambientLight = new AmbientLight({
  color: [255, 255, 255],
  intensity: 1.0,
})

const pointLight = new PointLight({
  color: [255, 255, 255],
  intensity: 2.0,
  position: [-74.05, 40.7, 8000],
})

const lightingEffect = new LightingEffect({ ambientLight, pointLight })

const material = new PhongMaterial({
  ambient: 0.1,
  diffuse: 0.6,
  shininess: 32,
  specularColor: [60, 64, 70],
})

const DEFAULT_THEME = {
  trailColor: [208, 195, 101],
  material,
  effects: [lightingEffect],
}

const INITIAL_VIEW_STATE = {
  longitude: -68.3258825,
  latitude: -54.8064672,
  zoom: 13,
  pitch: 45,
  bearing: 0,
}

class Map extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: 0,
    }
  }

  componentDidMount() {
    this._animate()
  }

  componentWillUnmount() {
    if (this._animationFrame) {
      window.cancelAnimationFrame(this._animationFrame)
    }
  }

  _animate() {
    const {
      loopLength = 1800, // unit corresponds to the timestamp in source data
      animationSpeed = 30, // unit time per second
    } = this.props
    const timestamp = Date.now() / 1000
    const loopTime = loopLength / animationSpeed

    this.setState({
      time: ((timestamp % loopTime) / loopTime) * loopLength,
    })
    this._animationFrame = window.requestAnimationFrame(
      this._animate.bind(this)
    )
  }

  _renderLayers() {
    const { trips, trailLength = 180, theme = DEFAULT_THEME } = this.props

    return [
      new TripsLayer({
        id: "trips",
        data: trips,
        getPath: d => d.map(d => [d[0], d[1]]),
        getTimestamps: d => d.map(d => d[2]),
        getColor: theme.trailColor,
        opacity: 0.3,
        widthMinPixels: 2,
        rounded: true,
        trailLength,
        currentTime: this.state.time,
        shadowEnabled: false,
      }),
    ]
  }

  render() {
    const { viewState, theme = DEFAULT_THEME } = this.props

    return (
      <DeckGL
        layers={this._renderLayers()}
        effects={theme.effects}
        initialViewState={INITIAL_VIEW_STATE}
        viewState={viewState}
        controller={true}
      >
        <StaticMap
          reuseMaps
          mapStyle={mapStyles}
          preventStyleDiffing={true}
          mapboxApiAccessToken={process.env.GATSBY_MAPBOX_TOKEN}
        />
      </DeckGL>
    )
  }
}

export default Map
