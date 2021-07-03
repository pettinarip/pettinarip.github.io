import { useEffect } from "react"
import { navigate } from "gatsby"

const Home = () => {
  useEffect(() => {
    navigate("/about")
  }, [])

  return null
}

export default Home
