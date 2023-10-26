import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between px-4 lg:px-16">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023 Jai Investments™ . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <Link href="/leadership" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="/" className="mr-4 hover:underline md:mr-6">
              Licensing
            </Link>
          </li>
          <li>
            <Link href="/" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="mx-auto mb-4 max-w-screen-xl text-sm text-gray-500 text-center dark:text-gray-400 px-4 lg:px-16">
        <p>
          Disclaimer : The content provided is for informational purposes only
          and does not constitute insurance advice. We cannot guarantee the
          accuracy, adequacy, or completeness of the information presented.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
