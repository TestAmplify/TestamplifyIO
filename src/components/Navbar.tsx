import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from 'lucide-react';

const Navbar = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/contact');
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/');
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  const handleFAQClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/', { state: { scrollToFAQ: true } });
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" onClick={handleLogoClick} className="flex items-center">
              <Box className="w-8 h-8 text-[#142e84]" />
              <span className="ml-2 text-xl font-semibold text-gray-900">testamplify</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-[#142e84] transition-colors">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-[#142e84] transition-colors">Services</Link>
            <Link to="/engagement" className="text-gray-700 hover:text-[#142e84] transition-colors">Engagement</Link>
            <a href="#faq" onClick={handleFAQClick} className="text-gray-700 hover:text-[#142e84] transition-colors">FAQs</a>
          </div>

          <button 
            onClick={handleGetStarted}
            className="bg-[#142e84] text-white px-6 py-2 rounded-lg hover:bg-[#142e84]/90 transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;