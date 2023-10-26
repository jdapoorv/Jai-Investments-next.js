import React from "react";
import Link from "next/link";
import Image from "next/image";

const Life101 = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-14 mb-16 flex flex-col justify-between py-4 px-4 lg:px-16">
      <main className="dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl dark:text-white">
          <article className="text-center text-justify">
            <header>
              <h1 className="mt-10 mb-2 text-3xl font-extrabold text-center text-gray-900 dark:text-white">
                Term Insurance 101
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
            <div className="flex flex-col space-y-7 leading-6 text-md tracking-wide text-gray-700 md:text-lg">
              <h2 className="block text-2xl font-bold text-center text-gray-900 dark:text-white">
                What is Term Insurance
              </h2>
              <p className="first-letter:text-2xl first-letter:text-blue-600 first-letter:pr-0 dark:text-gray-200">
                Imagine a world where you could potentially acquire a product
                that could stand in for you. Well, not exactly a carbon copy of
                yourself, as that would be a tad absurd. But picture having a
                duplicate version of yourself capable of earning and generating
                income just like you. Wouldn't you seize that opportunity?
                Perhaps, even pay an annual fee to maintain this surrogate
                presence? Most likely, you would. Well, that's essentially what
                a term insurance product offers. It serves as your financial
                doppelgänger, activated upon your demise.
              </p>
              <p className="dark:text-gray-200">
                Let me elucidate further. When you invest in a term insurance
                product, you make annual payments to safeguard against potential
                financial setbacks. In the unfortunate event of your passing,
                the insurance company disburses a substantial sum to your family
                or beneficiaries. Think of it as a sum like 1 Crore, 5 Crore, or
                even 10 Crore. Ideally, this money is intended to replace your
                financial role. It should provide support to your family when
                you are no longer the primary breadwinner. As long as you
                haven't intentionally provided false information to the insurer
                during the policy purchase, they are obligated to pay the full
                amount immediately upon your death. In fact, even if there were
                inaccuracies that you didn't intend, they have a three-year
                window to uncover any discrepancies. If they don't find any
                within that time frame, they are legally bound to disburse the
                payout without any inquiries. So, unless you take your own life
                within the first year of obtaining the policy or meet your
                demise while engaged in criminal activities, your loved ones
                will receive this financial support.
              </p>
              <p className="dark:text-gray-200">
                While the core concept of this product is straightforward, we
                will delve into some of the critical factors that influence the
                decision to purchase term insurance in the following section.
              </p>
              <h2 className="block text-2xl font-bold text-center text-gray-900 dark:text-white">
                "What constitutes an optimal coverage for your term insurance
                policy?"
              </h2>
              <p className="dark:text-gray-200">
                The initial question should by now appear quite evident—How much
                money is necessary to serve as a financial substitute in your
                absence?
              </p>
              <p className="dark:text-gray-200">
                This is indeed a challenging question, and let's be frank—it
                possesses a certain degree of subjectivity. However, several
                crucial factors must be taken into account. To begin, consider
                your financial obligations. If your lifestyle necessitates a
                specific level of expenditure, maintaining it becomes imperative
                to prevent any noticeable impact from your absence. So, if
                you're currently spending 50,000 every month, your term
                insurance policy should provide a replacement for this income.
                At that rate, you're likely looking at a coverage amount
                totaling 1 Crore. Allow me to elucidate the rationale behind
                this figure.
              </p>
              <p className="dark:text-gray-200">
                Now, envision what your family would do upon receiving this sum.
                Let's assume they opt for the simplest and, perhaps, the wisest
                course of action.
              </p>
              <h2 className="block my-12 text-2xl font-bold text-center text-gray-900 dark:text-white">
                Fixed Deposits!
              </h2>
              <p className="dark:text-gray-200">
                At a 6% annual return, their annual income would be 6 lakhs,
                which should effectively compensate for the loss of your income.
                However, considering the impact of inflation, that 6 lakhs could
                quickly lose its purchasing power. So, to combat the erosion
                caused by inflation, let's consider a scenario where the insurer
                pays out 2 Crores. This would yield an annual income of 12 lakhs
                for your family, a substantial sum that might suffice for the
                next 10 years.
              </p>
              <p className="dark:text-gray-200">
                Nevertheless, if you have a substantial amount of financial
                obligations, such as loans and similar commitments, it becomes
                prudent to explore a higher coverage amount. While these figures
                are ballpark estimates, the underlying idea is to ensure that
                the final payout generates sufficient cash flows for an extended
                period. This should cover all your family's expenses, including
                EMIs, and potentially leave a surplus. You can explore our
                complimentary term insurance calculator to determine the optimal
                coverage tailored to your needs.
              </p>
              <h2 className="block my-12 text-2xl font-bold text-center text-gray-900 dark:text-white">
                What would be the optimal policy duration?
              </h2>
              <p className="dark:text-gray-200">
                Remember. With a term insurance product, you keep paying your
                premiums until you die. Or the policy lapses. So there is an
                expiration date of sorts and it’s on you to decide how long you
                want to keep your policy. And you have to make this choice at
                the time of purchase. You can’t change it afterwards. So there’s
                a lot riding on this.
              </p>
              <p className="dark:text-gray-200">
                Once more, your objective is to achieve financial substitution
                for yourself, and the reason behind this is clear. When you're
                in your youth, your family might not have substantial savings to
                rely on in case of unforeseen events. However, as you age, this
                dynamic evolves. For instance, by the time you reach 60, your
                children will likely be self-sufficient adults. Your spouse
                might have a retirement nest egg to rely upon, and the number of
                dependents you need to concern yourself with will likely
                diminish.
              </p>
              <p className="dark:text-gray-200">
                So, commencing the policy at age 60 could be a sensible starting
                point. However, the insurance company is privy to a critical
                factor: the average life expectancy in India hovers around 70
                years. Consequently, if you intend to maintain the policy beyond
                this age milestone, it's important to note that your premiums
                will experience a substantial increase—quite a significant one.
                This implies that the optimal window lies somewhere between 60
                and 70. Any age within that range should ideally align well with
                your needs.
              </p>
              <p className="dark:text-gray-200">
                Furthermore, while this overview should provide you with a
                fundamental understanding of term insurance, there exist
                additional features, often referred to as riders, that can be
                attached to the base policy. These supplementary elements can
                bolster your financial replacement strategy. Among them, the
                most valuable rider is the life stage benefit.
              </p>
              <h2 className="block my-12 text-2xl font-bold text-center text-gray-900 dark:text-white">
                What are the advantages of having a Life Stage Benefit?
              </h2>
              <p className="dark:text-gray-200">
                Term insurance policies come with a high degree of
                inflexibility. Once you've committed to a specific coverage
                amount at the time of purchase, that amount remains fixed
                throughout the policy's duration. For example, if you initially
                secured a 1 Crore coverage six years ago, it will remain at 1
                Crore until the policy reaches its expiration date.
                Consequently, if you acquire the policy at a young age, the
                coverage amount may prove insufficient in the future,
                particularly as your life evolves, such as when you marry and
                have children.
              </p>
              <p className="dark:text-gray-200">
                However, there's a notable exception: the life-stage benefit.
                With this feature, your insurer provides you with the option to
                augment your coverage by a predetermined amount during
                significant life events, such as marriage and the arrival of
                children. This level of flexibility is a valuable component of a
                robust term insurance policy. So, if you find yourself unmarried
                at the moment, it might be worthwhile to contemplate the
                advantages of including this benefit.
              </p>
              <p className="dark:text-gray-200">
                If you anticipate having additional dependents in the future,
                opting for a life-stage benefit becomes an evident choice.
              </p>
              <h2 className="block my-12 text-2xl font-bold text-center text-gray-900 dark:text-white">
                When the insurance company exempts you from paying premiums
              </h2>
              <p className="dark:text-gray-200">
                Picture this scenario: one day, the medical professionals
                deliver the devastating news that you'll be confined to a
                wheelchair permanently. It's undoubtedly a distressing
                situation. You'll need to resign from your job, find alternative
                ways to sustain yourself despite your condition, and reevaluate
                your financial investments. This might even lead to
                contemplating the cancellation of your term insurance policy.
              </p>
              <p className="dark:text-gray-200">
                How can you manage to afford the annual premium of 15,000 under
                these circumstances?
              </p>
              <p className="dark:text-gray-200">
                That money could prove more valuable elsewhere. But what if
                there was an alternative? What if your insurer allowed you to
                retain your policy even without the burden of premium payments?
              </p>
              <p className="dark:text-gray-200">
                Here's the thing—your situation is unique. If it weren't for
                your disability, you would have continued with the policy.
                That's where some insurers offer you a solution: a premium
                waiver. In essence, they propose this: pay a modest fee, and you
                won't need to concern yourself with premium payments if you
                become disabled. You can still maintain your policy!
              </p>
              <p className="dark:text-gray-200">
                Furthermore, while the premium waiver I just described comes
                into play in the event of permanent disability, you also have
                the option to secure a premium waiver if you receive a critical
                illness diagnosis, such as cancer.
              </p>
              <p className="dark:text-gray-200">
                At first glance, a waiver of premiums may not seem like a
                significant benefit. However, if you find yourself permanently
                disabled or compelled to leave your job due to a critical
                illness, this feature could be a genuine lifesaver. Thus, it
                might be prudent to actively contemplate the inclusion of both
                these riders.
              </p>
              <h2 className="block my-12 text-2xl font-bold text-center text-gray-900 dark:text-white">
                Additional coverage in the event of your accidental death?
              </h2>
              <p className="dark:text-gray-200">
                We experience lenient enforcement of traffic regulations,
                encounter poorly-maintained roads, and suffer from inadequate
                street lighting. Additionally, there is no shortage of reckless
                drivers and speedsters on our roads. Consequently, fatal
                accidents occur in our country at a staggering rate of one every
                four minutes.
              </p>
              <p className="dark:text-gray-200">
                If you find yourself concerned about this alarming statistic, it
                might be a prudent decision to consider an accidental coverage
                option. With this coverage, should you meet with an accident
                resulting in your demise, the insurer would provide an
                additional 1 Crore payout to your family on top of the base term
                coverage of 2 Crore. While these figures are purely for
                illustrative purposes, you can easily grasp how this extra layer
                of security can prove invaluable for your dependents.
              </p>
              <p className="dark:text-gray-200">
                By paying a nominal premium supplement alongside your base
                premium, your family could receive additional financial support
                and enhanced protection in the unfortunate event of your
                accidental death. However, it's crucial to emphasize that you
                should never reduce your base term coverage simply because you
                have this added protection; doing so would not be advisable.
              </p>
              <h2 className="block my-12 text-2xl font-bold text-center text-gray-900 dark:text-white">
                What are the advantages of having a Critical Illness Benefit?
              </h2>
              <p className="dark:text-gray-200">
                Coping with critical illnesses like cancer can be an immense
                challenge. While it's true that an extensive health insurance
                policy can cover your medical expenses to a considerable extent,
                being diagnosed with a debilitating disease often necessitates
                taking a hiatus from work. This leaves you unable to earn, and
                your family must find a way to manage without your income.
              </p>
              <p className="dark:text-gray-200">
                However, if you choose to include a critical illness benefit,
                the situation need not be so bleak. In the event of a critical
                illness diagnosis, the insurer will provide a cash payout
                equivalent to a portion of your term insurance coverage. This
                payout can vary, ranging from 10 lakhs to 50 lakhs or even 1
                Crore, depending on the amount you select when opting for the
                benefit. You can utilize this money to replace the income lost
                during your battle with a critical illness.
              </p>
              <p className="dark:text-gray-200">
                A critical illness rider can significantly alleviate the
                challenges you face during such trying times. It's important to
                bear in mind, though, that most policies will deduct the payout
                from your sum insured, causing a corresponding reduction in your
                term coverage amount.
              </p>
              <h2 className="block my-12 text-2xl font-bold text-center text-gray-900 dark:text-white">
                Is it advisable to consider a Terminal Illness Benefit?
              </h2>
              <p className="dark:text-gray-200">
                The last thing anyone facing a terminal illness wants to do is
                surrender hope. When a medical professional delivers the news
                that you have just six months to live, it's not the time to
                start counting down your days. Instead, you seek out every
                possible avenue for survival, aiming to access the best
                available treatment, perhaps even considering treatment options
                abroad. However, this comes at a significant cost.
              </p>
              <p className="dark:text-gray-200">
                If you decide to include a terminal illness benefit in your
                insurance, it might provide you with a lifeline. You see,
                certain insurers offer the entire coverage amount as a lump sum
                payment the moment you receive a terminal illness diagnosis.
                It's essentially them acknowledging, "You're in a dire
                situation, so here's the money." This substantial lump sum could
                potentially grant you the means to pursue the best medical care
                available. What's even more reassuring is that if you surpass
                the initially projected six-month life expectancy, the insurer
                won't demand repayment.
              </p>
              <p className="dark:text-gray-200">
                While this may appear to be a valuable benefit, it's important
                to acknowledge that the likelihood of a doctor certifying a
                terminal illness and the insurer accepting this assessment isn't
                particularly high. So, it's advisable to take this factor into
                consideration before deciding to include this specific rider.
              </p>
              <h2 className="block my-12 text-2xl font-bold text-center text-gray-900 dark:text-white">
                Is it possible to counteract inflation by opting for an
                escalating coverage?
              </h2>
              <p className="dark:text-gray-200">
                Term insurance operates in a rather unconventional manner. You
                select a specific sum – your total coverage. In return, the
                insurer commits to providing this coverage to your beneficiaries
                if you pass away. To uphold your end of the deal, you continue
                to pay an annual premium until the fateful day arrives or your
                premium payment period concludes. While this arrangement might
                not seem peculiar at first glance, consider the ramifications of
                your decision 15 years down the line. A one crore cover, for
                example, might appear inadequate if you haven't factored in the
                effects of inflation.
              </p>
              <p className="dark:text-gray-200">
                This is precisely why most individuals choose their sum insured
                while assuming that inflation will persistently erode the value
                of money each year.
              </p>
              <p className="dark:text-gray-200">
                But what if you didn't have to grapple with these concerns when
                selecting your coverage? What if your sum insured grew by 5% or
                10% annually? That would certainly simplify matters. However,
                it's important to note that premiums for such plans will be
                considerably higher than those for straightforward term
                insurance. After all, there's no such thing as a free lunch in
                this world. So, if you are contemplating the purchase of a term
                policy with an escalating coverage, it's worth remembering that
                your premiums will be 50% to 60% higher as well. Hence, it makes
                sense to proactively account for inflation in your
                decision-making process, something we are here to assist you
                with.
              </p>
              <p className="dark:text-gray-200">
                Ultimately, you have the choice to opt for this benefit or
                perform the necessary calculations now and choose a larger
                coverage amount that safeguards against inflation. The decision
                lies in your hands.
              </p>
              <h2 className="block my-12 text-2xl font-bold text-center text-gray-900 dark:text-white">
                Is it advisable to reduce your coverage as you age?
              </h2>
              <p className="dark:text-gray-200">
                Recall how I initially presented term insurance as a financial
                replacement tool? Well, let's delve back into that concept. As
                you advance in age, your dependents may not rely on your
                financial support as they did in the past. Your children mature,
                and the value of your savings portfolio tends to increase.
                You'll likely accumulate sufficient resources to weather
                financial storms. Furthermore, your financial obligations may no
                longer appear as daunting.
              </p>
              <p className="dark:text-gray-200">
                Consider this scenario: if you're a young homeowner with a
                mortgage, you have concerns about making your monthly EMI
                payments. In the unfortunate event of your passing, this burden
                shifts to your spouse or, in a more challenging scenario, to
                your children. Therefore, it's evident that you require enhanced
                protection and a higher coverage level. However, once you've
                paid off your EMIs and your children start earning, you might
                not require the same level of financial safeguarding. The
                prospect of replacing your income may not pose as significant a
                challenge.
              </p>
              <p className="dark:text-gray-200">
                To cater to this dynamic, some insurance companies offer you the
                option of gradually reducing your coverage as you age.
                Consequently, your premiums decrease as the coverage amount
                diminishes.
              </p>
              <p className="dark:text-gray-200">
                While this might be a desirable feature for some individuals,
                it's challenging to accurately predict future financial
                obligations. So, if you're considering this rider, it's crucial
                to be absolutely certain that you won't require extensive
                coverage as you grow older.
              </p>
            </div>
          </article>
        </div>
      </main>
    </div>
  );
};

export default Life101;
