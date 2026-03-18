import { Link } from "react-router-dom";
import "./Insights.scss";
function Insights() {
  return (
    <section className="insights">
      <div className="container">
        <div className="insights_box">
          <h5 className="Data-700-18-24">Insights</h5>
          <div className="seprator120"></div>
        </div>

        <div className="blogs">

          <div className="blog-card">
            <h6 className="metadata">#35</h6>
            <h3 className="Data-600-22-30">What Is Not Practiced Is Not Preserved</h3>
            <p className="body-16-24">Chanakya draws a clear distinction between possession and preservation. The same applies directly to data and digital leadership.</p>
             <Link to="/chetak">
              <button className="read ">Read more</button>
            </Link>
          </div>

          <div className="blog-card">
            <h6 className="metadata">#35</h6>
            <h3 className="Data-600-22-30">What Is Not Practiced Is Not Preserved</h3>
            <p className="body-16-24">Chanakya draws a clear distinction between possession and preservation. The same applies directly to data and digital leadership.</p>
             <Link to="/chetak">
              <button className="read ">Read more</button>
            </Link>
          </div>

          <div className="blog-card">
            <h6 className="metadata">#35</h6>
            <h3 className="Data-600-22-30">What Is Not Practiced Is Not Preserved</h3>
            <p className="body-16-24">Chanakya draws a clear distinction between possession and preservation. The same applies directly to data and digital leadership.</p>
             <Link to="/chetak">
              <button className="read ">Read more</button>
            </Link>
          </div>

          

        </div>
      </div>
    </section>
  )
}

export default Insights