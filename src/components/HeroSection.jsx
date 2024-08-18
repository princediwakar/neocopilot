import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative" id="home">
      <div
        aria-hidden="true"
        className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
      >
        <div className="blur-[106px] h-56 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-blue-800"></div>
        <div className="blur-[106px] h-32 bg-gradient-to-r from-teal-400 to-cyan-500 dark:to-blue-700"></div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="relative pt-36 ml-auto">
          <div className="lg:w-2/3 text-center mx-auto">
            <h1 className="text-gray-900 dark:text-white font-bold text-5xl md:text-6xl xl:text-7xl">
              Enhance Your Coding with{" "}
              <span className="text-indigo-600 dark:text-white">
                NeoCopilot
              </span>
            </h1>
            <p className="mt-8 text-gray-700 dark:text-gray-300">
              Experience the power of real-time code suggestions in Visual
              Studio Code with NeoCopilot. Let AI help you code faster and
              smarter, one keystroke at a time.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-y-4 gap-x-6">
              <a
                href="vscode:extension/vidyutdatalabs.neocopilot"
                className="relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-indigo-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
              >
                <span className="relative text-base font-semibold text-white">
                  Install NeoCopilot
                </span>
              </a>
            </div>
            {/* Video Section */}
            <div className="mt-8">
              <video
                autoplay
                loop
                controls
                className="w-full rounded-lg shadow-lg"
              >
                <source
                  src="https://assets.neocopilot.io/videos/inlinevideo.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
