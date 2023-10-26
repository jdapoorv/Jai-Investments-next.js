import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Banner from "../components/Banner";

const ClaimsSupport = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto mt-4 flex flex-col justify-between py-4 px-4 lg:px-16">
        {/* Container for demo purpose */}
        <div className="container mt-24 mx-auto dark:text-white">
          {/* Section: Design Block */}
          <section className="mb-12">
            <h2 className="mb-3 text-center text-3xl font-bold">
              Get claims assistance in a matter of minutes.
            </h2>
            <p className="mb-6 md:mb-12 text-center text-gray-700 font-bold dark:text-gray-200">
              With Jai Investments, you can get claims assistance even for those
              policies which you didn't purchase from us.
            </p>
            <div className="flex flex-wrap items-center">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-6 lg:mb-0 lg:w-5/12">
                <div
                  className="relative overflow-hidden rounded-lg bg-cover bg-[50%] bg-no-repeat shadow-lg dark:shadow-black/20"
                  data-te-ripple-init=""
                  data-te-ripple-color="light"
                >
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/textures/full/98.jpg"
                    className="w-full"
                  />

                  <a href="#!">
                    <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,0%,0.4)] bg-fixed">
                      <div className="flex h-full items-center justify-center">
                        <div className="px-6 py-12 text-center text-white md:px-12">
                          <h3 className="mb-6 text-2xl font-bold uppercase">
                            Effortless Claims Support
                            {/* <u className="text-[hsl(210,12%,80%)]"></u> */}
                          </h3>
                          <p className="text-[hsl(210,12%,80%)] mb-4 dark:text-gray-200">
                            We value our customers both before AND after you buy
                            a policy.
                          </p>
                          <p className="text-[hsl(210,12%,80%)] dark:text-gray-200">
                            Get immediate response for all of your insurance
                            needs.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="relative overflow-hidden bg-cover bg-no-repeat">
                      <div className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-[hsl(0,0%,98.4%,0.2)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto md:px-6 lg:w-7/12">
                <div className="mb-12 flex">
                  <div className="shrink-0">
                    <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-1 font-bold">100% claim settlement</p>
                    <p className="text-sm text-gray-700 dark:text-gray-200">
                      We've helped thousands of customers get what they deserve.
                    </p>
                  </div>
                </div>
                <div className="mb-12 flex">
                  <div className="shrink-0">
                    <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-1 font-bold">Safe and solid</p>
                    <p className="text-sm text-gray-700 dark:text-gray-200">
                      We will initiate the claim filing process if you haven't
                      already done so.
                    </p>
                  </div>
                </div>
                <div className="mb-12 flex">
                  <div className="shrink-0">
                    <div className="rounded-md bg-[hsl(204,30%,20%)] p-4 shadow-lg dark:bg-[hsl(204,23%,30%)]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6 text-white"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4 grow">
                    <p className="mb-1 font-bold">Extremely fast</p>
                    <p className="text-sm text-gray-700 dark:text-gray-200">
                      After your request, we start the claims settlment process
                      right away.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="grow">
                    <p className="text-gray-700 dark:text-gray-200">
                      Click on the contact cards below to call our team member.
                    </p>
                    <p className="text-gray-700 dark:text-gray-200 mb-4">
                      We are always happy to help.
                    </p>

                    <div className="flex mb-4">
                      <div className="flex">
                        <div className="group border-2 rounded-md dark:bg-gray-600 hover:bg-gray-200 dark:hover:text-black">
                          <a href="tel:9897541705">
                            <div className="flex p-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                id="phone"
                                className="w-5 h-5 text-gray-300 mt-1 mr-4 hover:font-white group-hover:fill-blue-600 dark:fill-white"
                              >
                                <g data-name="Layer 2">
                                  <g data-name="phone-call">
                                    <path d="M13 8a3 3 0 0 1 3 3 1 1 0 0 0 2 0 5 5 0 0 0-5-5 1 1 0 0 0 0 2z"></path>
                                    <path d="M13 4a7 7 0 0 1 7 7 1 1 0 0 0 2 0 9 9 0 0 0-9-9 1 1 0 0 0 0 2zm8.75 11.91a1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a9.91 9.91 0 0 1-4.87-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6 15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76 4.34 4.34 0 0 0-.19-.73zM17.4 20A13.41 13.41 0 0 1 4 6.6 2.61 2.61 0 0 1 6.6 4h.33L8 8.64l-.54.28c-.86.45-1.54.81-1.18 1.59a11.85 11.85 0 0 0 7.18 7.21c.84.34 1.17-.29 1.62-1.16l.29-.55L20 17.07v.33a2.61 2.61 0 0 1-2.6 2.6z"></path>
                                  </g>
                                </g>
                              </svg>
                              <div>
                                <h1 className="text-md font-bold">
                                  Devendra Kumar
                                </h1>
                                <p className="text-sm">Insurance Advisor</p>
                                <p className="text-sm">9897541705</p>
                              </div>
                            </div>
                          </a>
                        </div>

                        <div className="group border-2 rounded-md dark:bg-gray-600 hover:bg-gray-200 ml-4 dark:hover:text-black">
                          <a href="tel:9897541705">
                            <div className="flex p-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                id="phone"
                                className="w-5 h-5 text-gray-300 mr-4 mt-1 group-hover:fill-blue-600 dark:fill-white"
                              >
                                <g data-name="Layer 2">
                                  <g data-name="phone-call">
                                    <path d="M13 8a3 3 0 0 1 3 3 1 1 0 0 0 2 0 5 5 0 0 0-5-5 1 1 0 0 0 0 2z"></path>
                                    <path d="M13 4a7 7 0 0 1 7 7 1 1 0 0 0 2 0 9 9 0 0 0-9-9 1 1 0 0 0 0 2zm8.75 11.91a1 1 0 0 0-.72-.65l-6-1.37a1 1 0 0 0-.92.26c-.14.13-.15.14-.8 1.38a9.91 9.91 0 0 1-4.87-4.89C9.71 10 9.72 10 9.85 9.85a1 1 0 0 0 .26-.92L8.74 3a1 1 0 0 0-.65-.72 3.79 3.79 0 0 0-.72-.18A3.94 3.94 0 0 0 6.6 2 4.6 4.6 0 0 0 2 6.6 15.42 15.42 0 0 0 17.4 22a4.6 4.6 0 0 0 4.6-4.6 4.77 4.77 0 0 0-.06-.76 4.34 4.34 0 0 0-.19-.73zM17.4 20A13.41 13.41 0 0 1 4 6.6 2.61 2.61 0 0 1 6.6 4h.33L8 8.64l-.54.28c-.86.45-1.54.81-1.18 1.59a11.85 11.85 0 0 0 7.18 7.21c.84.34 1.17-.29 1.62-1.16l.29-.55L20 17.07v.33a2.61 2.61 0 0 1-2.6 2.6z"></path>
                                  </g>
                                </g>
                              </svg>
                              <div>
                                <h1 className="text-md font-bold">Soham Dev</h1>
                                <p className="text-sm">Insurance Advisor</p>
                                <p className="text-sm">9410859911</p>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="group w-fit border-2 rounded-md dark:bg-gray-600 hover:bg-gray-200 dark:hover:text-black">
                      <a href="mailto:support@jaiinvestments.com">
                        <div className="flex p-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            id="email"
                            className="w-5 h-5 text-gray-300 mr-4 mt-1 group-hover:fill-blue-600 dark:fill-white"
                          >
                            <g data-name="Layer 2">
                              <path
                                d="M19 4H5a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-.67 2L12 10.75 5.67 6zM19 18H5a1 1 0 0 1-1-1V7.25l7.4 5.55a1 1 0 0 0 .6.2 1 1 0 0 0 .6-.2L20 7.25V17a1 1 0 0 1-1 1z"
                                data-name="email"
                              ></path>
                            </g>
                          </svg>
                          support@jaiinvestments.com
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Section: Design Block */}
        </div>
        {/* Container for demo purpose */}
      </div>
      <Banner text1="File your claim" text2="and get assured coverage." />
    </>
  );
};

export default ClaimsSupport;
