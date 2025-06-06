import { Music, Megaphone, Camera, Bot } from "lucide-react";

const volunteeringItems = [
  {
    id: 1,
    title: "Musician & Media Director",
    organization: "Gacsfel OOU",
    period: "Jul 2021 – Present",
    responsibilities: [
      "Live music ministry (drums, keyboard) every Sunday, Tuesday, Wednesday",
      "Lead media coverage and graphic design",
      "Interpreter coordination and oversight"
    ],
    icon: Music
  },
  {
    id: 2,
    title: "Musician",
    organization: "Living Portals Christian Center",
    period: "Jul 2024 – Present",
    responsibilities: [
      "Drums & keyboard for worship services",
      "Musical leadership and arrangement"
    ],
    icon: Music
  },
  {
    id: 3,
    title: "Public Relations Officer",
    organization: "Dynamic Youth Fellowship (DYF), GAC Nigeria",
    period: "Jun 2025 – Present",
    responsibilities: [
      "Brand strategy and content creation",
      "Event planning and coordination",
      "Community engagement and outreach"
    ],
    icon: Megaphone
  },
  {
    id: 4,
    title: "Volunteer Photographer & Editor",
    organization: "Campus Events & Church Retreats",
    period: "Ongoing",
    responsibilities: [
      "Event photography and documentation",
      "Post-production editing and delivery",
      "Student conference coverage"
    ],
    icon: Camera
  },
  {
    id: 5,
    title: "STEM Outreach",
    organization: "Google & LEGO Education Programs",
    period: "2019 – 2020",
    responsibilities: [
      "Led robotics workshops for junior students",
      "Mentored students in basic programming (Scratch)",
      "Promoted STEM education in local communities"
    ],
    icon: Bot
  }
];

export default function VolunteeringSection() {
  return (
    <section id="volunteering" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-navy text-center mb-16">
          Volunteering & Extracurricular
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {volunteeringItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <IconComponent className="text-navy" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-montserrat font-bold text-xl text-navy mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gold font-semibold mb-2">
                    {item.organization} ({item.period})
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    {item.responsibilities.map((responsibility, index) => (
                      <li key={index}>• {responsibility}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
