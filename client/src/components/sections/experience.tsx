import { Briefcase, Smartphone, Bug, Code, Palette } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "President, Gacsfel OOU",
    period: "Jul 2024 – Present",
    location: "Ago-Iwoye, Ogun State, Nigeria",
    responsibilities: [
      "Leadership and public speaking",
      "Team management and coordination",
      "Event planning (Atmosphere of Success)",
      "Media coordination and oversight"
    ],
    icon: Briefcase,
    side: "left"
  },
  {
    id: 2,
    title: "Phone Engineer, Ipasco Ventures",
    period: "Aug 2023 – Present",
    location: "Ogun State, Nigeria",
    responsibilities: [
      "Phone troubleshooting and repairs",
      "Hardware diagnostics",
      "Customer service and support"
    ],
    icon: Smartphone,
    side: "right"
  },
  {
    id: 3,
    title: "QA Student Intern, TestarsQuarter",
    period: "Apr 2025 – Present",
    location: "Remote (Abuja, Nigeria)",
    responsibilities: [
      "Software Quality Assurance",
      "QA engineering and testing",
      "Software testing methodologies",
      "Communication and documentation"
    ],
    icon: Bug,
    side: "left"
  },
  {
    id: 4,
    title: "Programming Intern, Idigix Web Design Hub",
    period: "Apr 2025 – Present",
    location: "Remote (Nigeria)",
    responsibilities: [
      "Web development and programming",
      "SDLC implementation",
      "API integration",
      "Front-end development"
    ],
    icon: Code,
    side: "right"
  },
  {
    id: 5,
    title: "Computer Operator & Graphic Designer",
    company: "Betalife Global Concepts",
    period: "Oct 2020 – Nov 2022",
    location: "Nigeria",
    responsibilities: [
      "Computer operations management",
      "Graphic design (posters, flyers, PR materials)",
      "Brand identity development"
    ],
    icon: Palette,
    side: "left"
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-navy text-center mb-16">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 bg-gold h-full"></div>

          <div className="space-y-12">
            {experiences.map((experience) => {
              const IconComponent = experience.icon;
              const isLeft = experience.side === "left";

              return (
                <div
                  key={experience.id}
                  className={`relative flex flex-col ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  } items-start md:items-center`}
                >
                  {/* Timeline Icon */}
                  <div className="flex-shrink-0 w-8 h-8 bg-gold rounded-full absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center justify-center">
                    <IconComponent className="text-navy" size={16} />
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isLeft ? "md:pr-8 md:text-right" : "md:pl-8"
                    }`}
                  >
                    <div
                      className={`p-6 rounded-lg shadow-lg ${
                        isLeft ? "bg-light-grey" : "bg-white border border-gray-200"
                      }`}
                    >
                      <h3 className="font-montserrat font-bold text-xl text-navy mb-2">
                        {experience.title}
                      </h3>
                      {experience.company && (
                        <p className="text-sm text-navy font-medium mb-1">
                          {experience.company}
                        </p>
                      )}
                      <p className="text-gold font-semibold mb-2">{experience.period}</p>
                      <p className="text-gray-600 mb-3">{experience.location}</p>
                      <ul className="text-gray-700 space-y-1">
                        {experience.responsibilities.map((responsibility, index) => (
                          <li key={index}>• {responsibility}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
