import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import MediumScreenNavbar from "./MediumScreenNavbar";
import SmallScreenNavbar from "./SmallScreenNavbar";
import Contact from "./Contact";
import { Alfa_Slab_One } from "next/font/google";

const alfa_slab_one = Alfa_Slab_One({ subsets: ["latin"], weight: "400" });

const Header = () => {
  const [contactForm, setContactForm] = useState(false);
  const handleOnClose = (e) => {
    setContactForm(false);
  };

  return (
    <>
      <nav className="absolute md:fixed top-0 left-0 bg-white dark:bg-gray-900 w-full top-0 left-0 border-b border-gray-200 dark:border-gray-600 z-10">
        <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between py-4 px-4 lg:px-16">
          <Link
            href="/"
            className="flex title-font py-auto font-medium items-center text-white my-auto"
          >
            <span className="text-2xl ml-4 text-gray-500 tracking-wider dark:text-white hover:text-blue-600 dark:hover:text-blue-500">
              <span className={alfa_slab_one.className}>Jai</span>
            </span>
          </Link>
          {/* Show Contact form   */}
          <Contact onClose={handleOnClose} visible={contactForm} />
          {/* Buy Insurance button for smaller screen */}
          <div className="ml-auto mr-2 md:hidden">
            <button
              type="button"
              className="text-white bg-blue-600 transition tracking-wider hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-sm px-4 py-2 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                setContactForm(true);
              }}
            >
              Buy Insurance
            </button>
          </div>

          {/* Buy Insurance button for medium and larger screens */}
          <div className="hidden md:flex md:order-2">
            <button
              type="button"
              className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-4 py-2 text-center md:mr-0 dark:text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => {
                setContactForm(!contactForm);
              }}
            >
              Buy Insurance
            </button>
          </div>
          {/* Navbar for Smaller Screens */}
          <SmallScreenNavbar />
          {/* Navbar for Medium and Larger screens */}
          <MediumScreenNavbar />
        </div>
      </nav>
    </>
  );
};

export default Header;
