
import React from 'react';
import { Link } from 'react-router-dom';
import { Video } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="flex items-center space-x-2">
          <Video className="h-6 w-6 text-brand-blue" />
          <span className="font-bold text-xl bg-gradient-to-r from-brand-blue to-brand-blue-light bg-clip-text text-transparent">
            RapidTube
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className="text-sm font-medium text-gray-700 hover:text-brand-blue transition-colors"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-sm font-medium text-gray-700 hover:text-brand-blue transition-colors"
          >
            About
          </Link>
          <Link 
            to="/faq" 
            className="text-sm font-medium text-gray-700 hover:text-brand-blue transition-colors"
          >
            FAQ
          </Link>
        </nav>
        
        <div className="md:hidden">
          <button 
            type="button" 
            className="text-gray-700 hover:text-brand-blue"
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
