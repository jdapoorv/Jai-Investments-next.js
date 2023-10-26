import Image from "next/image";
import React from "react";

const Companies = () => {
  return (
    <div className="max-w-screen-xl mx-auto justify-between pb-4 px-4 lg:px-16 mb-12 md:mb-0">
      <div class="container mx-auto pt-16">
        <div class="w-11/12 xl:w-2/3 lg:w-2/3 md:w-2/3 mx-auto sm:mb-10 mb-12">
          <h1
            tabindex="0"
            class="focus:outline-none xl:text-4xl md:text-2xl text-xl text-center text-gray-800 font-extrabold mb-5 pt-4"
          >
            We work with the most coveted brands
          </h1>
        </div>
        <div class="xl:py-16 lg:py-16 md:py-16 sm:py-16 px-15 flex flex-wrap">
          <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r :border-r border-gray-200 xl:pb-10 pb-16 items-center">
            <Image
              src="/niva.png"
              width={140}
              height={140}
              className="grayscale hover:grayscale-0"
            />
          </div>
          <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b xl:border-r lg:border-r border-gray-200 xl:pb-10 pb-16 items-center">
            <Image
              src="/hdfc.png"
              width={80}
              height={80}
              className="grayscale hover:grayscale-0"
            />
          </div>
          <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-b lg:border-b border-gray-200 xl:pb-10 pb-16 pt-4 items-center">
            <Image
              src="/tata.png"
              width={160}
              height={160}
              className="grayscale hover:grayscale-0"
            />
          </div>
          <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center lg:border-b xl:border-b lg:border-l xl:border-l border-gray-200 xl:pb-10 pb-16 items-center">
            <Image
              src="/max.png"
              width={110}
              height={100}
              className="grayscale hover:grayscale-0"
            />
          </div>
          <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
            <Image
              src="/iffco.svg"
              width={140}
              height={140}
              className="grayscale hover:grayscale-0"
            />
          </div>
          <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-r lg:border-r border-gray-200 xl:pt-10 items-center">
            <Image
              src="/united.png"
              width={100}
              height={100}
              className="grayscale hover:grayscale-0"
            />
          </div>
          <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:pt-10 lg:pt-10 md:pt-2 pt-16">
            <Image
              src="/lic.png"
              width={140}
              height={90}
              className="grayscale hover:grayscale-0"
            />
          </div>
          <div class="w-6/12 xl:w-1/4 lg:w-1/4 md:w-1/4 flex justify-center xl:border-l lg:border-l border-gray-200 xl:pt-10 lg:pt-10 md:pt-2 pt-16">
            <Image
              src="/hdfc_life.png"
              width={120}
              height={60}
              className="grayscale hover:grayscale-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
