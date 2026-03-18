import * as React from "react";
import PropTypes from "prop-types";
import { Tabs, Tab, Typography, Box } from "@mui/material";

// Tab Panel Component
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 4 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// Accessibility
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  // DATA (clean & scalable)
  const tabsData = [
    {
      title: "Chetak",
      content: (
        <>
          <Typography variant="h5" fontWeight={600}>
            SAP Due Diligence & AI Audit
          </Typography>
          <Typography sx={{ mt: 2, fontWeight: 500 }}>
            The Lead: Replace manual checklists with empirical data to verify technical integrity during high-stakes transitions.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Chetak is an AI-driven platform that performs deep-level scans of SAP landscapes to identify hidden technical debt, cybersecurity vulnerabilities, and licensing risks. By automating process discovery, it surfaces "shadow" workflows and compliance gaps that traditional audits miss. This objective assessment ensures S/4HANA readiness and compresses due diligence timelines, allowing CFOs and investors to justify enterprise valuations with accuracy and secure post-merger integration with absolute confidence.
          </Typography>
        </>
      ),
    },
    {
      title: "Chaturvima",
      content: (
        <>
          <Typography variant="h5" fontWeight={600}>
            4D Enterprise Transformation
          </Typography>
          <Typography sx={{ mt: 2, fontWeight: 500 }}>
            The Lead: A multi-dimensional framework to align organizational health with strategic intent.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Chaturvima evaluates your enterprise across four critical levels: employee, leadership, department, and company. By bridging the perception gaps between executive vision and ground-level execution, it identifies hidden cultural fractures that cause strategic drag. This 4D diagnostic provides decision-makers with the empirical insights needed to synchronize mission and execution.
          </Typography>
        </>
      ),
    },
    {
      title: "Dataraksha",
      content: (
        <>
          <Typography variant="h5" fontWeight={600}>
            DPDP Readiness & Consent Governance
          </Typography>
          <Typography sx={{ mt: 2, fontWeight: 500 }}>
            The Lead: Automated privacy governance and industry-specific compliance scoring.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Dataraksha is designed to navigate the complexities of the Digital Personal Data Protection (DPDP) Act through automated consent management and rigorous control scoring. It provides enterprises with a real-time "privacy score" tailored to their specific industry, highlighting regulatory gaps before they become liabilities.
          </Typography>
        </>
      ),
    },
    {
      title: "Trustlink",
      content: (
        <>
          <Typography variant="h5" fontWeight={600}>
            Verifiable Digital Trust
          </Typography>
          <Typography sx={{ mt: 2, fontWeight: 500 }}>
            The Lead: Establishing authenticity and provenance across global digital ecosystems.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Trustlink serves as a digital trust layer, enabling enterprises to prove the authenticity and compliance of data, partners, and assets in real-time. Using digital passports and verifiable credentials, it delivers the transparency and traceability required to secure complex supply chains.
          </Typography>
        </>
      ),
    },
    {
      title: "Dataneeti",
      content: (
        <>
          <Typography variant="h5" fontWeight={600}>
            Responsible Decision Governance
          </Typography>
          <Typography sx={{ mt: 2, fontWeight: 500 }}>
            The Lead: Ensuring AI and automated decisions are ethical, explainable, and auditable.
          </Typography>
          <Typography sx={{ mt: 2 }}>
            Dataneeti is a governance platform built to oversee the "brain" of your enterprise — its decision systems. It enforces strict decision rules and accountability frameworks to ensure that AI-driven outcomes are not just efficient, but ethically aligned and fully traceable.
          </Typography>
        </>
      ),
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: 400,
        bgcolor: "background.paper",
      }}
    >
      {/* LEFT SIDE TABS */}
      <Tabs
        orientation="vertical"
        value={value}
        onChange={handleChange}
        sx={{
          borderRight: 1,
          borderColor: "divider",
          minWidth: 200,
        }}
      >
        {tabsData.map((tab, index) => (
          <Tab key={index} label={tab.title} {...a11yProps(index)} />
        ))}
      </Tabs>

      {/* RIGHT SIDE CONTENT */}
      <Box sx={{ flex: 1 }}>
        {tabsData.map((tab, index) => (
          <TabPanel key={index} value={value} index={index}>
            {tab.content}
          </TabPanel>
        ))}
      </Box>
    </Box>
  );
}