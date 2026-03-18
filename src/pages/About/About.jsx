import { Link } from "react-router-dom";
import About_vec from "../../assets/about_vector.png";
import About_icon from "../../assets/about_icon.png";
import About_test_top_icon from "../../assets/top_icon.png";
import About_test_bottom_icon from "../../assets/bottom_icon.png";
import Slider from "../../sections/Slider/Slider"
import "./About.scss";
function About() {
  return (
    <section id="about">
       <div className="my-fluid-container box1">
        <div className="container">
          <div className="hero">
            <h1 className="Data-200-64-64">Genesis</h1>
            <p className="sub-head-22-30">Working with enterprises and interacting with global consultants over the last 30 years gave an insight in to how the western consultancies work and how they could be inept in understanding the indian way of thinking and doing business. Indian way should be more holistic than transactional. </p>
            <p className="sub-head-22-30">This thought combined with the deep knowledge of indian scriptures, gave birth to Datacharya - which blends ancient wisdom with modern data science to empower organizations to act with purpose, precision, and compliance in the age of AI.We don’t just manage data—we govern, interpret, and elevate it.</p> 
          </div>

          
        </div>
        <div className="infobox">
          <div className="container">
            <div className="info_box1"></div>
            <div className="info_box2"></div>
            
          </div>
          

        </div>
      </div>

       <div className="my-fluid-container box2">
        <div className="container">
          <div className="sec1">
            <div className="sec1box">
              <img src={About_vec} alt="{" />
              <h2 className="Data-200-64-64">Data is not just an asset—it is a responsibility.<br></br> When governed well, it becomes dharma.</h2>

            </div>
            <div className="sec1box2">
              <p className="Data-400-22-30">At Datacharya, we believe that true Ethical Intelligence begins where logic meets the deeper purpose of your business. We work quietly behind the scenes to ensure your strategic vision isn’t just automated, but is authentically lived across every level of execution.</p>
            </div>
            
          </div>

          
        </div>
        <div className="infobox">
          <div className="container">
            <div className="info_box1">
              <h3 className="head-64-64">Who we work with</h3>
            </div>
            <div className="info_box2">
              

              <div className="card">
                <img src={About_icon} alt="{" />
                <p className="Data-300-22-30">The Visionary Leader</p>
                <h4 className="Data-300-54-54">CXO, Boards</h4>

              </div>

              <div className="card">
                <img src={About_icon} alt="{" className="rotateimg"/>
                <p className="Data-300-22-30">The Compliance Guardian</p>
                <h4 className="Data-300-54-54">Audit, Risk, Quality</h4>

              </div>

              <div className="card">
                <img src={About_icon} alt="{" />
                <p className="Data-300-22-30">The Builder of Systems</p>
                <h4 className="Data-300-54-54">CIOs, Architects</h4>

              </div>

              <div className="card">
                <img src={About_icon} alt="{" className="rotateimg"/>
                <p className="Data-300-22-30">The Talent Orchestrator</p>
                <h4 className="Data-300-54-54">CHROs, OD Heads</h4>

              </div>

              <div className="card">
                <img src={About_icon} alt="{" />
                <p className="Data-300-22-30">The Growth Engineer</p>
                <h4 className="Data-300-54-54">Founders, BU Heads</h4>

              </div>

              <div className="card">
                <img src={About_icon} alt="{" className="rotateimg"/>
                <p className="Data-300-22-30">The Sector Specialist</p>
                <h4 className="Data-300-54-54">Pharma, Fintech, Infra, Agro, NBFCs</h4>

              </div>

            </div>
            
          </div>
          

        </div>
      </div>

      <div className="container client-slider">
        <h3 className="Data-300-22-30 text-center">Our Clients</h3>

        <Slider/>
      </div>

      <div className="container testimonial ">
        <img src={About_test_top_icon} alt="{" />
        <h3 className="Data-300-22-30 text-center">Datacharya helped us setting up the base and helped in hiring the right people as a part of the core team of the company, team also helped us in onboarding vendors by bench-marking them on the merits of security system and other parameters.</h3>
        <h6 className="body-16-24 text-center">Hill Selia<br></br>
        CEO- Ramkrishna Pure Finance, Mumbai</h6>
        <img src={About_test_bottom_icon} alt="{" />
         <Link to="/chetak">
            <button className="read elementor-btn body-16-24">Get in touch</button>
          </Link>
      </div>




      
    </section>
  )
}

export default About