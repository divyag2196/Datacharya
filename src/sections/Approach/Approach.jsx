import { Link } from "react-router-dom";
import approach from "../../assets/approach.png";
import "./Approach.scss";
function Approach() {
  return (
    <section className="approach">
        <div className="container">
        <div className="approach_box">
          <h5 className="Data-700-18-24">Our Approach</h5>
          <div className="seprator120"></div>
          <div className="app_box">
            <div className="box1">
              <h3 className="Data-200-64-70 text-center">Framework<br></br> of Growth</h3>
              <Link to="/chetak">
                <button className="read elementor-btn body-16-24">Read more</button>
              </Link>
            </div>
            <div className="box2">
              <h2 className="Data-800-72-72">
                SENSE<br></br>ALIGN<br></br>GOVERN<br></br>ELEVATE
              </h2>
              <img src={approach} alt="approach diagram" />
            </div>
            
          </div>
          
        </div>
      </div>

      
    </section>
  )
}

export default Approach
