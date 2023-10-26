import React from "react";
import Link from "next/link";
import Image from "next/image";

const LifeChecklist = () => {
  return (
    <div className="max-w-screen-xl mt-14 mx-auto mb-16 flex flex-col justify-between py-4 px-4 lg:px-16">
      <div className="container mx-auto md:px-6">
        <section className="mb-32 text-center dark:text-white">
          <h1 className="mt-10 mb-2 text-3xl font-bold text-center text-gray-900 dark:text-white">
            Term Insurance Checklist
          </h1>
          <p className="text-center text-gray-700 mb-4 dark:text-gray-200">
            Important considerations to ponder prior to purchasing a term
            insurance plan in India.
          </p>

          <div className="flex justify-center mx-auto mb-10">
            <Image src="/health.jpg" width={500} height={50}></Image>
          </div>

          <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
            <div className="mb-10 md:mb-10">
              <h1 className="text-2xl font-bold p-4">
                1. Benefit for Terminal Illness
              </h1>

              <p className="first-letter:text-2xl first-letter:text-blue-600 first-letter:pr-0 text-justify text-gray-700 dark:text-gray-200">
                Certain policies will provide the entire coverage amount upon
                receiving a terminal illness diagnosis. In such cases, you can
                receive the funds even if death has not occurred and utilize
                them as you see fit. This is another valuable benefit to
                consider.
              </p>
            </div>

            <div className="mb-10 md:mb-10">
              <h1 className="text-2xl font-bold p-4">
                2. Benefit for Critical Illness
              </h1>

              <p className="first-letter:text-2xl first-letter:text-blue-600 first-letter:pr-0 text-justify text-gray-700 dark:text-gray-200">
                In the event of a severe illness diagnosis, there's a
                possibility of job loss, and your family may need to manage
                without your income. Nevertheless, choosing the critical illness
                benefit in your term policy can provide financial relief during
                such a crisis. It's important to note that critical illness
                benefits can vary, so it's advisable to delve into the details.
              </p>
            </div>

            <div className="mb-10 md:mb-10">
              <h1 className="text-2xl font-bold p-4">
                3. Verify the ratio of claims settled.
              </h1>

              <p className="first-letter:text-2xl first-letter:text-blue-600 first-letter:pr-0 text-justify text-gray-700 dark:text-gray-200">
                When acquiring a term insurance policy, it's crucial to ensure
                that the insurer promptly disburses claim settlements. To
                accomplish this, you should review the three-year average claim
                settlement ratio and the percentage of claims settled within 30
                days. If both of these figures exceed 97%, then you can consider
                it a favorable choice. You can locate this information in the{" "}
                <span>
                  <a
                    target="_blank"
                    href="https://irdai.gov.in/document-detail?documentId=1632108"
                    className="text-blue-600 hover:underline"
                  >
                    annual reports published by IRDAI
                  </a>
                  .
                </span>
              </p>
            </div>

            <div className="mb-10 md:mb-10">
              <h1 className="text-2xl font-bold p-4">
                4. Benefit for Accidental Death
              </h1>

              <p className="first-letter:text-2xl first-letter:text-blue-600 first-letter:pr-0 text-justify text-gray-700 dark:text-gray-200">
                Certain insurance policies provide the choice of enhancing
                protection specifically for accidental deaths. In such
                instances, you have the flexibility to select your coverage for
                natural death and accidental death separately. While we
                generally advise customers to opt for comprehensive coverage
                without dwelling on the distinctions of death types, having this
                additional option can be beneficial.
              </p>
            </div>

            <div className="mb-10 md:mb-10">
              <h1 className="text-2xl font-bold p-4">
                5. A substantial settlement ratio is also essential.
              </h1>

              <p className="first-letter:text-2xl first-letter:text-blue-600 first-letter:pr-0 text-justify text-gray-700 dark:text-gray-200">
                Certain insurers may approve smaller claims but reject a few
                higher-value claims to boost their claim settlement ratio.
                Therefore, it's crucial to assess the total amount settled as a
                percentage of the total claimed value. A figure exceeding 90%
                should be considered satisfactory. You can locate this data in
                the{" "}
                <span>
                  <a
                    target="_blank"
                    href="https://irdai.gov.in/document-detail?documentId=1632108"
                    className="text-blue-600 hover:underline"
                  >
                    annual reports published by IRDAI
                  </a>
                  .
                </span>
              </p>
            </div>

            <div className="mb-10 md:mb-10">
              <h1 className="text-2xl font-bold p-4">
                6. Examine the quantity of complaints.
              </h1>

              <p className="first-letter:text-2xl first-letter:text-blue-600 first-letter:pr-0 text-justify text-gray-700 dark:text-gray-200">
                Should the overall complaints received (per 1000 claims filed)
                exceed 20, it's advisable to reevaluate your choice of insurer.
                You can access these statistics in public disclosures, as
                insurance companies are obligated to provide this information on
                their websites.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LifeChecklist;
