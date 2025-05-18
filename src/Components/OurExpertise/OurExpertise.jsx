import React from "react";
import { FaBalanceScale, FaFileInvoice, FaChartLine, FaBuilding, FaUserTie, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import "./OurExpertise.css";

const OurExpertisePage = () => {
  return (
    <div className="expertise-wrapper">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card"
      >
        <h2 className="section-heading">Our Expertise</h2>
        <p className="intro-text">
          At <strong>A Shaw & Associates</strong>, our expertise lies in translating complexity into clarity.
          We help businesses not just stay compliant — but thrive in a competitive financial landscape.
        </p>

        <div className="info-grid">
          <div className="info-box">
            <FaBalanceScale className="icon" />
            <h3>Audit & Assurance</h3>
            <p>
              Risk-based audits that go beyond compliance, uncovering actionable insights to drive decision-making.
            </p>
          </div>
          <div className="info-box">
            <FaFileInvoice className="icon" />
            <h3>Accounting & Bookkeeping</h3>
            <p>
              Seamless automation and accurate financial records — we ensure your books are always investor-ready.
            </p>
          </div>
          <div className="info-box">
            <FaChartLine className="icon" />
            <h3>Taxation Services</h3>
            <p>
              End-to-end management of Direct & Indirect Taxes — with timely filings, optimization, and audit support.
            </p>
          </div>
          <div className="info-box">
            <FaBuilding className="icon" />
            <h3>Corporate Compliance</h3>
            <p>
              ROC filings, annual returns, and regulatory structuring — handled with precision and zero delays.
            </p>
          </div>
          <div className="info-box">
            <FaUserTie className="icon" />
            <h3>CFO-as-a-Service</h3>
            <p>
              Get strategic insights and data-driven financial leadership without the cost of a full-time CFO.
            </p>
          </div>
          <div className="info-box">
            <FaRocket className="icon" />
            <h3>Startup & MSME Advisory</h3>
            <p>
              From incorporation to scaling — we support startups with structuring, valuation, funding, and compliance.
            </p>
          </div>
        </div>

        <div className="closing-text">
          <p>
            <strong>Whether you’re a founder, finance head, or small business owner — we have the tools to elevate your vision.</strong>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default OurExpertisePage;
