import React from "react";
import Link from "next/link";
import Image from "next/image";

const HealthChecklist = () => {
  return (
    <div className="max-w-screen-xl mt-14 mx-auto mb-16 flex flex-col justify-between py-4 px-4 lg:px-16">
      <div className="container mx-auto md:px-6">
        <section className="mb-32 text-center dark:text-white">
          <h1 className="mt-10 mb-2 text-3xl font-bold text-center text-gray-900 dark:text-white">
            Health Insurance Checklist
          </h1>
          <p className="text-center text-gray-700 mb-4 dark:text-gray-200">
            A list all aspects of a quality
            health insurance plan.
          </p>

          <div className="flex justify-center mx-auto mb-10">
                <Image
                  src="/health.jpg"
                  width={500}
                  height={50}
                ></Image>
              </div>

          <div className="grid gap-x-6 md:grid-cols-3 lg:gap-x-12">
            <div className="mb-10 md:mb-10">
              <h1 className="text-2xl font-bold p-4">
                1. Assess caps for certain health issues
              </h1>

              <p className="first-letter:text-2xl first-letter:text-blue-600 first-letter:pr-0 text-justify text-gray-700 dark:text-gray-200">
                This occurs when the insurer provides a substantial coverage
                amount (e.g., 10 lakhs) at a low cost but imposes limits on how
                much of this coverage applies to each specific disease.
                Consequently, you may find that, in practice, only a portion of
                the 10 lakhs is available for most situations.
              </p>
            </div>

            <div className="mb-10 md:mb-10">
              <h1 className="text-2xl font-bold p-4">
                2. Cover daycare treatments in policy
              </h1>

              <p className="first-letter:text-2xl first-letter:text-blue-600 first-letter:pr-0 text-justify text-gray-700 dark:text-gray-200">
                Procedures like chemotherapy, dialysis, and even a brief
                appendectomy can often be completed in less than 24 hours.
                However, some insurers may not cover these claims if they
                classify them as "daycare treatments."
              </p>
            </div>

            <div className="mb-10 md:mb-10">
              <h1 className="text-2xl font-bold p-4">
                3. Ask for coverage restoration details
              </h1>

              <p className="first-letter:text-2xl first-letter:text-blue-600 first-letter:pr-0 text-justify text-gray-700 dark:text-gray-200">
                When you purchase a family policy and make a claim while
                hospitalized, your coverage can be exhausted. However, if you
                have a restoration benefit, your insurer may replenish your
                coverage, at least on one occasion, when another family member
                falls ill. To explore this option, simply inquire with your
                insurer.
              </p>
            </div>

            <div className="mb-10 md:mb-10">
              <h1 className="text-2xl font-bold p-4">
                4. Room allocation and rental constraints
              </h1>

              <p className="first-letter:text-2xl first-letter:text-blue-600 first-letter:pr-0 text-justify text-gray-700 dark:text-gray-200">
                Certain insurers might restrict your choice of rooms. Instead,
                they impose a cap on room rent. If you exceed this limit,
                they'll charge you extra for every service provided in the room,
                not just the rent. This can significantly increase your overall
                expenses. Therefore, consider a policy with fewer limitations in
                this regard.
              </p>
            </div>

            <div className="mb-10 md:mb-10">
              <h1 className="text-2xl font-bold p-4">
                5. Equitably divide shared expenses wisely
              </h1>

              <p className="first-letter:text-2xl first-letter:text-blue-600 first-letter:pr-0 text-justify text-gray-700 dark:text-gray-200">
                Insurers may encourage you to think about a co-payment clause,
                requiring you to cover a portion of the expenses whenever you
                file a claim. This could range from 10% to 30% or more of the
                total bill. So, choosing co-payment may not be the most
                favorable choice, unless it's your only option.
              </p>
            </div>

            <div className="mb-10 md:mb-10">
              <h1 className="text-2xl font-bold p-4">
                6. Explore shorter waiting period choices
              </h1>

              <p className="first-letter:text-2xl first-letter:text-blue-600 first-letter:pr-0 text-justify text-gray-700 dark:text-gray-200">
                If you have pre-existing conditions such as diabetes, high blood
                pressure, or thyroid-related issues, you may need to wait for a
                specific duration before your insurer covers claims related to
                these conditions. This waiting period typically ranges from 2 to
                4 years. Therefore, it's advisable to choose a policy with a
                shorter waiting period whenever possible.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HealthChecklist;
