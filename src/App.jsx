import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, {useEffect, useState} from 'react'
import Header from './Components/Header/Header';
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import DisclaimerPopup from './Components/DisclaimerPopup/DisclaimerPopup';
import ServicesSection from './Components/Service/ServiceSection';
import About from './Components/About/About';
import AboutSection from './Components/AboutSection/AboutSection';
import WhoWeAre from './Components/WhoWeAre/WhoWeAre';
import OurExpertise from './Components/OurExpertise/OurExpertise';
import ClientIndustries from './Components/ClientIndustries/ClientIndustries';
import OurVision from './Components/OurVision/OurVision';
import CoreValues from './Components/CoreValues/CoreValues';
import WhyChooseUs from './Components/WhyChooseUs/WhyChooseUs';
import WhatSetsUsApart from './Components/WhatSetsUsApart/WhatSetsUsApart';
import FooterContact from './Components/footer/footer';





const App = () => {
  const heroData = [
    { text1: "Let's Dive into", text2: "what you love" },
    { text1: "Know", text2: "your niche" },
    { text1: "Indulge with", text2: "your passion" },
    { text1: "Embrace", text2: "creative thinking" },
    { text1: "Connect to", text2: "what drives you" },
    { text1: "Experience", text2: "something new" },
    { text1: "Unlock", text2: "your potential" },
    { text1: "Turn ideas into", text2: "action" },
  ];

  const [heroCount,setHeroCount] = useState(0);
  const [playStatus,setPlayStatus] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [textHeroCount, setTextHeroCount] = useState(0);

  const totalCount = 8;

  useEffect(() => {
    const visited = localStorage.getItem('visited');
    if (!visited) {
      setShowPopup(true);
    }
    const interval = setInterval(() => {
      setHeroCount((count) => {
        const nextCount = (count + 1) % totalCount;
        // Delay text change until fade-in completes (1000ms)
        setTimeout(() => setTextHeroCount(nextCount), 100);
        return nextCount;
      });
    }, 4000);
    return () => clearInterval(interval);
  },[])

  const handleAgree = () => {
    localStorage.setItem('visited', 'true');
    setShowPopup(false);
  };

  const handleDisagree = () => {
    alert('You need to agree to proceed!');
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Background playStatus={playStatus} heroCount={heroCount} />
              <Navbar />
              <Hero
                setPlayStatus={setPlayStatus}
                heroData={heroData[textHeroCount]}
                heroCount={heroCount}
                setHeroCount={(idx) => {
                  setHeroCount(idx);
                  setTextHeroCount(idx);
                }}
                playStatus={playStatus}
                totalCount={heroData.length}
              />
              <ServicesSection />
              <About />
              <FooterContact/>
              {showPopup && (
                <DisclaimerPopup onAgree={handleAgree} onDisagree={handleDisagree} />
              )}
            </>
          }
        />
        <Route path="/about" element={<AboutSection />} />
        <Route path="/who-we-are" element={<WhoWeAre />} />
        <Route path="/our-expertise" element={<OurExpertise />} />
        <Route path="/client-industries" element={<ClientIndustries />} />
        <Route path="/our-vision" element={<OurVision />} />
        <Route path="/core-values" element={<CoreValues />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/what-sets-us-apart" element={<WhatSetsUsApart />} />
      
      </Routes>
    </Router>
  );
};

export default App