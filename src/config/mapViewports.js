import capTrips from "../data/cap.json"
import ushTrips from "../data/ush.json"

const mapViewports = {
  about: {
    viewport: {
      latitude: -54.8064672,
      longitude: -68.3258825,
      zoom: 13,
      pitch: 45,
      bearing: 0,
    },
    trips: ushTrips,
  },
  jobs: {
    viewport: {
      latitude: -34.6106391,
      longitude: -58.4358002,
      zoom: 12,
      pitch: 45,
      bearing: 0,
    },
    trips: capTrips,
  },
  projects: {
    viewport: {
      latitude: -1.5513142,
      longitude: -84.6335446,
      zoom: 3,
    },
    trips: [],
  },
}

export default mapViewports
