import React from "react";
import Link from "next/link";
import Image from "next/image";

const Health101 = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-14 mb-16 flex flex-col justify-between py-4 px-4 lg:px-16">
      <main className="dark:bg-gray-900 antialiased">
        <div className="justify-between px-4 mx-auto dark:text-white">
          <article className="text-center text-justify">
            <header>
              <h1 className="mt-10 mb-4 text-3xl font-extrabold text-center text-gray-900 dark:text-white">
                Top Health Insurance Companies in India
              </h1>
              <p className="text-center text-gray-700 mb-2 dark:text-gray-200">
                <span className="font-bold">Brief Overview: </span> When
                evaluating health insurance providers in India, it is essential
                to assess various factors such as claim settlement statistics,
                the availability of network hospitals, operational
                effectiveness, net promoter scores, the company's historical
                performance, business scale, and range of products. Armed with
                this information, you can subsequently establish rankings for
                insurers according to the criteria that matter most to you.
              </p>
              <p className="text-center text-gray-700 mb-4 dark:text-gray-200">
                In our view, these are the top health insurance companies in
                India for the year 2023.
              </p>
              <div className="flex justify-center mx-auto mb-10">
                <Image
                  src="/healthInsurance.jpg"
                  width={500}
                  height={50}
                ></Image>
              </div>
            </header>
            <div className="flex flex-col space-y-7 leading-6 text-md tracking-wide text-gray-700 md:text-lg">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Company
                      </th>
                      <th scope="col" className="px-6 py-3">
                        CLAIM SETTLEMENT RATIO (avg. of last 3 years)
                      </th>
                      <th scope="col" className="px-6 py-3">
                        NETWORK HOSPITALS
                      </th>
                      <th scope="col" className="px-6 py-3">
                        GROSS WRITTEN PREMIUM (2020-21)
                      </th>
                      <th scope="col" className="px-6 py-3">
                        TRACK RECORD RATING OUT OF 5
                      </th>
                      <th scope="col" className="px-6 py-3">
                        RATING OUT OF 5
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        HDFC Ergo
                      </th>
                      <td className="px-6 py-4">97.55% </td>
                      <td className="px-6 py-4">12,000+ </td>
                      <td className="px-6 py-4">₹4,281.6 Cr </td>
                      <td className="px-6 py-4">20 years</td>
                      <td className="px-6 py-4">4.42</td>
                    </tr>
                    <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Care
                      </th>
                      <td className="px-6 py-4">91.8%</td>
                      <td className="px-6 py-4">9,400+</td>
                      <td className="px-6 py-4">₹2,559.75 Cr</td>
                      <td className="px-6 py-4">10 years</td>
                      <td className="px-6 py-4">4.3</td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Niva Bupa (erstwhile Max Bupa)
                      </th>
                      <td className="px-6 py-4">90.74%</td>
                      <td className="px-6 py-4">9,100+</td>
                      <td className="px-6 py-4">₹1,750.78 Cr</td>
                      <td className="px-6 py-4">14 years</td>
                      <td className="px-6 py-4">4</td>
                    </tr>
                    <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Bajaj Allianz
                      </th>
                      <td className="px-6 py-4">94.18%</td>
                      <td className="px-6 py-4">8,000+</td>
                      <td className="px-6 py-4">₹2,301.74 Cr</td>
                      <td className="px-6 py-4">21 years</td>
                      <td className="px-6 py-4">3.92</td>
                    </tr>
                    <tr>
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        ICICI Lombard
                      </th>
                      <td className="px-6 py-4">86.67%</td>
                      <td className="px-6 py-4">6,700+</td>
                      <td className="px-6 py-4">₹3,021.35 Cr</td>
                      <td className="px-6 py-4">21 years</td>
                      <td className="px-6 py-4">3.65</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Health101;
