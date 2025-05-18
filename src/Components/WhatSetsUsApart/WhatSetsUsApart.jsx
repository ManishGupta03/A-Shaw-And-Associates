import React from "react";
import { FaRocket, FaChartLine, FaUsers, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";
import "./WhatSetsUsApart.css";

const WhatSetsUsApartPage = () => {
  return (
    <div className="sets-wrapper">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card"
      >
        <h2 className="section-heading">What Sets Us Apart</h2>

        <p className="intro-text">
          In a competitive landscape, we distinguish ourselves by being relentlessly client-focused while embracing innovation. Our strength lies in delivering tech-enabled, scalable solutions—always grounded in personal care.
        </p>

        <div className="sets-grid">
          <div className="sets-box">
            <FaRocket className="icon" />
            <h3>Cutting-Edge Automation</h3>
            <p>
              Real-time dashboards and smart automation streamline your processes, reducing errors and freeing up your time.
            </p>
          </div>

          <div className="sets-box">
            <FaChartLine className="icon" />
            <h3>Scalable Advisory</h3>
            <p>
              Whether you’re a startup or scaling enterprise, our advisory grows with you—tailored to every stage of your journey.
            </p>
          </div>

          <div className="sets-box">
            <FaUsers className="icon" />
            <h3>Empathy-Driven Teams</h3>
            <p>
              Our professionals are trained not just in finance, but in collaboration and empathy—because understanding you matters.
            </p>
          </div>

          <div className="sets-box">
            <FaGlobe className="icon" />
            <h3>Global Precision</h3>
            <p>
              Serving clients across borders with accuracy and cultural insight — ensuring seamless international financial solutions.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhatSetsUsApartPage;
