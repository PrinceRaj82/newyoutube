
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Video, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <Video className="h-6 w-6 text-red-600" />
          <span className="font-bold text-xl bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent">
            RapidTube
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
          >
            About
          </Link>
          <Link 
            to="/faq" 
            className="text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
          >
            FAQ
          </Link>
        </nav>
        
        <div className="md:hidden">
          <button 
            type="button" 
            className="text-gray-700 hover:text-red-600"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile navigation menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="bg-white border-t px-4 py-3 space-y-3">
            <Link 
              to="/" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-red-600 py-2"
            >
              Home
            </Link>
            <Link 
              to="/about" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-red-600 py-2"
            >
              About
            </Link>
            <Link 
              to="/faq" 
              onClick={() => setIsMenuOpen(false)}
              className="block text-sm font-medium text-gray-700 hover:text-red-600 py-2"
            >
              FAQ
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
