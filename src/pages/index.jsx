import React from "react"
import { Redirect } from "@reach/router"

const Home = () => <Redirect from="/" to="/about" default noThrow />

export default Home
