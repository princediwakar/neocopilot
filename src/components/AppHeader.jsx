import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Logo from '../logo.svg';

const AppHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isLoginPage = location.pathname === '/login';
  const isDashboardPage = location.pathname === '/dashboard';

  if (isDashboardPage) return null; // Don't render header on dashboard

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition ${isScrolled ? 'bg-white/70 backdrop-blur-lg dark:bg-gray-900/70' : 'bg-transparent'}`}>
      <nav className="z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="flex flex-wrap items-center justify-between py-2 gap-6 md:py-4 md:gap-0 relative">
            <input aria-hidden="true" type="checkbox" name="toggle_nav" id="toggle_nav" className="hidden peer" />
            <div className="relative z-20 w-full flex justify-between lg:w-max md:px-0">
              <a href="/" aria-label="logo" className="flex space-x-2 items-center">
                <img src={Logo} alt="NeoCopilot Logo" />
                <span className="text-2xl font-bold text-gray-900 dark:text-white">NeoCopilot</span>
              </a>
              <div className="relative flex items-center lg:hidden max-h-10">
                <label role="button" htmlFor="toggle_nav" aria-label="hamburger" id="hamburger" className="relative p-6 -mr-6">
                  <div aria-hidden="true" id="line" className="m-auto h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                  <div aria-hidden="true" id="line2" className="m-auto mt-2 h-0.5 w-5 rounded bg-sky-900 dark:bg-gray-300 transition duration-300"></div>
                </label>
              </div>
            </div>
            <div aria-hidden="true" className="fixed z-10 inset-0 h-screen w-screen bg-white/70 backdrop-blur-2xl origin-bottom scale-y-0 transition duration-500 peer-checked:origin-top peer-checked:scale-y-100 lg:hidden dark:bg-gray-900/70"></div>
            <div className={`flex-col z-20 flex-wrap gap-6 p-8 rounded-3xl border border-gray-100 bg-white shadow-2xl shadow-gray-600/10 justify-end w-full invisible opacity-0 translate-y-1 absolute top-full left-0 transition-all duration-300 scale-95 origin-top 
            lg:relative lg:scale-100 lg:peer-checked:translate-y-0 lg:translate-y-0 lg:flex lg:flex-row lg:items-center lg:gap-0 lg:p-0 lg:bg-transparent lg:w-7/12 lg:visible lg:opacity-100 lg:border-none
            peer-checked:scale-100 peer-checked:opacity-100 peer-checked:visible lg:shadow-none 
            dark:shadow-none dark:border-gray-700`}>
              <div className="text-gray-600 dark:text-gray-300 lg:pr-4 lg:w-auto w-full lg:pt-0">
                <ul className="tracking-wide font-medium lg:text-sm flex-col flex lg:flex-row gap-6 lg:gap-0">
                  {!isLoginPage && (
                    <>
                         {/* <li>
                        <a href="#features" className="block md:px-4 transition hover:text-primary">
                          <span>Features</span>
                        </a>
                      </li>
                      
                      <li>
                        <a href="#use-cases" className="block md:px-4 transition hover:text-primary">
                          <span>Use Cases</span>
                        </a>
                      </li>
                      <li>
                        <a href="#pricing" className="block md:px-4 transition hover:text-primary">
                          <span>Pricing</span>
                        </a>
                      </li>
                      <li>
                        <a href="/login" className="block md:px-4 transition hover:text-primary">
                          <span>Login</span>
                        </a>
                      </li> */}
                    </>
                  )}
                  {isLoginPage && (
                    <li>
                      <a href="/" className="block md:px-4 transition hover:text-primary">
                        <span>Home</span>
                      </a>
                    </li>
                  )}
                </ul>
              </div>
              {!isLoginPage && (
                <div className="mt-12 lg:mt-0">
                  <a
                    href="vscode:extension/vidyutdatalabs.neocopilot"
                    className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-indigo-600 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                  >
                    <span className="relative text-sm font-semibold text-white">Download</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;
