import React from 'react';
import { Link } from 'react-router-dom';

const CallToAction = () => {
  return (
    <section id="call-to-action" className="py-20 bg-gradient-to-r from-indigo-600  to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:max-w-lg">
            <h2 className="text-4xl font-extrabold md:text-5xl leading-tight">
              Supercharge Your Coding Workflow
            </h2>
            <p className="mt-6 text-lg text-gray-200">
              Join thousands of developers who are writing better, faster code with NeoCopilot. Harness the power of AI-driven code suggestions directly in your IDE.
            </p>
          </div>
          <div className="mt-8 md:mt-0 flex justify-center md:justify-end">
            <a href="vscode:extension/vidyutdatalabs.neocopilot" 
              className="inline-block px-8 py-4 bg-white text-indigo-600 font-bold rounded-full transition duration-300 transform hover:bg-gray-200 hover:scale-105 shadow-lg">
              Download NeoCopilot Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
