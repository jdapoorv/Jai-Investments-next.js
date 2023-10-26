import Link from "next/link";
import React, { useState } from "react";

const SmallScreenNavbar = () => {
  let [navBar, setNavBar] = useState(false);
  const handleClick = (e) => {
    if (navBar && e.target.id != "navbar-sticky") {
      setNavBar(!navBar);
    }
  };

  // Close the dropdown menu, once the user navigates to a page

  const toggleMenu = () => {
    setNavBar(!navBar);
  };

  return (
    <>
      {/* Button to toggle menu on smaller screens */}
      <button
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-sticky"
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        {navBar ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </button>

      <div
        className={`${
          navBar ? "items-center justify-between w-full md:hidden" : "hidden"
        }`}
        id="navbar-sticky"
      >
        <ul className="flex flex-col p-4 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
          <li>
            <div className="relative group">
              {/* Dropdown Button */}
              <button className="block text-md py-2 pl-3 pr-4 text-gray-900 rounded hover:text-blue-600 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700">
                Health Insurance
                <svg
                  className="inline ml-2 w-3 h-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                  />
                </svg>
              </button>
              {/* Dropdown Menu (hidden by default) */}
              <ul className="p-4 mt-1 font-medium rounded-lg bg-gray-50 dark:bg-gray-800 hidden group-hover:block">
                <li>
                  <Link
                    href="/health/health101"
                    className="px-4 py-2 text-gray-800 hover:text-blue-600 dark:text-white "
                    onClick={toggleMenu}
                  >
                    Health Insurance 101
                  </Link>
                </li>
                <li>
                  <Link
                    href="/health/healthChecklist"
                    className="px-4 py-2 text-gray-800 hover:text-blue-600 dark:text-white "
                    onClick={toggleMenu}
                  >
                    Health Insurance Checklist
                  </Link>
                </li>
                <li>
                  <Link
                    href="/health/healthTopInsurers"
                    className="px-4 py-2 text-gray-800 hover:text-blue-600 dark:text-white "
                    onClick={toggleMenu}
                  >
                    Top Health Insurers
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="relative group">
              {/* Dropdown Button */}
              <button className="block text-md py-2 pl-3 pr-4 text-gray-900 rounded hover:text-blue-600 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700">
                Life Insurance
                <svg
                  className="inline ml-2 w-3 h-3 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 8"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="{2}"
                    d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"
                  />
                </svg>
              </button>
              {/* Dropdown Menu (hidden by default) */}
              <ul className="p-4 mt-1 font-medium rounded-lg bg-gray-50 dark:bg-gray-800 hidden group-hover:block">
                <li>
                  <Link
                    href="/life/life101"
                    className="px-4 py-2 text-gray-800 hover:text-blue-600 dark:text-white "
                    onClick={toggleMenu}
                  >
                    Term Insurance 101
                  </Link>
                </li>
                <li>
                  <Link
                    href="/life/lifeChecklist"
                    className="px-4 py-2 text-gray-800 hover:text-blue-600 dark:text-white "
                    onClick={toggleMenu}
                  >
                    Term Insurance Checklist
                  </Link>
                </li>
                <li>
                  <Link
                    href="/life/zeroCost"
                    className="px-4 py-2 text-gray-800 hover:text-blue-600 dark:text-white "
                    onClick={toggleMenu}
                  >
                    Zero Cost term plans
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link
              href="/claimsSupport"
              className="group text-md py-2 pl-3 pr-4 text-gray-900 rounded hover:text-blue-600 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 md:dark:hover:text-blue-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              onClick={toggleMenu}
            >
              Claims Support
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SmallScreenNavbar;
