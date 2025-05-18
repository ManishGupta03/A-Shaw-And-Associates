import React from "react";
import { FaUsers, FaGlobeAsia, FaHandshake } from "react-icons/fa";
import { motion } from "framer-motion";
import "./WhoWeAre.css"; // Import the CSS styles

const WhoWeArePage = () => {
  return (
    <div className="who-wrapper">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card"
      >
        <h2 className="section-heading">Who We Are</h2>
        <p className="intro-text">
          At <strong>A Shaw & Associates</strong>, we don’t just manage numbers — we build financial confidence. With our collaborative mindset and unwavering ethics, we transform accounting into a strategic advantage for our clients.
        </p>

        <div className="info-grid">
          <div className="info-box">
            <FaUsers className="icon" />
            <h3>Our People</h3>
            <p>
              A strong team of semi-qualified Chartered Accountants and full-time admin professionals dedicated to precision, compliance, and client-first service.
            </p>
          </div>
          <div className="info-box">
            <FaGlobeAsia className="icon" />
            <h3>Our Reach</h3>
            <p>
              Backed by 22 associated CA firms across India, we offer nationwide capabilities while preserving personalized, local-level service.
            </p>
          </div>
          <div className="info-box">
            <FaHandshake className="icon" />
            <h3>Our Commitment</h3>
            <p>
              Every professional is bound by ICAI’s code of ethics. Our approach ensures every client feels secure, supported, and understood.
            </p>
          </div>
        </div>

        <div className="closing-text">
          <p>
            We believe in growing together — our success is measured by the long-term growth and satisfaction of our clients.
          </p>
          <p>
            <strong>Let’s shape your financial future, the ethical way.</strong>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default WhoWeArePage;
