import React from 'react';
import logo from '../../assets/logo/logo.svg';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <img src={logo} alt="SimpliDo Logo" className="h-8 w-auto" />
          </a>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#pricing" className="text-gray-600 hover:text-gray-900">Pricing</a>
          <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Header; 