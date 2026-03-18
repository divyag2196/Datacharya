import ppl_speak from "../../assets/ppl_speak.png";
import top from "../../assets/top.png";
import bottom from "../../assets/bottom.png";
import "./Testimonial.scss";

function Testimonial() {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="testimonial_box">
          <h5 className="Data-700-18-24">People Speak</h5>
          <div className="seprator120"></div>
          <div className="testimonial-card">
            <div className="testimonial-card1">
               <img src={ppl_speak} alt="Testimonial" />
            </div>
            <div className="testimonial-card2">
              <img src={bottom} alt="Testimonial" className="top_icon"/>
              <p className="testimonial-desc Data-400-22-30">
              Datacharya helped us setting up the base and helped in hiring the right people as a part of the core team of the company, team also helped us in onboarding vendors by bench-marking them on the merits of security system and other parameters.
              </p>
              <p className="body-16-24 testimonial-client-name">Hill Selia<br></br>
                CEO- Ramkrishna Pure Finance, Mumbai
              </p>
              <img src={top} alt="Testimonial" className="bottom_icon"/>
               
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial