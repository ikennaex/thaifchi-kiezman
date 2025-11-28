import React from "react";
import { img11 } from "../../imports";

const Ceo = () => {
  return (
    <div className="bg-customBlue">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col lg:flex-row gap-10 fade-in-bottom">
    <div className="w-full lg:w-1/2 flex-shrink-0">
      <img
        className="object-cover w-full h-64 md:h-96 rounded-2xl mb-5 lg:mb-0"
        src={img11}
        alt="CEO"
      />
    </div>

    <div className="w-full lg:w-1/2 text-white">
      <h2 className="text-5xl sm:text-4xl md:text-5xl font-bold mb-6">
        About the CEO
      </h2>

      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-customYellow">
        Meet the Visionary Behind LumiGrid Technology Limited: Akporowho Mariere
      </h3>

      <p className="mb-4 text-base md:text-lg">
        Akporowho Mariere is a pioneering voice in Nigeria’s renewable energy sector and the dynamic CEO of LumiGrid Technology
        Limited—a company on a mission to reshape Africa’s energy narrative through advanced solar technologies and intelligent
        power systems.
      </p>

      <p className="mb-4 text-base md:text-lg">
        With a background in energy systems engineering, project management, and sustainable infrastructure deployment,
        Akporowho is known for delivering tailor-made clean energy solutions that guarantee reliability, energy efficiency,
        and long-term cost savings. Under his leadership, LumiGrid has grown into a trusted provider of:
      </p>

      <ul className="list-disc pl-6 mb-4 space-y-2 text-white text-base md:text-lg">
        <li>Solar PV systems</li>
        <li>Hybrid inverters</li>
        <li>Battery Energy Storage Systems (BESS)</li>
        <li>Smart load management frameworks</li>
        <li>Energy optimization strategies for residential and commercial clients</li>
      </ul>

      <p className="mb-4 text-base md:text-lg">
        His approach is rooted in innovation, precision, and a deep understanding of Nigeria’s complex energy challenges.
        By aligning LumiGrid’s mission with global sustainable development goals—especially SDG 7 (Affordable and Clean Energy)—he
        is leading a revolution in how power is generated, stored, and consumed across Nigeria and beyond.
      </p>

      <h3 className="text-xl sm:text-2xl font-semibold mt-8 mb-4">
        A Message From the CEO: Akporowho Mariere
      </h3>

      <blockquote className="border-l-4 border-customYellow pl-4 italic text-white mb-4 text-base md:text-lg">
        "At LumiGrid Technology Limited, we believe that energy access is not a privilege—it’s a right. Every home, office, and
        facility in Africa deserves 24/7 power without compromise. That’s why we’re building smart solar systems that do more
        than just generate electricity—they empower lives, businesses, and the environment."
      </blockquote>

      <blockquote className="border-l-4 border-customYellow pl-4 italic text-white mb-4 text-base md:text-lg">
        "As CEO, my vision is clear: to create a future where power outages, generator noise, and fuel dependency are a thing
        of the past. Through intelligent solar engineering, AI-integrated energy management, and sustainable project delivery,
        we’re lighting up communities one system at a time."
      </blockquote>

      <blockquote className="border-l-4 border-customYellow pl-4 italic text-white mb-4 text-base md:text-lg">
        "To our clients, partners, and future collaborators: thank you for trusting LumiGrid. Let’s build a cleaner, brighter,
        and more resilient energy future—together."
      </blockquote>

      <div className="mt-6 text-base md:text-lg">
        <p className="font-semibold">Warm regards,</p>
        <p className="font-semibold">Akporowho Mariere</p>
        <p className="text-sm text-customYellow">CEO, LumiGrid Technology Limited</p>
        <p className="text-sm text-white italic">Empowering Africa with Intelligent Solar Solutions</p>
      </div>
    </div>
  </div>
</div>
  );
};

export default Ceo;
