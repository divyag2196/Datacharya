// import Footer from "../../components/Footer/Footer"
// import Navbar from "../../components/Navbar/Navbar"
import Hero from "../../sections/Hero/Hero"
import Offerings from "../../sections/Offerings/Offerings"
import Testimonial from "../../sections/Testimonial/Testimonial"
import Insights from "../../sections/Insights/Insights"
import Approach from "../../sections/Approach/Approach"
import Advisory from "../../sections/Advisory/Advisory"
import Platforms from "../../sections/Platforms/Platforms"

// import { use } from "react"
import "./Home.scss"

function Home() {
  return (
    <div id="home">
      {/* <Navbar /> */}

      <Hero />
      <Offerings />
      <Approach />
      <Advisory />
      <Testimonial />
      <Insights />
      <Platforms />

      

      {/*<Footer /> */}
    </div>
  )
}

export default Home