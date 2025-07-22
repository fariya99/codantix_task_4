import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p className="text-sm">&copy; 2025 My Website. All rights reserved.</p>
        <div className="flex space-x-10">
          <a href="#privacy" className="hover:text-white transition">
            Privacy&nbsp;Policy
          </a>&nbsp;&nbsp;&nbsp;
          <a href="#terms" className="hover:text-white transition">
            Terms&nbsp;of&nbsp;Service
          </a>&nbsp;&nbsp;&nbsp;
          <a href="#contact" className="hover:text-white transition">
            Contact&nbsp;Us 
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

