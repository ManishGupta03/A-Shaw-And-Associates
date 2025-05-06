import React from "react";
import { motion } from "framer-motion";
import { Building2 } from "lucide-react";
// import {background} from '../../assets/background.jpg'

const WhatMakesUsStandOut = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{
          backgroundImage: `url('https://unsplash.com/photos/white-and-black-together-we-create-graffiti-wall-decor-bq31L0jQAjU')`,
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            What Makes A Shaw & Associates Stand Out
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            Expertise, Ethics, and Execution. We build lasting relationships based on trust, accountability, and performance.
          </p>
        </div>
      </div>

      {/* Key Strengths Section */}
      <div className="max-w-5xl mx-auto py-16 px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="bg-gray-50 p-6 rounded-2xl shadow-md border-l-4 border-blue-600"
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 1.5 }}
              >
                <Building2 className="text-blue-600 w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-semibold">Strong National Network</h3>
            </div>
            <p className="text-gray-700">
              We are part of a 22-member Chartered Accountant firm network spread across India, 
              allowing us to deliver local expertise with national reach—seamlessly and efficiently.
            </p>
          </motion.div>

          {/* Placeholder Card */}
          <div className="border-2 border-dashed border-gray-300 p-6 rounded-2xl text-center">
            <p className="text-gray-400">More key strengths can be added here...</p>
          </div>
        </div>
      </div>

      {/* Testimonials / Logos Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto text-center px-6">
          <h2 className="text-3xl font-semibold mb-10 text-gray-800">
            Trusted by Clients Across India
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-center">
            {["Tata", "Infosys", "Wipro", "Adani"].map((name, i) => (
              <motion.div
                key={i}
                className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={`https://via.placeholder.com/150?text=${name}`}
                  alt={`${name} Logo`}
                  className="mx-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUsStandOut;
