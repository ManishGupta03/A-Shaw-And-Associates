import React from 'react';
import profile from '../../assets/profile2.jpg'



const AboutSection = () => {
  return (
    <section id="full-about" className="about-section">
      <div className="about-container">
        <div className="author-image" style={{width: '200px',height: '200px',borderRadius: '50%',border: '5px solid #4caf50',overflow: 'hidden', cursor:'pointer',}}>
          <img src= {profile} alt="Author" style={{width: '100%',height: '100%', objectFit: 'cover',display: 'block',}}/>
        </div>
        <div className="about-content">
          <h2>About A Shaw & Associates</h2>
          <p>
            A Shaw & Associates is a trusted Chartered Accountant firm committed to delivering comprehensive financial, audit, and advisory solutions to individuals, businesses, and institutions. With a strong foundation in professional ethics, accuracy, and client-centric values, we have built a reputation for excellence across various domains of finance, compliance, and strategic consulting.
          </p>
        </div>
        <div className="about-content">
          <h2>Trusted Advisors. Committed Partners.</h2>
          <p>
          A Shaw & Associates is a dynamic Chartered Accountant firm founded in January 2025 by Aman Shaw, a seasoned tax expert and business consultant. Inspired by the Indian government’s vision to empower entrepreneurship and self-reliance, the firm was established with a mission to support businesses of all sizes through expert financial, regulatory, and strategic solutions.
            Headquartered in India, we are backed by a robust network of 22 Chartered Accountant firms across the country. This collaborative ecosystem allows us to leverage shared resources, specialized knowledge, and regional expertise—delivering seamless, reliable, and efficient services to clients throughout India and across the globe.

          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
