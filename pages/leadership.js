import React, { useState } from "react";
import Contact from "../components/Contact";
import { Inconsolata } from "next/font/google";
import Banner from "../components/Banner";

const inconsolata = Inconsolata({ subsets: ["latin"], weight: "400" });

const Leadership = () => {
  const [contactForm, setContactForm] = useState(false);
  const handleOnClose = (e) => {
    setContactForm(false);
  };

  return (
    <div className="max-w-screen-xl mx-auto justify-between sm:mt-12 pb-4 px-4 lg:px-16">
      {/* Show Contact form   */}
      <Contact onClose={handleOnClose} visible={contactForm} />
      <div
        className="max-w-4xl 
      flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0"
      >
        {/*Main Col*/}
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
        >
          <div className="p-4 md:p-12 text-center lg:text-left">
            {/* Image for mobile view*/}
            <div
              className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
              style={{
                backgroundImage: 'url("dev.jpg")',
              }}
            />
            <h1 className="text-3xl font-bold pt-8 lg:pt-0 dark:text-white">
              Devendra Kumar
            </h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-blue-600 opacity-25" />
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start dark:text-white">
              <svg
                className="h-4 fill-current text-blue-600 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>{" "}
              Senior Insurance Advisor
            </p>
            <p className="pt-2 text-gray-600 text-xs lg:text-sm flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-blue-600 pr-4 dark:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z" />
              </svg>
              New Mandi, Muzaffarnagar (U.P)
            </p>
            <p
              className={`pt-8 text-lg ${inconsolata.className} text-justify dark:text-gray-200`}
            >
              With 10+ years of market-leading experience Jai Investments has
              established itself as customer's go-to insurance consultancy. The
              key to our customer's satisfaction lies in our focus on giving
              paramount importance to our after-sales service. React out to us
              for any insurance related assistance now.
            </p>
            <div className="pt-12 pb-8">
              <button
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => {
                  setContactForm(!contactForm);
                }}
              >
                Get a Call
              </button>
            </div>
            {/* Use https://simpleicons.org/ to find the svg for your preferred product */}
          </div>
        </div>
        {/*Img Col*/}
        <div className="w-full lg:w-2/5">
          {/* Big profile image for side bar (desktop) */}
          <img
            src="/dev.jpg"
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
          />
          {/* Image from: http://unsplash.com/photos/MP0IUfwrn0A */}
        </div>
      </div>

      {/* TIMELINE */}
      <div className="flex flex-col justify-center divide-y divide-slate-200 mb-12">
        <h1 className="text-4xl md:text-5xl text-center text-blue-600 font-extrabold drop-shadow-sm dark:text-white pb-16">
          Achievements
          <p className="text-lg mt-4">
            CEO Club Member of Niva Bupa (2021-2023){" "}
          </p>
        </h1>

        <div className="w-full max-w-3xl mx-auto pb-16">
          <div className="-my-6">
            {/* Item #1 */}
            <div className="relative pl-8 sm:pl-32 py-6 group">
              {/* Purple label */}
              <div className="font-medium text-xl text-blue-500 mb-1 sm:mb-0 pt-16">
                The origin
              </div>
              {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                  2016
                </time>
              </div>
              {/* Content */}
              <div className="text-slate-500">
                Jai Investments was founded in Muzaffarnagar (U.P.) India.
              </div>
            </div>
            {/* Item #2 */}
            <div className="relative pl-8 sm:pl-32 py-6 group">
              {/* Purple label */}
              <div className="font-caveat font-medium text-xl text-blue-500 mb-1 sm:mb-0">
                Gold Club Member of Apollo Munich
              </div>
              {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                  2016-2019
                </time>
              </div>
              {/* Content */}
              <div className="text-slate-500">
                Gold Club is a part of prestigious AMSA club (Apollo Munich
                Signature Award).
              </div>
            </div>
            {/* Item #3 */}
            <div className="relative pl-8 sm:pl-32 py-6 group">
              {/* Purple label */}
              <div className="font-caveat font-medium text-xl text-blue-500 mb-1 sm:mb-0">
                Star Category Advisor in (UIICL)
              </div>
              {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                  2016-2022
                </time>
              </div>
              {/* Content */}
              <div className="text-slate-500">
                Achieved Star category as an Advisor in United India Insurance
                Co. Ltd.
              </div>
            </div>
            {/* Item #4 */}
            <div className="relative pl-8 sm:pl-32 py-6 group">
              {/* Purple label */}
              <div className="font-caveat font-medium text-xl text-blue-500 mb-1 sm:mb-0">
                Star Peformer in Iffco Tokio
              </div>
              {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                  2016-2022
                </time>
              </div>
              {/* Content */}
              <div className="text-slate-500">
                Received prestigious Award for being Star performer as an
                advisor of Iffco Tokio General Insurance Co. Ltd.
              </div>
            </div>
            {/* Item #5 */}
            <div className="relative pl-8 sm:pl-32 py-6 group">
              {/* Purple label */}
              <div className="font-caveat font-medium text-xl text-blue-500 mb-1 sm:mb-0">
                Gold Club Member of HDFC Ergo
              </div>
              {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                  2019-2022
                </time>
              </div>
              {/* Content */}
              <div className="text-slate-500">
                HDFC Ergo awarded a Gold Club Membership.
              </div>
            </div>
            {/* Item #6 */}
            <div className="relative pl-8 sm:pl-32 py-6 group">
              {/* Purple label */}
              <div className="font-caveat font-medium text-xl text-blue-500 mb-1 sm:mb-0">
                Platinum Plus Club Member in Niva Bupa
              </div>
              {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                  2020-2022
                </time>
              </div>
              {/* Content */}
              <div className="text-slate-500">
                Achieved a membership in the top-most club of best performing
                Advisors on monthly basis in Niva Bupa Health Insurance Co. Ltd.
              </div>
            </div>
            {/* Item #7 */}
            <div className="relative pl-8 sm:pl-32 py-6 group">
              {/* Purple label */}
              <div className="font-caveat font-medium text-xl text-blue-500 mb-1 sm:mb-0">
                APC Qualifier in Niva Bupa
              </div>
              {/* Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) */}
              <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-blue-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
                  2020-2022
                </time>
              </div>
              {/* Content */}
              <div className="text-slate-500">
                Achieved a membership in the top-most club of best performing
                Advisors on quarterly basis in Niva Bupa Health Insurance Co.
                Ltd.
              </div>
            </div>
          </div>
        </div>
      </div>
      <Banner
        text1="Talk to a real advisor"
        text2="and get your doubts cleared."
      />
    </div>
  );
};

export default Leadership;
