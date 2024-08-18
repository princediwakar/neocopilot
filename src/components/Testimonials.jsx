import React from "react";

const Testimonials = () => {
  return (
    <div
      className="text-gray-600 py-20 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-black dark:text-gray-300"
      id="testimonials"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="mb-20 space-y-4 px-6 md:px-0">
          <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            What Developers Are Saying
          </h2>
        </div>
        <div className="md:columns-2 lg:columns-3 gap-8 space-y-8">
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <div>
                <h6 className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
                  Rahul Desai
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Full Stack Developer
                </p>
              </div>
            </div>
            <p className="mt-8">
              NeoCopilot has completely changed the way I code! The real-time
              suggestions are spot-on and have saved me so much time.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <div>
                <h6 className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
                  Aisha Khan
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Software Engineer
                </p>
              </div>
            </div>
            <p className="mt-8">
              I’ve tried a few AI coding tools, but NeoCopilot is by far the best. It integrates seamlessly with my workflow and feels like a natural extension of my coding environment.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <div>
                <h6 className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
                  Vikram Sethi
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Backend Developer
                </p>
              </div>
            </div>
            <p className="mt-8">
              I was skeptical at first, but NeoCopilot really knows its stuff. The AI suggestions are on point, and it’s helped me catch errors before they become a problem.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <div>
                <h6 className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
                  Radhika Iyer
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Frontend Developer
                </p>
              </div>
            </div>
            <p className="mt-8">
              As someone who’s always juggling multiple projects, NeoCopilot saves me so much time. It’s like having an extra pair of hands.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <div>
                <h6 className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
                  Arjun Mehra
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  DevOps Engineer
                </p>
              </div>
            </div>
            <p className="mt-8">
              The setup was a breeze, and the real-time suggestions are incredibly useful. It’s helped me become more efficient and confident in my coding.
            </p>
          </div>
          <div className="aspect-auto p-8 border border-gray-100 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-2xl shadow-gray-600/10 dark:shadow-none">
            <div className="flex gap-4">
              <div>
                <h6 className="text-lg font-medium text-indigo-600 dark:text-indigo-400">
                  Sneha Verma
                </h6>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Data Scientist
                </p>
              </div>
            </div>
            <p className="mt-8">
              NeoCopilot has made a huge difference in my coding speed and accuracy. It’s like having an expert looking over my shoulder, guiding me through complex code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
