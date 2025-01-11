import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About SimpliDo</h3>
            
            <p className="text-gray-300">Looking for an easy, fast, and secure way to stay organized? Meet SimpliDo, the perfect task management web app designed to help you manage your daily tasks with ease. Whether you're a student, professional, or busy parent, simpliDo is your go-to solution for achieving your goals and staying productive.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">Email: info@example.com</p>
            <p className="text-gray-300">Phone: +123456789</p>
            <p className="text-gray-300">Phone: +123456789</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 