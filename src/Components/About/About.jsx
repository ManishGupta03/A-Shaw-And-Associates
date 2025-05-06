import React from "react";
import "./About.css";
import { Link } from 'react-router-dom';
import { FaUsers, FaBullseye, FaBalanceScale, FaHandshake, FaLightbulb } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";
import { AiOutlineApartment } from "react-icons/ai";

const AboutUs = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-heading">About </h2>
        <h3 className="sub-title">A Shaw & Associates</h3>

        <p className="intro-text">
        A Shaw & Associates is a trusted Chartered Accountant firm committed to delivering comprehensive financial, audit, and advisory solutions to individuals, businesses, and institutions. With a strong foundation in professional ethics, accuracy, and client-centric values, we have built a reputation for excellence across various domains of finance, compliance, and strategic consulting.
        </p>
        <div className="center-container">
        <Link to="/about" className="read-more-link">Read More About Us →</Link>
            </div>

        <div className="highlight-box">
          <p>
            <strong>Founded:</strong> January 2025 by Aman Shaw<br />
            <strong>Backed by:</strong> 22 associated CA firms nationwide<br />
            <strong>Headquartered:</strong> India
          </p>
        </div>

        <div className="about-grid">
          <div className="card">
            <FaUsers className="card-icon" />
            <h3>Who We Are</h3>
            <ul>
              <li>Audit & Assurance</li>
              <li>2 Semi-qualified Chartered Accountants.</li>
              <li>2 Full-time administrative professionals.</li>
              <li>Backed by a nationwide network of 22 associated CA firms.</li>
              <li>Every team member upholds the highest ethical standards set by the ICAI.</li>
              <li>We ensure strict adherence to professional guidelines and integrity.</li>
          
            <li>Quality and professionalism are reflected in every service we deliver.  <Link to="/who-we-are" className="card-link">Learn More →</Link></li>
              

            </ul>
          </div>
          <div className="card">
            <FaLightbulb className="card-icon" />
            <h3>Our Expertise</h3>
            <ul>
              <li>Audit & Assurance</li>
              <li>Accounting & Bookkeeping</li>
              <li>Direct & Indirect Taxation</li>
              <li>Corporate Compliance & Regulatory Filings</li>
              <li>Financial Consulting & Virtual CFO Services</li>
              <li>Startup & MSME Advisory</li>
              <li>Loan Syndication & Investment Planning</li>
              <li>We leverage modern tools and technology to deliver accurate, timely, and scalable business solutions.   <Link to="/our-expertise" className="card-link">Learn More →</Link></li>
             

            </ul>
          </div>
          <div className="card">
            <FaUsersLine className="card-icon" />
            <h3>Clientele & Industries</h3>
            <ul>
              <li>We proudly serve clients across diverse industries and sectors.</li>
              <li>Our clientele ranges from startups and small businesses to large corporations.</li>
              <li>We also cater to international entities with complex needs.</li>
              <li>Our services support the manufacturing and industrial sectors.</li>
              <li>We work extensively with IT, real estate, healthcare, and finance industries.</li>
              <li>We also serve organizations in the non-profit and social impact sectors.   <Link to="/client-industries" className="card-link">Learn More →</Link></li>
            </ul>
          </div>
          <div className="card">
            <FaBullseye className="card-icon" />
            <h3>Our Vision</h3>
            <ul>
              <li>Aspire to be among the Top 10 Chartered Accountant firms globally.</li>
              <li>Focus on delivering measurable and meaningful impact to clients.</li>
              <li>Commit to driving sustainable, long-term growth for businesses.</li>
              <li>Uphold excellence and global standards in every service we provide.   <Link to="/our-vision" className="card-link">Learn More →</Link></li>
            </ul>
          </div>
          <div className="card">
            <FaBalanceScale className="card-icon" />
            <h3>Core Values</h3>
            <ul>
              <li>Accountability, We treat client goals as our own.</li>
              <li>Integrity, Guided by ICAI standards.</li>
              <li>Service Over Profit, We value quality over volume.</li>
              <li>Client-Centric, We grow when you grow.   <Link to="/core-values" className="card-link">Learn More →</Link></li>
            </ul>
          </div>
          <div className="card">
            <FaHandshake className="card-icon" />
            <h3>Why Choose Us?</h3>
            <ul>
              <li>National CA Network for pan-India service.</li>
              <li>Modern tech tools for accuracy & speed.</li>
              <li>Personalized attention & proactive support.</li>
              <li>Trusted by businesses, startups & global clients.   <Link to="/why-choose-us" className="card-link">Learn More →</Link></li>
            </ul>
          </div>

          <div className="card center-card">
            <AiOutlineApartment  className="card-icon" />
            <h3>What Sets Us Apart</h3>
            <ul>
              <li>💡A strong national network with local insights.</li>
              <li>🧠A team that values continuous learning and collaboration.</li>
              <li>⚙️Use of modern technology platforms for accuracy and timeliness.</li>
              <li>🤝Personalized services grounded in real accountability.</li>
              <li>🌍Ability to serve clients in India and abroad with equal efficiency.   <Link to="/what-sets-us-apart" className="card-link">Learn More →</Link></li>
            </ul>
          </div>
        </div>

        <div className="about-highlight-quote">
  <p className="quote-text">
    Whether you're an <strong>entrepreneur</strong> or an <strong>enterprise</strong>, <span>A Shaw & Associates</span> is your dependable partner for everything from <strong>tax and audit</strong> to <strong>compliance and strategy</strong>.
  </p>
</div>

        <div className="final-note">
          <h3><span>📞</span> Get in touch — Let’s grow together!</h3>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
