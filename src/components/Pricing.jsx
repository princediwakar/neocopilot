import React from "react";

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Find the perfect plan that suits your needs and unlock the full potential of NeoCopilot.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {/* Free Plan */}
          <div className="p-8 border border-gray-200 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
              Free Plan
            </h3>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Ideal for Personal Use</p>
            <ul className="mt-8 space-y-4">
              <li>✔ Basic Completions</li>
              <li>✔ 5 Languages</li>
              <li>✘ 30+ Languages</li>
              <li>✘ Unlimited Use</li>
              <li>✔ Limited Context</li>
              <li>✘ Email Support</li>
              <li>✔ Code Snippets</li>
              <li>✔ Debugging Help</li>
              <li>✘ Auto Updates</li>
              <li>✘ Priority Support</li>
              <li>✘ Team Collaboration</li>
              <li>✘ Version Control</li>
              <li>✘ Detailed Docs</li>
              <li>✘ Corporate License</li>
              <li>✔ Data Security</li>
              <li>✘ 24/7 Support</li>
              <li>✘ System Integration</li>
              <li>✘ Audit Logs</li>
              <li>✘ Custom Analytics</li>
            </ul>
          </div>
          {/* Pro Plan */}
          <div className="p-8 border border-gray-200 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
              Pro Plan
            </h3>
            <p className="mt-4 text-gray-500 dark:text-gray-400">Perfect for Teams</p>
            <p className="mt-2 text-2xl font-bold text-gray-800 dark:text-white">
              $10/month
            </p>
            <ul className="mt-8 space-y-4">
              <li>✔ Basic Completions</li>
              <li>✘ 5 Languages</li>
              <li>✔ 30+ Languages</li>
              <li>✔ Unlimited Use</li>
              <li>✘ Limited Context</li>
              <li>✔ Email Support</li>
              <li>✔ Code Snippets</li>
              <li>✔ Debugging Help</li>
              <li>✔ Auto Updates</li>
              <li>✘ Priority Support</li>
              <li>✘ Team Collaboration</li>
              <li>✔ Version Control</li>
              <li>✔ Detailed Docs</li>
              <li>✘ Corporate License</li>
              <li>✔ Data Security</li>
              <li>✘ 24/7 Support</li>
              <li>✘ System Integration</li>
              <li>✘ Audit Logs</li>
              <li>✘ Custom Analytics</li>
            </ul>
          </div>
          {/* Custom Plan */}
          <div className="p-8 border border-gray-200 rounded-3xl bg-white dark:bg-gray-800 dark:border-gray-700 shadow-lg">
            <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
              Custom Plan
            </h3>
            <p className="mt-4 text-gray-500 dark:text-gray-400">For Large Enterprises</p>
            <ul className="mt-8 space-y-4">
              <li>✔ Basic Completions</li>
              <li>✘ 5 Languages</li>
              <li>✔ 30+ Languages</li>
              <li>✔ Unlimited Use</li>
              <li>✘ Limited Context</li>
              <li>✔ Email Support</li>
              <li>✔ Code Snippets</li>
              <li>✔ Debugging Help</li>
              <li>✔ Auto Updates</li>
              <li>✔ Priority Support</li>
              <li>✔ Team Collaboration</li>
              <li>✔ Version Control</li>
              <li>✔ Detailed Docs</li>
              <li>✔ Corporate License</li>
              <li>✔ Data Security</li>
              <li>✔ 24/7 Support</li>
              <li>✔ System Integration</li>
              <li>✔ Audit Logs</li>
              <li>✔ Custom Analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
