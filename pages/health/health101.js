import React from "react";
import Link from "next/link";
import Image from "next/image";

const Health101 = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-14 mb-16 flex flex-col justify-between py-4 px-4 lg:px-16">
      <main className="dark:bg-gray-900 antialiased dark:text-white">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl">
          <article className="text-center text-justify">
            <header>
              <h1 className="mt-10 mb-2 text-3xl font-extrabold text-center text-gray-900 dark:text-white">
                Health Insurance 101
              </h1>
              <p className="text-center text-gray-700 mb-4 dark:text-gray-200">
                Learn about reading a policy document.
              </p>
              <div className="flex justify-center mx-auto mb-10">
                <Image
                  src="/healthInsurance.jpg"
                  width={500}
                  height={50}
                ></Image>
              </div>
            </header>
            <div className="flex flex-col space-y-7 leading-6 text-md tracking-wide text-gray-700 md:text-lg dark:text-white">
              <p className="first-letter:text-2xl first-letter:text-blue-600 first-letter:pr-0">
                Purchasing insurance can be difficult. It's even tougher to read
                a policy statement. And even if you make an effort to carefully
                read this, you'll probably come up blank since you won't
                understand what half of the terms imply. We've therefore
                developed a set of straightforward case studies to clarify what
                some of the most prevalent terminology and features actually
                imply in an effort to simplify things and educate you on how to
                understand a policy document. We'll also explain how they affect
                you and whether or not you might need them.
              </p>
              <p>
                So let's start with co-payment, which is the most common
                characteristic in the world of health insurance.
              </p>
              <h2 className="block text-2xl font-bold text-center text-gray-900 dark:text-white">
                Opt out of co-payment?
              </h2>
              <p>
                You're in the process of purchasing health insurance. The
                insurance agent presents a policy offering coverage of 5 Lakhs
                at a reduced annual cost of ₹7000. To sweeten the deal, the
                agent proposes a 25% discount on premiums, approximately
                ₹1800/year, if you accept a 20% co-payment provision. You find
                this offer enticing and agree to it, believing you've saved
                ₹1800.{" "}
              </p>
              <p>
                Fast forward 9 months, and you experience an accident, requiring
                extensive hospitalization and care. Fortunately, you recover
                fully, but the total bill amounts to ₹2 Lakhs. You're covered by
                insurance, but the insurer only pays ₹1,60,000, requesting you
                to cover the remaining ₹40,000 due to the 20% co-payment
                agreement. As you calculate the numbers, you realize that
                although you saved ₹1,800 on premiums, you now have to pay
                ₹40,000 because of the co-payment clause. It would take
                approximately 22 years of premium savings to offset this costly
                mistake.{" "}
              </p>
              <p>
                This is certainly not a feature you'd want in your insurance
                policy. Co-payment clauses are rarely beneficial unless they are
                obligatory or you're purchasing insurance for someone elderly
                with pre-existing health conditions. In such cases, a co-payment
                clause can substantially reduce premiums.
              </p>
              <h2 className="block my-12 text-2xl font-bold text-center text-gray-900 dark:text-white">
                Verify sub-limits based on the type of illness
              </h2>
              <p>
                You're presented with an offer: a coverage of 10 lakhs at an
                annual premium of just ₹6,000. Instead of being immediately
                delighted, you start to harbor suspicions. The price seems too
                good to be true, unmatched by any other offers in the market.
                You hesitate and contemplate for a moment. However, you
                ultimately decide to proceed with the recommendation, primarily
                because the person making the offer is a family friend.{" "}
              </p>
              <p>
                Then, your worst fears materialize when you unexpectedly require
                surgery due to a slipped disk. The treatment proves extensive,
                and the final bill amounts to a significant ₹4,36,000, inclusive
                of all expenses. Despite having a 10 lakh coverage, your insurer
                informs you that they can only cover ₹2,00,000. You're
                understandably furious and seek clarification. Eventually, they
                disclose that your policy imposes disease-specific sub-limits,
                meaning there are predefined maximum coverage amounts for
                certain illnesses: For cardiovascular diseases: They only
                reimburse ₹2,50,000. For knee replacements: The limit is
                ₹2,75,000. For major surgeries like the one you underwent: The
                maximum coverage is ₹2,00,000. It becomes clear that the company
                was able to offer you a 10 lakh coverage at such a low premium
                because they rarely end up paying the full coverage amount in
                most cases.
              </p>
              <p>
                Beware of falling victim to this deceptive practice. Always
                ensure that your policy does not include disease-specific
                sub-limits, as you cannot predict which health condition may
                affect you. It's wise to choose a policy without such
                restrictions.
              </p>
              <h2 className="block my-12 text-2xl font-bold text-center text-gray-900 dark:text-white">
                Look for Low Waiting Periods
              </h2>
              <p>
                The most unsettling aspect of insurance is the uncertainty that
                arises when purchasing a policy. Once the initial sales pitch
                concludes, insurers typically delve into your medical history,
                probing for details on pre-existing conditions such as diabetes,
                cardiovascular issues, thyroid-related ailments, or any other
                health concerns - a seemingly endless list. Following this line
                of questioning, they may request you to undergo medical tests.
              </p>
              <p>
                Subsequently, they'll inform you that they'll cover your
                hospitalization expenses as long as they aren't related to your
                pre-existing condition. But what if you end up in the hospital
                due to complications arising from a previous health issue? In
                such cases, they may impose a waiting period, often ranging from
                2 to 4 years. While this clause is understandable from the
                insurer's perspective, it can be an arduous process for you.
                Here's the core issue: Suppose you have high blood pressure, and
                you disclose this condition when purchasing your policy.
                Unfortunately, the very next year, you suffer a heart attack,
                and you're fervently hoping your insurer will honor your claim.
                However, there's a possibility that the insurer could deny your
                claim if they can link your blood pressure disorder to the heart
                attack. So, if an insurer imposes a 4-year waiting period,
                you're left hoping and praying that you won't fall ill due to a
                pre-existing condition during that time - a precarious position
                to be in.{" "}
              </p>
              <p>
                Waiting periods are a common aspect of most insurance policies.
                Your best course of action is to select a policy with the
                shortest waiting period available.
              </p>
              <h2 className="block my-12 text-2xl font-bold text-center text-gray-900 dark:text-white">
                Choose both pre and post-hospitalization healthcare services.
              </h2>
              <p>
                One day, you awaken feeling dizzy and consult your doctor, who
                initially prescribes a routine blood test. Nothing unusual is
                detected, and you return home with an ORS pack.{" "}
              </p>
              <p>
                However, your condition worsens, and the following evening, the
                doctor recommends an MRI after reviewing your symptoms. Upon
                receiving the MRI results, she advises you to be admitted to the
                hospital. Over the course of the next three days, the doctor
                effectively treats your condition, and you are subsequently
                discharged. The hospital bill amounts to ₹10,000, while the MRI
                and diagnostic tests conducted before hospitalization total
                ₹15,000. You hope that your insurance covers both bills, but the
                insurance company informs you that they do not cover
                pre-hospitalization expenses. This means they won't cover the
                costs you incurred leading up to your hospitalization. This
                situation seems ironic because doctors often prescribe various
                diagnostic tests both before admitting a patient to the hospital
                and sometimes even after discharge, and these tests can become
                quite expensive.{" "}
              </p>
              <p>
                It's always advisable to select an insurance policy that
                includes coverage for both pre and post-hospitalization
                expenses, ideally spanning 30 to 60 days before and after your
                hospital treatment.
              </p>
              <h2 className="block my-12 text-2xl font-bold text-center text-gray-900 dark:text-white">
                Inquire about the restoration benefit.
              </h2>
              <p>
                It's a tranquil Sunday morning, and you find yourself sipping
                coffee in a hospital bed, reflecting on how a minor heart
                complication led to a three-week hospital stay. More
                importantly, you're contemplating the substantial ₹4,88,000 bill
                you've accrued. Fortunately, your insurance policy is poised to
                shoulder this financial burden. After all, you possess a ₹5 Lakh
                coverage, which means you don't have to make any immediate
                payments.
              </p>
              <p>
                However, you begin to ponder potential scenarios. You see,
                you've opted for a comprehensive policy, covering both yourself
                and your wife. If she were to fall ill in the near future, your
                insurance wouldn't extend coverage to her since you've already
                utilized the benefits. But what if your insurance could reset
                itself to the original coverage limit immediately after a claim,
                offering another ₹5 lakh cover for either you or your wife if
                hospitalization became necessary again?{" "}
              </p>
              <p>
                Well, here's the good news: this is achievable with a
                restoration benefit. While some policies provide unlimited
                restoration for any illness, others may impose certain
                restrictions. For example, some policies may specify that you
                can't claim the restoration benefit if you experience a
                recurrence of the same illness, such as another heart
                complication. It's always a wise choice to consider restoration
                benefits, especially with a combined policy. It can also be a
                valuable addition to an individual policy.
              </p>
              <p>
                Just be sure to thoroughly review the policy details regarding
                how the coverage is reinstated each time, and you'll be
                well-prepared.
              </p>
              <h2 className="block my-12 text-2xl font-bold text-center text-gray-900 dark:text-white">
                Request coverage for treatments with a duration of less than 24
                hours.
              </h2>
              <p>
                You're enjoying a card game with your friends when suddenly, you
                feel a sharp twinge in your abdomen. Although this isn't the
                first time you've experienced such discomfort, you initially
                dismiss it. A few moments pass, and the twinge returns, but this
                time, it lingers and quickly escalates into excruciating pain.
                Your friends rush you to the hospital, and after a brief
                examination, the doctor delivers the diagnosis: appendicitis,
                requiring immediate surgery. The doctor assures you that it's a
                relatively minor procedure, and you can expect to be discharged
                on the same day.
              </p>
              <p>
                Indeed, after receiving the necessary treatment, you leave the
                hospital within 24 hours. However, you're shocked when you
                receive an ₹80,000 bill for the procedure. Hoping your insurance
                will cover the costs, you contact your insurer, only to be
                informed that they won't. Frustrated, you seek clarification,
                and the agent directs you to review the policy document once
                more. It explicitly states that they do not cover daycare
                treatments, which are treatments requiring hospitalization but
                lasting less than 24 hours a category that includes
                chemotherapy, dialysis, and, in your case, appendicitis.{" "}
              </p>
              <p>
                It's always advisable to prioritize policies that provide
                coverage for daycare treatments because you never know when a
                medical issue like appendicitis might arise.
              </p>
              <h2 className="block my-12 text-2xl font-bold text-center text-gray-900 dark:text-white">
                Home healthcare costs
              </h2>
              <p>
                A devastating pandemic begins to wreak havoc, and despite the
                circumstances, your job compels you to leave your home every
                day. Then, one morning, you wake up with a severe cold. Your
                persistent cough initially leads you to hope it will resolve on
                its own, but as your breathing becomes increasingly difficult,
                your condition worsens, ultimately necessitating an emergency
                call for medical assistance.{" "}
              </p>
              <p>
                Unfortunately, the emergency services inform you that they
                cannot locate a hospital bed for you, leaving you with no option
                but to receive treatment at home. While some hospitals offer
                this service, it comes at a significant cost. However, a glimmer
                of hope emerges when your insurance provider assures you that
                they will cover your expenses because you are compelled to
                undergo treatment at home. This might be due to a specific
                medical condition or, as in your case, because a hospital bed
                couldn't be found. Such situations are uncommon, but you are
                grateful to have this coverage.{" "}
              </p>
              <p>
                It's another valuable benefit to have, although in most
                instances, you don't need to go out of your way to find a policy
                that includes coverage for domiciliary expenses.
              </p>
              <h2 className="block my-12 text-2xl font-bold text-center text-gray-900 dark:text-white">
                Additional benefit when no claims are made
              </h2>
              <p>
                Insurance providers emphasize the importance of maintaining good
                health, often offering incentives to encourage it. For instance,
                consider the prospect of having your coverage increased by 50%
                each year if you refrain from making insurance claims - an
                enticing offer, isn't it? Imagine starting with a ₹5 lakh
                coverage and watching it grow to ₹7.5 lakhs in the first year,
                then another 50% increase in the following year, resulting in a
                total coverage of ₹10 lakhs.
              </p>
              <p>
                {" "}
                Of course, insurers typically impose limits. They often cease
                increasing coverage once it has doubled in value. Additionally,
                they may reduce the sum insured by the same percentage (50%) if
                you file a claim after receiving the bonus. Consequently, your
                coverage could revert to ₹5 lakhs the following year.
                Nonetheless, it's an appealing bonus.{" "}
              </p>
              <p>
                The No Claim Bonus is indeed valuable, provided the bonus amount
                is substantial. For example, anything below 10% may be
                considered insignificant and more of a marketing tactic.
              </p>
              <h2 className="block my-12 text-2xl font-bold text-center text-gray-900 dark:text-white">
                Annual health checkups at no cost.
              </h2>
              <p>
                Picture this: It's a leisurely Saturday afternoon, and you've
                been patiently waiting for nearly an hour. Your gaze is fixed on
                the receptionist, hoping for the moment when he finally calls
                your name. Unexpectedly, the moment arrives, and you hear your
                name announced loudly. You proceed to the doctor's room where
                she guides you to a specific spot, measures your height, checks
                your weight, assesses your blood pressure, listens to your heart
                and lungs, and schedules a blood test for cholesterol and blood
                sugar. Before you leave, she imparts advice on reducing the risk
                of diabetes, heart disease, and cancer.{" "}
              </p>
              <p>
                The next day, you receive your test results, and everything
                appears to be in perfect order. No follow-up care is needed, at
                least not until the next year. What you've just experienced is a
                comprehensive full-body health checkup. While some individuals
                might overlook its significance, it provides you with a sense of
                reassurance. Typically, these health checkups can cost anywhere
                from ₹1,000 to ₹1,500. If you consistently undergo these
                checkups, the expenses can add up. Once again, we acknowledge
                that it's not a significant sum of money, but it's certainly
                beneficial if you can eliminate these costs entirely. This is
                why some insurance providers offer to cover the expenses of your
                health checkups. Granted, they might not cover them every year,
                but even if they do so every two years, it's still a noteworthy
                perk, wouldn't you agree?{" "}
              </p>
              <p>
                While it may not be a deciding factor when choosing insurance,
                having a policy that includes a complimentary annual health
                checkup is undeniably advantageous.
              </p>
              <h2 className="block my-12 text-2xl font-bold text-center text-gray-900 dark:text-white">
                Insurance for alternative therapies.
              </h2>
              <p>
                Approaching your 50s, you find yourself constantly fatigued. You
                consult your physician, who reassures you that there's no
                apparent medical issue and attributes it to possible stress.
                Although not entirely satisfied, you return home. However, the
                next day, while chatting with your neighbor, they recommend
                visiting a government-certified Ayush Centre. Intrigued, you
                decide to explore the center and meet with the practitioners.
                They recommend an Ayurvedic Rejuvenation Therapy known as
                Panchakarma, which entails a duration of 7-11 days and comes
                with a price tag of ₹25,000. You consider this quite expensive.
                But then, it dawns on you that your health insurance policy
                includes coverage for Ayush treatments. With this realization,
                you promptly proceed with the payment and commence the therapy.
                It's a good thing you remembered that crucial detail, isn't it?{" "}
              </p>
              <p>
                Ayush Coverage is a valuable feature to have. However, it's
                essential to note that the policy will only cover such
                treatments if they are administered within a
                government-certified Ayush facility while you are hospitalized.
              </p>
              <h2 className="block my-12 text-2xl font-bold text-center text-gray-900 dark:text-white">
                Benefits related to maternity.
              </h2>
              <p>
                You're contemplating the idea of starting a family, recognizing
                that careful planning is essential. The initial step involves
                making arrangements for childbirth, including hospitalization
                for the delivery of your baby. While transportation to the
                hospital may not be a concern, the potential expenses associated
                with hospitalization are on your mind. However, what if you
                could mitigate these costs by opting for an insurance policy
                that covers this expense? It seems like a sensible idea, but
                there are some drawbacks to this plan.{" "}
              </p>
              <p>
                First and foremost, insurance providers are well aware that they
                will inevitably incur this expense if you choose to have
                children. Since most people become parents at some point,
                insurers anticipate having to make these payouts. Consequently,
                many insurance companies simply do not offer maternity coverage.
                For those that do, they take measures to ensure they are
                adequately compensated. To offset the potential expenses, they
                may significantly raise premiums. Alternatively, they might
                offer only partial coverage of maternity-related expenses. In
                some cases, maternity coverage is exclusively available through
                family plans, necessitating coverage for both you and your
                spouse, even if only one of you will require maternity-related
                hospitalization. It's important to remember that there's no such
                thing as a free lunch.{" "}
              </p>
              <p>
                While it's beneficial if your insurer covers maternity expenses,
                be cautious not to end up paying exorbitant premiums solely to
                access this benefit. In some cases, the cost may not justify the
                coverage.
              </p>
              <h2 className="block my-12 text-2xl font-bold text-center text-gray-900 dark:text-white">
                When is it advisable to choose OPD?
              </h2>
              <p>
                Everyone makes a yearly trip to the doctor's office, and the
                particular doctor you visit happens to charge an exorbitant
                consultation fee. A routine checkup alone could dent your wallet
                by thousands of rupees. In a stroke of brilliance, you devise a
                plan to counter this financial burden. You decide to purchase
                insurance and select a policy that reimburses all expenses
                associated with these doctor visits. You actively seek options
                that encompass outpatient consultation benefits, and it doesn't
                take long before you find a suitable choice. You jubilantly
                declare, "Brilliant!" and give yourself a well-deserved pat on
                the back. However, reality often doesn't align with our
                expectations.{" "}
              </p>
              <p>
                To begin with, insurance providers are acutely aware that they
                will likely need to disburse payouts for such visits every year.
                Just ask yourself, have you visited the doctor this year? Did
                you pay a consultation fee exceeding ₹1,000? Perhaps even more?
                Is there any reason to believe this pattern will change? Chances
                are, it won't. Consequently, insurers may hesitate to offer this
                benefit altogether. For those that do, they take steps to ensure
                they are adequately compensated. This often involves
                substantially raising premiums or stipulating that they will
                only cover a fraction of the expense. As the saying goes,
                there's no such thing as a free lunch. While outpatient
                department (OPD) benefits may seem enticing on the surface, it's
                entirely plausible that you'll end up paying more in premiums.{" "}
              </p>
              <p>
                Surprisingly, in many cases, opting out of the OPD benefit may
                actually be the more cost-effective choice.
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Health101;
