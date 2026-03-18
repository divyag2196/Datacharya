import "./Hero.scss";
function Hero() {
  return (
    <section className="hero-section">
      <div className="hero">
        <div className="container">
          <div className="hero-box">
            <h1 className="data-title">Indian wisdom applied to<br></br> Global business problems</h1>
            <p className="Data-sub-title home-hero-para text-center"> Providing an eco-system of platforms and strategic advisory to enable enterprise governance, AI assurance, and data-driven decisions.</p>
            <div className="hero-links">
              <div className="sub-head-22-30">Our Offerings</div>
              <div className="sub-head-22-30">People Speak</div>
              <div className="sub-head-22-30">Insights</div>
            </div>
          </div>
          
        </div>
      </div>

      <div className="about-box container">
        <div className="about container">
          <h3 className="Data-200-48-48">
            We are a global consulting company which draws its vision and values rooted in Indian wisdom which believes in sustainable growth for all 
          </h3>
          <p className="sub-head-22-30">
            The philosophy of wholeness, the human element of an enterprise and data- the digital nervous system come together in our advisory as well as platform ecosystem to drive enterprise transformation.
          </p>

        </div>

      </div>
      
    </section>
  )
}

export default Hero
