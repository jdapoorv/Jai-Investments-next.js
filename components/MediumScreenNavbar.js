import React from "react";
import Link from "next/link";

const MediumScreenNavbar = () => {
  return (
    <>
      <div
        className="hidden md:flex md:items-center md:justify-between md:w-auto px-4 lg:px-16 bg-white"
        id="navbar-sticky"
      >
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          <li>
            <div className="relative group">
              {/* Dropdown Button */}
              <button className="flex group py-2 pl-3 pr-4 tracking-wider hover:bg-gray-100 md:hover:bg-transparent md:group-hover:text-blue-600 md:p-0 md:dark:hover:text-blue-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:p-0 items-center">
                Health Insurance
                <svg
                  className="ml-2 w-3 h-3 rounded md:group-hover:text-blue-600 md:p-0 md:dark:hover:text-blue-600 dark:text-white dark:hover:text-white"
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
              <ul className="absolute left-2 py-2 bg-white border border-gray-300 rounded shadow-lg hidden group-hover:block dark:bg-gray-800 dark:text-white">
                <h2 className="text-gray-700 dark:text-gray-100 pl-4 py-2">Guides</h2>
                <li className="w-96 group hover:bg-blue-50 dark:hover:bg-black">
                  <Link
                    href="/health/health101"
                    className="block font pl-12 pt-2"
                  >
                    Health Insurance 101
                    <p className="block pl-4 py-2 text-gray-600 dark:group-hover:text-gray-100">
                      Learn about reading policy document
                    </p>
                  </Link>
                </li>
                <li className="w-96 group hover:bg-blue-50 dark:hover:bg-black">
                  <Link
                    href="/health/healthChecklist"
                    className="block font pl-12 pt-2"
                  >
                    Health Insurance Checklist
                    <p className="block pl-4 py-2 text-gray-600 dark:group-hover:text-gray-100">
                      Checklist to idenity a good policy
                    </p>
                  </Link>
                </li>
                <li className="w-96 group hover:bg-blue-50 dark:hover:bg-black">
                  <Link
                    href="/health/healthTopInsurers"
                    className="block font pl-12 pt-2"
                  >
                    Top Health Insurers
                    <p className="block pl-4 py-2 text-gray-600 dark:group-hover:text-gray-100">
                      List of best health insurance providers
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <div className="relative group">
              {/* Dropdown Button */}
              <button className="flex py-2 pl-3 pr-4 tracking-wider text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:group-hover:text-blue-600 md:p-0 md:dark:hover:text-blue-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 md:p-0 items-center">
                Life Insurance
                <svg
                  className="ml-2 w-3 h-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:group-hover:text-blue-600 md:hover:text-blue-600 md:p-0 md:dark:hover:text-blue-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
              <ul className="absolute left-2 py-2 bg-white border border-gray-300 rounded shadow-lg hidden group-hover:block dark:bg-gray-800 dark:text-white">
                <h2 className="text-gray-700 dark:text-gray-100 pl-4 py-2">Guides</h2>
                <li className="w-96 group hover:bg-blue-50 dark:hover:bg-black">
                  <Link href="/life/life101" className="block font pl-12 pt-2">
                    Term Insurance 101
                    <p className="block pl-4 py-2 text-gray-600 dark:group-hover:text-gray-100">
                      Learn about reading policy document
                    </p>
                  </Link>
                </li>
                <li className="w-96 group hover:bg-blue-50 dark:hover:bg-black">
                  <Link
                    href="/life/lifeChecklist"
                    className="block font pl-12 pt-2"
                  >
                    Term Insurance Checklist
                    <p className="block pl-4 py-2 text-gray-600 dark:group-hover:text-gray-100">
                      Checklist to idenity a good policy
                    </p>
                  </Link>
                </li>
                <li className="w-96 group hover:bg-blue-50 dark:hover:bg-black">
                  <Link href="/life/zeroCost" className="block font pl-12 pt-2">
                    Zero Cost Term Plans
                    <p className="block pl-4 py-2 text-gray-600 dark:group-hover:text-gray-100">
                      Learn about zero cost term plans
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="/claimsSupport">
              <button className="group py-2 pl-3 pr-4 text-gray-900 tracking-wider rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-600 md:p-0 md:dark:hover:text-blue-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Claims Support
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MediumScreenNavbar;
