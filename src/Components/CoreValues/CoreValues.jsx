import React from "react";
import { FaBalanceScale, FaHandshake, FaUserFriends, FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import "./CoreValues.css";

const CoreValuesPage = () => {
  return (
    <div className="values-wrapper">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-card"
      >
        <h2 className="section-heading">Core Values</h2>

        <div className="values-grid">
          <div className="value-box">
            <FaBalanceScale className="icon" />
            <h3>Accountability</h3>
            <p>
              We take full ownership of your goals, aligning our success with your financial growth and peace of mind.
            </p>
          </div>

          <div className="value-box">
            <FaHandshake className="icon" />
            <h3>Integrity</h3>
            <p>
              Every decision and action is rooted in the strict ethical standards set forth by ICAI, ensuring unwavering trust.
            </p>
          </div>

          <div className="value-box">
            <FaUserFriends className="icon" />
            <h3>Client-Centricity</h3>
            <p>
              We listen deeply to understand your unique needs — because your priorities drive our tailored solutions.
            </p>
          </div>

          <div className="value-box">
            <FaHeart className="icon" />
            <h3>Service Over Profit</h3>
            <p>
              Quality, transparency, and genuine care always come before numbers — your satisfaction is our true success.
            </p>
          </div>
        </div>

        <p className="closing-text">
          These values are not just words — they are the foundation of every interaction, every strategy, and every outcome we deliver.
        </p>
      </motion.div>
    </div>
  );
};

export default CoreValuesPage;
