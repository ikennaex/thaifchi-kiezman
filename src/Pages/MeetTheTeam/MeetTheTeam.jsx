import React from "react";
import { FaUserTie } from "react-icons/fa";

const teamMembers = [
  {
    role: "Chairman",
    name: "Ahmed C.Egbenumolise",
    bio: `Mr. Egbenumolise has his Bachelors degree in Public Administration  from Ambroise Alli University,  Ekpoma, Edo State and Master's Degree in Strategy and Security Administration (MASSA) from Nigeria Defense Academy, NDA, Kaduna. Ahmed is a security consultant,  sport developer and a passionate entrepreneur with flourishing interests in construction. Private security services,  communication and entertainment 

He sits on the Board of several enterprises.  He is a sport lover, avid reader and prolific writer`,
  },
  {
    role: "Management Consultant",
    name: "Chidi Ndego",
    bio: `Chidi earned a first class degree in Petroleum Engineering from the University of Benin and has since built a distinguished career as a Data and AI professional. With over five years of experience spanning data analytics, data science, engineering, and artificial intelligence, he has made significant contributions across industries.
    
Chidi has delivered impactful results in roles at Standard Bank Group, General Electric, and The Weather Company, combining technical expertise with strong leadership to drive innovation and create value.`,
  },
  {
    role: "Director",
    name: "Engr Nelson Idiebise",
    bio: `He attended University of Benin and attained a Bachelor Degree in Mechanical Engineering.
    
A registered Engineer (Coren No. 48,367) with over a decade of onshore/offshore experiences in engineering construction, project management, fabrication, installation, welding inspection, HSE and QA/QC. Proficient in HSE compliance to ensure a safe working environment, including risk assessments, surveys, machinery upgrades and maintenance. Passionate about providing technical support to improve productivity and increase efficiency to achieve and exceed operational objectives.`,
  },
  {
    role: "Director/ CFO",
    name: "Ifeoma Onokpasa",
    bio: `Ifeoma Onokpasa is a seasoned finance professional with extensive expertise in strategy, treasury management, and corporate finance. She holds a Bachelor’s degree in Economics from Covenant University, Ota, an MBA from Lagos Business School, Pan-Atlantic University, Lagos, and a Finance Certificate from Yale University, USA.

Her career includes notable experience at Financial Derivatives Company, where she served in various capacities, and at Futureview Financial Services, where she led the Treasury and Corporate Finance functions. Ifeoma is also an accomplished administrator with a strong passion for strategic planning and financial management.`,
  },
  {
    role: "Director",
    name: "Ms Sandra Hitler",
    bio: `Sandra is safety and environmental enthusiast. She has a diploma in Civil Engineering and a degree in Microbiology.

 She brings her wealth of Expertise and experience in Health , Safety and Environment`,
  },
  {
    role: "Management Consultant",
    name: "Engr. Kelly Ochuko Egode",
    bio: `Kelly Ochuko Egode is a seasoned Electrical/Electronics Engineer and multidisciplinary technology leader with over 18 years of experience across energy, finance, agriculture, infrastructure, and industrial automation. As a COREN/NSE-certified professional, he combines hands-on engineering expertise with cutting-edge AI and IoT solutions to drive efficiency and innovation in the oil & gas sector.

A graduate of the Federal University of Technology Akure (B.Eng, Electrical/Electronics) and holder of an MSc in AI & Data Science (Distinction) University of Hull, UK. Kelly bridges traditional engineering with Industry 4.0 technologies. His work has been recognized by Innovate UK, and the Nigerian Society of Engineers.`,
  },
  
];

const MeetTheTeam = () => {
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

export default MeetTheTeam;
