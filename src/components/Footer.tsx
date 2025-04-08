
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">RapidTube</h2>
            <p className="text-sm text-gray-600 max-w-md">
              The fastest and easiest way to download your favorite YouTube videos. 
              High quality downloads for free.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Resources</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-600 hover:text-blue-600">FAQ</Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Legal</h3>
              <ul className="text-sm space-y-2">
                <li>
                  <Link to="/terms" className="text-gray-600 hover:text-blue-600">Terms</Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-600 hover:text-blue-600">Privacy</Link>
                </li>
                <li>
                  <Link to="/disclaimer" className="text-gray-600 hover:text-blue-600">Disclaimer</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <hr className="my-6 border-gray-200" />
        
        <div className="text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} RapidTube. All rights reserved.</p>
          <p className="mt-1">This service is for personal use only.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
