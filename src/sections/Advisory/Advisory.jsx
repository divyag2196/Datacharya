import { Link } from "react-router-dom";
import Advisory_img from "../../assets/Advisory-img.png";
import "./Advisory.scss";


function Advisory() {
  return (
    <section className="advisory">
      <div className="container">
        <div className="advisory_box">
          <div className="advisory_box1">
            <h5 className="Data-700-18-24 text-center">Our Offerings</h5>
            <div className="seprator120"></div>
          </div>
          <div className="advisory_box2">
            <img src={Advisory_img} alt="CXO Advisory" />
            <h3 className="Data-200-64-80">CXO Advisory</h3>
            <p className="body-16-24">An innovative offering which aligns technology, empathy, vision, goals with guiding force of Indian wisdom and values - by harnessing the power of data, AI, cloud computing, automation to ensure long term sustainable growth in an ever evolving business environment. </p>
            <Link to="/chetak">
              <button className="elementor-btn-shadow body-16-24">Read more</button>
            </Link>
          </div>

        </div>
        

      </div>
      
    </section>
  )
}

export default Advisory