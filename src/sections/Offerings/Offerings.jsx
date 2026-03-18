import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import chetak from "../../assets/CHETAK.png";
import chaturvima from "../../assets/CHATURVIMA.png";
import dataraksha from "../../assets/DATARAKSHA.png";
import trustlink from "../../assets/TRUSTLINK.png";
import "swiper/css";
import "swiper/css/navigation";
import "./Offerings.scss"

const data = [
  {
    logo: chetak,
    subtitle: "SAP Due Diligence & AI Audit",
    text: "Chetak is an AI platform that identifies technical risks and compliance gaps in SAP environments during M&A or system upgrades. It replaces manual checklists with empirical data to verify process integrity and justify enterprise valuations accurately."
  },
  {
    logo: chaturvima,
    subtitle: "4D Enterprise Transformation Model",
    text: "A multi-dimensional framework that evaluates organizational health across four levels: employee, leadership, department, and company. It bridges perception gaps and identifies hidden cultural fractures providing decision-enabling insights for sharper strategic alignment."
  },
  {
    logo: dataraksha,
    subtitle: "DPDP Readiness & Consent Governance",
    text: "A specialized platform for DPDP readiness and industry-specific control scoring. It provides enterprises with precise privacy compliance scores and automated consent governance to ensure total alignment with current data protection regulations."
  },
  {
    logo: trustlink,
    subtitle: "Verifiable Digital Trust",
    text: "A digital trust layer that enables enterprises to prove the authenticity, provenance, and compliance of data, partners, and digital assets. Trustlink uses digital passports and verifiable credentials to deliver transparency, traceability, and external trust across partners, regulators, and ecosystems."
  },
  {
    logo: trustlink,
    subtitle: "Responsible Decision Governance",
    text: "A governance platform that ensures analytics, automation, and AI decisions are ethical, explainable, and auditable. Dataneeti enforces decision rules, accountability, and traceability so enterprises can justify how decisions are made and remain compliant and trustworthy."
  }
];

function Offerings() {
  return (
    <section className="offerings">
      <div className="container">
        <div className="offerings_box">
          <h5 className="Data-700-18-24">Our Offerings</h5>
          <div className="seprator120"></div>
          <h3 className="Data-200-64-70 text-center"><span className="Data-400-24-70">Introducing<br></br></span> Ecosystem of Transformation</h3>
          <p className="sub-head-22-30 text-center">
            A unique interoperable AI-based platforms ecosystem for the first time in<br></br> enterprise life-cycle
          </p>
        </div>
      </div>
      <div className="my-fluid-container slider_box">
        <div className="home-slider">
          <Swiper modules={[Navigation, Autoplay]}
  slidesPerView={4}
  spaceBetween={40}
  centeredSlides={true}
  loop={true}
  navigation={{
    nextEl: ".custom-next",
    prevEl: ".custom-prev"
  }}
  autoplay={{
    delay: 3000,
    disableOnInteraction: false
  }}
  breakpoints={{
    320: { slidesPerView: 1.2 },
    768: { slidesPerView: 2 },
    1200: { slidesPerView: 4 }
  }}
>
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="ecosystem-card">

                  <img src={item.logo} alt="logo" />

                  <h5 className="Data-400-24-34">{item.subtitle}</h5>

                  <p className="body-16-24">{item.text}</p>

                  <div className="card-buttons">
                    <button className="read">Read more</button>
                    <button className="trial">Take a trial</button>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="slider-arrows">
            <div className="custom-prev"></div>
            <div className="custom-next"></div>
          </div>
        </div>
      </div>
      
      
      

      {/* <div className="cards">

        <div className="card">
          <h3>CHETAK</h3>
          <p>SAP Due Diligence & AI Audit</p>
        </div>

        <div className="card">
          <h3>CHATURVIMA</h3>
          <p>4D Enterprise Transformation Model</p>
        </div>

        <div className="card">
          <h3>DATARAKSHA</h3>
          <p>DPDP Readiness & Consent Governance</p>
        </div>

        <div className="card">
          <h3>TRUSTLINK</h3>
          <p>Verifiable Digital Trust</p>
        </div>

      </div> */}
    </section>
  )
}

export default Offerings