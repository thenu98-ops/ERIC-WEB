import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import EventsSection from "./components/EventsSection";
import ProjectsSection from "./components/ProjectsSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);
    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {loading ? (
        // 🚀 Fullscreen Loader with Robot
        <div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 to-black flex flex-col justify-center items-center z-50 transition-opacity duration-700">
          {/* Robot body */}
          <motion.div
            className="relative w-24 h-32 bg-gray-200 rounded-lg flex flex-col items-center justify-center shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            {/* Eyes */}
            <div className="flex space-x-4 mb-2">
              <div className="w-4 h-4 bg-black rounded-full"></div>
              <div className="w-4 h-4 bg-black rounded-full"></div>
            </div>

            {/* Mouth */}
            <div className="w-12 h-1 bg-black rounded"></div>

            {/* Antenna */}
            <motion.div
              className="absolute -top-6 w-1 h-6 bg-gray-400 rounded"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <div className="w-3 h-3 bg-red-500 rounded-full absolute -top-3 left-[-1px]"></div>
            </motion.div>

            {/* Arms */}
            <motion.div
              className="absolute left-[-16px] top-12 w-4 h-12 bg-gray-400 rounded-lg"
              animate={{ rotate: [0, 20, -20, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <motion.div
              className="absolute right-[-16px] top-12 w-4 h-12 bg-gray-400 rounded-lg"
              animate={{ rotate: [0, -20, 20, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </motion.div>

          {/* Loading Text */}
          <motion.p
            className="text-white mt-6 text-lg font-semibold tracking-wider"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            Loading Robotics World...
          </motion.p>
        </div>
      ) : (
        // 🌐 Main Website Content
        <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 to-blue-950 text-white overflow-hidden animate-fadeIn">
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <StatsSection />
            <ServicesSection />
            <EventsSection />
            <ProjectsSection />
            <TeamSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
