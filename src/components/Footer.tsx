import React from 'react';
import { Box, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <Box className="w-8 h-8" />
              <span className="ml-2 text-xl font-semibold">TESTAMPLIFY</span>
            </div>
            <address className="not-italic mb-4">
              <p>17350 State Hwy 249, Ste 220 #13012</p>
              <p>Houston, Texas 77064</p>
              <p>United States</p>
            </address>
            <div className="space-y-2">
              <p><span className="font-semibold">Phone:</span> +1 832 965 6639</p>
              <p><span className="font-semibold">Email:</span> admin@testamplify.io</p>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Useful Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-blue-300 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-blue-300 transition-colors">About us</Link></li>
              <li><Link to="/services" className="hover:text-blue-300 transition-colors">Services</Link></li>
              <li><Link to="/terms" className="hover:text-blue-300 transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="hover:text-blue-300 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Other Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Other Services</h3>
            <ul className="space-y-4">
              <li><Link to="/blog" className="hover:text-blue-300 transition-colors">Blog</Link></li>
              <li><a href="https://testamplify.com/" target="_blank" className="hover:text-blue-300 transition-colors">Career Advancement</a></li>
              <li><a href="https://mini-bank.testamplify.com/" target="_blank" className="hover:text-blue-300 transition-colors">Demo-Site</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="https://x.com/testamped" target="_blank" className="hover:text-blue-300 transition-colors" aria-label="X (formerly Twitter)">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.facebook.com/testamped" target="_blank" className="hover:text-blue-300 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://www.instagram.com/testamped" target="_blank" className="hover:text-blue-300 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/company/testamplified/" target="_blank" className="hover:text-blue-300 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-800 mt-12 pt-8 text-center">
          <p>© Copyright Testamplify. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;