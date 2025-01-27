import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '/logo-primary.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Add scroll to top effect when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false); // Close menu when route changes
  }, [location.pathname]);

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
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" onClick={handleLogoClick} className="flex items-center">
              <img 
                src={logo} 
                alt="testamplify" 
                className="h md:h-10 w-[7rem] sm:w-[9rem] md:w-auto" 
              />
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/about" 
              className={`${location.pathname === '/about' ? 'text-[#142e84] font-medium' : 'text-gray-700'} hover:text-[#142e84] transition-colors`}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className={`${location.pathname === '/services' ? 'text-[#142e84] font-medium' : 'text-gray-700'} hover:text-[#142e84] transition-colors`}
            >
              Services
            </Link>
            <Link 
              to="/engagement" 
              className={`${location.pathname === '/engagement' ? 'text-[#142e84] font-medium' : 'text-gray-700'} hover:text-[#142e84] transition-colors`}
            >
              Engagement
            </Link>
            <a 
              href="#faq" 
              onClick={handleFAQClick} 
              className="text-gray-700 hover:text-[#142e84] transition-colors"
            >
              FAQs
            </a>
          </div>

          {/* Get Started Button - Desktop */}
          <button 
            onClick={handleGetStarted}
            className="hidden md:block bg-[#142e84] text-white px-6 py-2 rounded-lg hover:bg-[#142e84]/90 transition-colors"
          >
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-[#142e84] transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-4 py-3 space-y-3">
            <Link 
              to="/about"
              className={`block ${location.pathname === '/about' ? 'text-[#142e84] font-medium' : 'text-gray-700'} hover:text-[#142e84] transition-colors`}
            >
              About
            </Link>
            <Link 
              to="/services"
              className={`block ${location.pathname === '/services' ? 'text-[#142e84] font-medium' : 'text-gray-700'} hover:text-[#142e84] transition-colors`}
            >
              Services
            </Link>
            <Link 
              to="/engagement"
              className={`block ${location.pathname === '/engagement' ? 'text-[#142e84] font-medium' : 'text-gray-700'} hover:text-[#142e84] transition-colors`}
            >
              Engagement
            </Link>
            <a 
              href="#faq"
              onClick={handleFAQClick}
              className="block text-gray-700 hover:text-[#142e84] transition-colors"
            >
              FAQs
            </a>
            <button 
              onClick={handleGetStarted}
              className="w-full bg-[#142e84] text-white px-6 py-2 rounded-lg hover:bg-[#142e84]/90 transition-colors"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;