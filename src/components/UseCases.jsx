import React from 'react';
import { FaRocket, FaCheckCircle, FaUsers, FaBrain, FaSyncAlt, FaChartLine } from 'react-icons/fa';

const UseCases = () => {
  return (
    <section id="use-cases" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
            How NeoCopilot Can Help You
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Discover powerful use cases that make NeoCopilot an indispensable tool in your development toolkit.
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Use Case 1: Speed Up Development */}
          <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-white dark:bg-gray-800 shadow-lg">
            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-indigo-600 text-white">
              <FaRocket className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Speed Up Development</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Write code faster with real-time AI suggestions.
            </p>
          </div>
          {/* Use Case 2: Enhance Code Quality */}
          <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-white dark:bg-gray-800 shadow-lg">
            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-purple-600 text-white">
              <FaCheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Enhance Code Quality</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Improve code accuracy with intelligent error detection.
            </p>
          </div>
          {/* Use Case 3: Collaborate Effectively */}
          <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-white dark:bg-gray-800 shadow-lg">
            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-pink-600 text-white">
              <FaUsers className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Collaborate Effectively</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Share code and suggestions effortlessly with your team.
            </p>
          </div>
          {/* Use Case 4: Learn New Skills */}
          <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-white dark:bg-gray-800 shadow-lg">
            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-teal-600 text-white">
              <FaBrain className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Learn New Skills</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Gain insights and learn from advanced AI-generated code patterns.
            </p>
          </div>
          {/* Use Case 5: Reduce Repetitive Tasks */}
          <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-white dark:bg-gray-800 shadow-lg">
            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-yellow-600 text-white">
              <FaSyncAlt className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Reduce Repetitive Tasks</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Automate routine coding tasks and focus on more complex problems.
            </p>
          </div>
          {/* Use Case 6: Increase Productivity */}
          <div className="flex flex-col items-center text-center p-6 rounded-3xl bg-white dark:bg-gray-800 shadow-lg">
            <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-red-600 text-white">
              <FaChartLine className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">Increase Productivity</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Boost your output by leveraging AI to handle tedious tasks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;
