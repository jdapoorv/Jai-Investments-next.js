import Link from "next/link";
import React, { useState } from "react";
import Contact from "./Contact";
import Image from "next/image";
import Carousel from "./Carousel";

const About = () => {
  return (
    // Container outside
    <div className="max-w-screen-xl mx-auto mt-16 pt-10 flex flex-col justify-between px-4 lg:px-16 md:flex-row">
      <div className="h-1/2 md:w-2/3 md:flex-1 md:order-2">
        {/* Content for the right div */}
        <Carousel />
      </div>

      <div className="w-full pr-8 md:flex-1 md:w-1/3">
        {/* Content for the left div  */}
        <h1 className="text-2xl my-3 font-extrabold md:text-3xl lg:text-4xl dark:text-white">
          Consult with us for a <span className="text-blue-600 dark:text-blue-500">brighter</span>,
          worry-free future.
        </h1>
        <p className="text-gray-700 text-justify text-md md:text-lg dark:text-white">
          We are committed to be the highest standard of
          customer-centered investment consultancy in our community. Get to know about&nbsp;
          <Link href='/leadership' className="text-blue-600 hover:underline dark:text-blue-500">Jai Investments</Link>.
        </p>
      </div>
    </div>
  );
};

export default About;
