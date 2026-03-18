import { useState } from "react";
import chetak from "../../assets/CHETAK.png";
import chaturvima from "../../assets/CHATURVIMA.png";
import dataraksha from "../../assets/DATARAKSHA.png";
import trustlink from "../../assets/TRUSTLINK.png";
import "./Platforms.scss";

const data = [
  {
      id: "tab1",
      logo: chetak,
      title: "Chetak",
      content: "<h6>The Lead</h6>: Replace manual checklists with empirical data to verify technical integrity during high-stakes transitions.Chetak is an AI-driven platform that performs deep-level scans of SAP landscapes to identify hidden technical debt, cybersecurity vulnerabilities, and licensing risks. By automating process discovery, it surfaces 'shadow' workflows and compliance gaps that traditional audits miss. This objective assessment ensures S/4HANA readiness and compresses due diligence timelines, allowing CFOs and investors to justify enterprise valuations with accuracy and secure post-merger integration with absolute confidence.",
      subtitle: "SAP Due Diligence & AI Audit",
      text: "Chetak is an AI platform that identifies technical risks and compliance gaps in SAP environments during M&A or system upgrades. It replaces manual checklists with empirical data to verify process integrity and justify enterprise valuations accurately."
    },
    {
      id: "tab2",
      logo: chaturvima,
       title: "CHATURVIMA",
    content: "Content for Chaturvima...",
      subtitle: "4D Enterprise Transformation Model",
      text: "A multi-dimensional framework that evaluates organizational health across four levels: employee, leadership, department, and company. It bridges perception gaps and identifies hidden cultural fractures providing decision-enabling insights for sharper strategic alignment."
    },
    {
      id: "tab3",
      logo: dataraksha,
      title: "DATARAKSHA",
    content: "Content for Dataraksha...",
      subtitle: "DPDP Readiness & Consent Governance",
      text: "A specialized platform for DPDP readiness and industry-specific control scoring. It provides enterprises with precise privacy compliance scores and automated consent governance to ensure total alignment with current data protection regulations."
    },
    {
      id: "tab4",
      logo: trustlink,
      title: "DATANEETI",
    content: "Content for Dataneeti...",
      subtitle: "Verifiable Digital Trust",
      text: "A digital trust layer that enables enterprises to prove the authenticity, provenance, and compliance of data, partners, and digital assets. Trustlink uses digital passports and verifiable credentials to deliver transparency, traceability, and external trust across partners, regulators, and ecosystems."
    },
    {
      id: "tab5",
      logo: trustlink,
      subtitle: "Responsible Decision Governance",
      text: "A governance platform that ensures analytics, automation, and AI decisions are ethical, explainable, and auditable. Dataneeti enforces decision rules, accountability, and traceability so enterprises can justify how decisions are made and remain compliant and trustworthy."
    }
 
];

function Platforms() {

    const [activeTab, setActiveTab] = useState("tab1");
  const [activeAccordion, setActiveAccordion] = useState("tab1");

  const handleAccordion = (id) => {
    setActiveAccordion(activeAccordion === id ? null : id);
  };


  return (
    <section id="Platforms">
      <div className="my-fluid-container">
        <div className="container header-part text-center">
                <div className="hero">
                    <h1 className="Data-200-64-64">Ecosystem of Transformation</h1>
                    <p className="sub-head-22-30">A unique interoperable AI-based platforms ecosystem for the first time in enterprise life-cycle</p>
                </div>

        </div>
        <div className="container text-center">
          <div className="accordion-tabs">
      
            {/* LEFT TABS (DESKTOP) */}
              <div className="tabs-wrapper">
                <ul className="tabs">
                      {data.map((item) => (
                        <li key={item.id} className={activeTab === item.id ? "active" : ""}
                          onClick={() => { setActiveTab(item.id); setActiveAccordion(item.id);}}
                        >
                          <img src={item.logo} alt={item.title} 
                          style={{width:'100px',height:'100%'}}/>
                          
                        </li>
                      ))}
                </ul>
              </div>

            {/* RIGHT CONTENT */}
              <div className="accordion">
                {data.map((item) => (
                  <div key={item.id}>
                        
                    {/* MOBILE ACCORDION TITLE */}
                    <div className={`accordion__title ${ activeAccordion === item.id ? "active" : ""}`}
                      onClick={() => handleAccordion(item.id)}
                    >
                      <img src={item.logo} alt={item.title} 
                          style={{width:'100px',height:'100%'}}/>
                    </div>

                    {/* CONTENT */}
                    <div className={`accordion__content ${ activeTab === item.id ? "show" : ""} ${ activeAccordion === item.id ? "show" : ""}`}>
                      <img src={item.logo} alt={item.title} 
                          style={{width:'100px',height:'100%'}}/>
                      <h6>{item.subtitle}</h6>
                      <p>{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
          </div>
  
        </div>
        
      </div>
    </section>
  )
}

export default Platforms