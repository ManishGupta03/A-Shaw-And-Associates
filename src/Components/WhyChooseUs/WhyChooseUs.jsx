import React from "react";
import { FaMapMarkerAlt, FaSearch, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "./WhyChooseUs.css";

const WhyChooseUsPage = () => {
  return (
    <div className="choose-wrapper">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card"
      >
        <h2 className="section-heading">Why Choose Us?</h2>

        <p className="intro-text">
          Our clients trust us because we combine personalized service with cutting-edge technology — ensuring you’re supported every step of your financial journey.
        </p>

        <div className="choose-grid">
          <div className="choose-box">
            <FaMapMarkerAlt className="icon" />
            <h3>Nationwide Reach, Local Expertise</h3>
            <p>
              With a presence across India and deep local insights, we deliver solutions tailored to your region’s regulations and market.
            </p>
          </div>

          <div className="choose-box">
            <FaSearch className="icon" />
            <h3>Transparency & Proactivity</h3>
            <p>
              We keep you informed with clear communication and anticipate your needs — no surprises, just steady progress.
            </p>
          </div>

          <div className="choose-box">
            <FaChartLine className="icon" />
            <h3>Real-Time Insights</h3>
            <p>
              Access dynamic reports and visual dashboards that empower smart, data-driven decisions anytime, anywhere.
            </p>
          </div>

          <div className="choose-box">
            <FaShieldAlt className="icon" />
            <h3>Trust & Compliance</h3>
            <p>
              Our 100% dedication to regulatory compliance means your business operates securely and confidently under expert guidance.
            </p>
          </div>
        </div>
        
      </motion.div>
    </div>
  );
};

export default WhyChooseUsPage;
