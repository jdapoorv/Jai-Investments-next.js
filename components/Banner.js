import React, { useState } from "react";
import Contact from "./Contact";

const Banner = ({text1, text2}) => {
  const [contactForm, setContactForm] = useState(false);

  const handleOnClose = (e) => {
    setContactForm(false);
  };

  return (
    <div className="max-w-screen-xl mx-auto mb-12 items-center justify-between px-4 lg:px-16">
      <div
        className="bg-cover bg-center rounded-md text-white py-24 px-10"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1558981806-ec527fa84c39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)",
        }}
      >
        <div className="md:w-1/2">
          <p className="font-bold text-sm mb-2 uppercase">Get in touch</p>
          <p className="text-3xl mb-2 font-bold">{text1}</p>
          <p className="text-2xl mb-10 leading-none">
            {text2}
          </p>
          <button
            type="button"
            className="text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md text-md px-4 py-2 text-center md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => {
              setContactForm(!contactForm);
            }}
          >
            Contact Us
          </button>
          {/* Show Contact form   */}
        </div>
        <div className="text-black">
          <Contact onClose={handleOnClose} visible={contactForm} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
