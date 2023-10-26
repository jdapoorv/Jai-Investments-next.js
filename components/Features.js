import React from "react";

const Features = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-10 md:my-12 flex flex-col justify-between px-4 lg:px-16">
      {/* Container for demo purpose */}
      <div className="mx-auto p-4 bg-gray-100 border rounded-md dark:bg-gray-600 dark:text-white">
        {/* Section: Design Block */}
        <section className="text-center">
          <h2 className="text-2xl md:text-3xl mb-4 font-extrabold">
            Your trusted insurance partner
            <span className="text-blue-600 dark:text-blue-600"></span>
          </h2>
          <div className="grid gap-x-6 sm:grid-cols-3 lg:gap-x-12">
            <div className="mb-6 md:mb-0">
              <div className="mb-2 inline-block rounded-md bg-primary-100 py-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  id="Outline"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 dark:fill-white"
                >
                  <path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z" />
                  <path d="M12,10H11a1,1,0,0,0,0,2h1v6a1,1,0,0,0,2,0V12A2,2,0,0,0,12,10Z" />
                  <circle cx="12" cy="6.5" r="1.5" />
                </svg>
              </div>
              <h5 className="mb-2 text-xl font-bold">100%</h5>
              <p className="text-gray-700 dark:text-gray-200">
                Perfect claim-settlement ratio across insurance domains.
              </p>
            </div>
            <div className="mb-6 md:mb-0">
              <div className="mb-2 inline-block rounded-md bg-primary-100 py-4 text-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enableBackground="new 0 0 24 24"
                  height="26"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 dark:fill-white"
                >
                  <g>
                    <rect fill="none" height="24" width="24"></rect>
                  </g>
                  <g>
                    <g>
                      <path d="M13.66,7C13.1,5.82,11.9,5,10.5,5L6,5V3h12v2l-3.26,0c0.48,0.58,0.84,1.26,1.05,2L18,7v2l-2.02,0c-0.25,2.8-2.61,5-5.48,5 H9.77l6.73,7h-2.77L7,14v-2h3.5c1.76,0,3.22-1.3,3.46-3L6,9V7L13.66,7z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <h5 className="mb-4 text-xl font-bold">1 Crore+</h5>
              <p className="text-gray-700 dark:text-gray-200">
                Total claim amount received by our customers across domains.
              </p>
            </div>
            <div className="mb-6 md:mb-0">
              <div className="mb-2 inline-block rounded-md bg-primary-100 py-4 text-primary">
                <svg
                  className="w-6 h-6 dark:fill-white"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 16.5C18 18.9862 15.9862 21 13.5 21C11.0138 21 9 18.9862 9 16.5C9 14.0138 11.0138 12 13.5 12C15.9862 12 18 14.0138 18 16.5Z"
                    fill="#333333"
                  ></path>
                  <path
                    d="M4 28.3333C4 24.7867 10.3294 23 13.5 23C16.6706 23 23 24.7867 23 28.3333V36H4V28.3333Z"
                    fill="#333333"
                  ></path>
                  <path
                    d="M39 16.5C39 18.9862 36.9863 21 34.5 21C32.0138 21 30 18.9862 30 16.5C30 14.0138 32.0138 12 34.5 12C36.9863 12 39 14.0138 39 16.5Z"
                    fill="#333333"
                  ></path>
                  <path
                    d="M27 15C27 16.6575 25.6575 18 24 18C22.3425 18 21 16.6575 21 15C21 13.3425 22.3425 12 24 12C25.6575 12 27 13.3425 27 15Z"
                    fill="#333333"
                  ></path>
                  <path
                    d="M25 28.3333C25 24.7867 31.3294 23 34.5 23C37.6706 23 44 24.7867 44 28.3333V36H25V28.3333Z"
                    fill="#333333"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M28.7508 22.185C28.4839 22.2831 28.2206 22.3873 27.9625 22.4975C26.7914 22.998 25.6088 23.6741 24.69 24.5785C24.444 24.8208 24.2105 25.0864 24 25.375C23.7895 25.0864 23.556 24.8208 23.3099 24.5785C22.3912 23.6741 21.2085 22.998 20.0374 22.4975C19.7794 22.3873 19.5161 22.2831 19.2491 22.185C20.7717 21.3961 22.7298 21 24 21C25.2701 21 27.2282 21.3961 28.7508 22.185Z"
                    fill="#333333"
                  ></path>
                </svg>
              </div>
              <h5 className="mb-4 text-xl font-bold">1000+</h5>
              <p className="text-gray-700 dark:text-gray-200">
                Thousands of satisfied customers across the world.
              </p>
            </div>
          </div>
        </section>
        {/* Section: Design Block */}
      </div>
      {/* Container for demo purpose */}
    </div>
  );
};

export default Features;
