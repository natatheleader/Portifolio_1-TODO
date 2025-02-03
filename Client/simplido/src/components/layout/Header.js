import React from 'react';
import logo from '../../assets/logo/logo.svg';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center transform transition-all duration-300 hover:scale-105">
            <img src={logo} alt="SimpliDo Logo" className="h-8 w-auto" />
          </a>
        </div>
        <div className="flex items-center space-x-4">
          {['Features', 'Pricing', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-600 hover:text-gray-900 relative group px-2 py-1"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header; 