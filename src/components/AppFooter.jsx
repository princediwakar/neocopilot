import React from 'react';
import { Link } from 'react-router-dom';

const AppFooter = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About NeoCopilot */}
          <div>
            <h4 className="text-lg font-semibold text-white">About NeoCopilot</h4>
            <p className="mt-4 text-gray-400">
              NeoCopilot is your AI-powered coding assistant designed to help you write better code faster. From real-time suggestions to enhancing code quality, NeoCopilot is your go-to tool for boosting productivity.
            </p>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              <li>
              <a href="#features" className="hover:text-white">Features</a>

                {/* <Link to="#features" className="hover:text-white">Features</Link> */}
              </li>
              <li>
                <a href="#pricing" className="hover:text-white">Pricing</a>
              </li>
              <li>
                <a href="#use-cases" className="hover:text-white">Use Cases</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white">Testimonials</a>
              </li>
              {/* <li>
                <a href="#contact" className="hover:text-white">Contact Us</a>
              </li> */}
            </ul>
          </div>
          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <p className="mt-4 text-gray-400">
              Have questions? Reach out to our support team and we'll get back to you as soon as possible.
            </p>
            <p className="mt-4 text-gray-400">Email: support@neocopilot.io</p>
            {/* <p className="mt-2 text-gray-400">Phone: +1 (800) 123-4567</p> */}
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} NeoCopilot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
