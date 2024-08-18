import React from 'react';

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">How NeoCopilot Works</h2>
          <p className="lg:w-6/12 lg:mx-auto mt-4 text-gray-600 dark:text-gray-300">
            NeoCopilot seamlessly integrates into your development workflow, providing real-time code suggestions to help you code faster and smarter.
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-indigo-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Step 1: Install NeoCopilot</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Download and install NeoCopilot from the Visual Studio Code marketplace to get started.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-indigo-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Step 2: Set Up Preferences</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Customize NeoCopilot to align with your coding style and project needs.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 mb-6 flex items-center justify-center rounded-full bg-indigo-600 text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-10 h-10">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-3-3v6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Step 3: Start Coding</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Begin coding in Visual Studio Code with real-time AI suggestions to enhance your productivity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
