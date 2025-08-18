import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'About',
    href: '#about'
  }, {
    name: 'Services',
    href: '#services'
  }, {
    name: 'Events',
    href: '#events'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Team',
    href: '#team'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/70 backdrop-blur-md py-2 shadow-lg' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
<a href="#" className="text-xl font-bold flex items-center">
  <img 
    src="/logo.webp" 
    alt="Logo" 
    className="h-16 w-auto"
  />
</a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map(link => <a key={link.name} href={link.href} className="text-white/80 hover:text-white transition-colors duration-300">
              {link.name}
            </a>)}
          <a href="#join" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors duration-300">
            Join Us
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && <div className="md:hidden bg-black/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-white/80 hover:text-white py-2 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
                {link.name}
              </a>)}
            <a href="#join" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md text-center transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>
              Join Us
            </a>
          </div>
        </div>}
    </header>;
};
export default Header;