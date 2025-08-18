import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import EventsSection from './components/EventsSection';
import ProjectsSection from './components/ProjectsSection';
import TeamSection from './components/TeamSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
export function App() {
  return <div className="relative w-full min-h-screen bg-gradient-to-b from-gray-900 to-blue-950 text-white overflow-hidden">
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
    </div>;
}