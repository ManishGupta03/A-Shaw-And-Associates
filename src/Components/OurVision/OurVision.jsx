import React from "react";
import { FaEye, FaLightbulb, FaSeedling } from "react-icons/fa";
import { motion } from "framer-motion";
import "./OurVision.css";

const OurVisionPage = () => {
  return (
    <div className="vision-wrapper">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card"
      >
        <h2 className="section-heading">Our Vision</h2>
        <p className="intro-text">
          At <strong>A Shaw & Associates</strong>, our vision is to become a globally respected financial consulting powerhouse — where innovation meets integrity. We strive to be ranked among the Top 10 CA firms worldwide by fostering excellence and creating lasting client impact.
        </p>

        <div className="info-grid">
          <div className="info-box">
            <FaEye className="icon" />
            <h3>Global Aspiration</h3>
            <p>
              We aim to expand our footprint across borders by delivering globally benchmarked solutions with local adaptability.
            </p>
          </div>
          <div className="info-box">
            <FaLightbulb className="icon" />
            <h3>Innovation with Purpose</h3>
            <p>
              By blending time-tested principles with next-gen technologies, we deliver insights that drive transformation and growth.
            </p>
          </div>
          <div className="info-box">
            <FaSeedling className="icon" />
            <h3>Sustainable Growth</h3>
            <p>
              Our focus lies in creating long-term value — for our clients, teams, and society — built on transparency, trust, and progress.
            </p>
          </div>
        </div>

        <div className="closing-text">
          <p>
            We don't just envision the future — we engineer it. With every audit, report, and consultation, we get one step closer to our dream of global excellence.
          </p>
          <p>
            <strong>Join us on this journey to elevate finance beyond boundaries.</strong>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default OurVisionPage;
