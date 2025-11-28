import React from "react";

const CoreValues = () => {
  const values = [
    {
      title: "Trustworthiness",
      text: `Building dependable 
relationships through 
honesty and reliability.`,
    },
    {
      title: "Creativity",
      text: `Driving growth and solutions 
through bold and original 
ideas`,
    },
    {
      title: "Quality Focus",
      text: `Paying attention to detail 
to ensure superior 
outcomes in all our
 services`,
    },
    {
      title: "Resilience",
      text: `Adapting to challenges with 
strength, determination, and 
consistency`,
    },
    {
      title: "Collaboration",
      text: `Working closely with clients, partners, 
and communities for
 shared success.`,
    },
  ];

  return (
    <section className="container mx-auto px-7 lg:px-20 py-20">
      {/* SECTION BADGE */}
      <div className="flex justify-center mb-10">
        <p className="border rounded-full px-6 py-2 text-sm font-semibold text-white bg-customOrange shadow-sm">
          Our Core Values
        </p>
      </div>

      {/* VALUE GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {values.map((item, index) => (
          <div
            key={index}
            className="relative rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2 bg-white"
          >
            {/* NUMBER BADGE */}
            <div className="absolute -top-5 -left-5 bg-customBlue text-white w-12 h-12 flex items-center justify-center rounded-full font-bold text-lg shadow-md">
              {index + 1}
            </div>

            <h3 className="text-2xl font-bold text-customBlue mb-4">
              {item.title}
            </h3>

            <p className="text-gray-600 whitespace-pre-line leading-relaxed text-lg">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
