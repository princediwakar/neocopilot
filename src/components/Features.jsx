import React from 'react';
import { FaCode, FaBrain, FaPlug, FaCogs, FaClipboardList, FaUsers } from 'react-icons/fa';

const Features = () => {
  return (
    <div id="features">
      <div className="max-w-7xl mx-auto py-20 px-6 md:px-12 xl:px-6">
        <div className="md:w-2/3 lg:w-1/2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-indigo-600">
            <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z" clipRule="evenodd" />
          </svg>

          <h2 className="my-8 text-2xl font-bold text-gray-700 dark:text-white md:text-4xl">
            Unlock Your Coding Potential
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            NeoCopilot provides AI-driven code suggestions right in your Visual Studio Code environment. 
            Whether you're a beginner or a seasoned developer, NeoCopilot helps you write code faster and more efficiently.
          </p>
        </div>
        <div
          className="mt-16 grid divide-x divide-y divide-gray-100 dark:divide-gray-700 overflow-hidden rounded-3xl border border-gray-100 text-gray-600 dark:border-gray-700 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div className="relative p-8">
            <FaCode className="text-indigo-600 w-8 h-8 mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Real-Time Code Suggestions</h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Get instant, inline suggestions as you type, helping you write code quickly and accurately.
            </p>
          </div>
          <div className="relative p-8">
            <FaBrain className="text-indigo-600 w-8 h-8 mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">AI-Powered Insights</h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Leverage advanced machine learning models to improve your code quality and reduce errors.
            </p>
          </div>
          <div className="relative p-8">
            <FaPlug className="text-indigo-600 w-8 h-8 mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Seamless Integration</h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              NeoCopilot integrates smoothly with Visual Studio Code, making it an essential tool in your development workflow.
            </p>
          </div>
          <div className="relative p-8">
            <FaCogs className="text-indigo-600 w-8 h-8 mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Customizable Suggestions</h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Tailor the AI's suggestions to match your coding style and project needs.
            </p>
          </div>
          <div className="relative p-8">
            <FaClipboardList className="text-indigo-600 w-8 h-8 mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Code Snippet Library</h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Access a library of reusable code snippets directly from your editor.
            </p>
          </div>
          <div className="relative p-8">
            <FaUsers className="text-indigo-600 w-8 h-8 mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 dark:text-white">Collaborative Coding</h3>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">
              Work with your team seamlessly, sharing code suggestions and snippets in real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
