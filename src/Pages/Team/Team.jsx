import React from "react";
import { FaUserTie } from "react-icons/fa";

const teamMembers = [
  {
    role: "Management Consultant",
    name: "Chidi Ndego",
    bio: `Chidi earned a first class degree in Petroleum Engineering from the University of Benin and has since built a distinguished career as a Data and AI professional. With over five years of experience spanning data analytics, data science, engineering, and artificial intelligence, he has made significant contributions across industries.
    
Chidi has delivered impactful results in roles at Standard Bank Group, General Electric, and The Weather Company, combining technical expertise with strong leadership to drive innovation and create value.`,
  },
  {
    role: "Management Consultant",
    name: "Idiebise Oghenevwogaga Nelson (MNSE, CWI, MNIMechE, MNIPES, MIAENG)",
    bio: `He attended University of Benin and attained a Bachelor Degree in Mechanical Engineering.
    
A registered Engineer (Coren No. 48,367) with over a decade of onshore/offshore experiences in engineering construction, project management, fabrication, installation, welding inspection, HSE and QA/QC. Proficient in HSE compliance to ensure a safe working environment, including risk assessments, surveys, machinery upgrades and maintenance. Passionate about providing technical support to improve productivity and increase efficiency to achieve and exceed operational objectives.`,
  },
];

const Team = () => {
  return (
    <section className="px-7 py-16 bg-gray-50 text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-center text-blue-600">
          Our Management Team
        </h2>
        <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Meet the professionals driving innovation and excellence in our
          organization.
        </p>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-4 bg-blue-100 rounded-full">
                  <FaUserTie className="text-blue-600 text-2xl" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-500 text-sm">{member.role}</p>
                </div>
              </div>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
