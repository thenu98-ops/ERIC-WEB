import React from 'react';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="py-8 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-bold flex items-center">
              <span className="text-blue-400">ERIC</span>
              <span className="text-white">-KDU</span>
            </a>
          </div>
          <div className="text-white/60 text-sm">
            &copy; {currentYear} Electronics, Robotics and Innovation Club -
            KDU. All rights reserved.
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;