import React from "react";
import { FaIndustry, FaGlobe, FaHandshake, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";
import "./ClientIndustries.css";

const ClienteleIndustriesPage = () => {
  return (
    <div className="clientele-wrapper">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card"
      >
        <h2 className="section-heading">Clientele & Industries</h2>
        <p className="intro-text">
          At <strong>A Shaw & Associates</strong>, we proudly serve a diverse range of industries with tailored financial strategies. From visionary founders to global corporations, we adapt to the unique dynamics of every client and sector.
        </p>

        <div className="info-grid">
          <div className="info-box">
            <FaIndustry className="icon" />
            <h3>Industry Diversity</h3>
            <p>
              We support businesses in IT, Manufacturing, Healthcare, and Real Estate, offering solutions that are aligned with each sector’s regulatory, operational, and strategic needs.
            </p>
          </div>
          <div className="info-box">
            <FaGlobe className="icon" />
            <h3>Global Perspective</h3>
            <p>
              We serve international clients with cross-border structures, ensuring compliance with global tax norms, transfer pricing, and financial reporting.
            </p>
          </div>
          <div className="info-box">
            <FaUsers className="icon" />
            <h3>Purpose-Driven Organizations</h3>
            <p>
              Social Enterprises and NGOs turn to us for transparency, reporting, and compliance tailored to their mission-driven operations.
            </p>
          </div>
          <div className="info-box">
            <FaHandshake className="icon" />
            <h3>SMEs & Family Businesses</h3>
            <p>
              From LLPs to private firms, we support legacy businesses in streamlining compliance, governance, and modernizing financial practices.
            </p>
          </div>
        </div>

        <div className="closing-text">
          <p>
            <strong>
              No matter your size or sector — our goal is to empower your vision with deep financial expertise.
            </strong>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default ClienteleIndustriesPage;
