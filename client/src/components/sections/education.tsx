const educationItems = [
  {
    id: 1,
    degree: "BSc in Physics",
    institution: "Olabisi Onabanjo University",
    period: "2021–2025",
    description: "Skills developed: Public speaking, team management, technical problem-solving, research methodology"
  },
  {
    id: 2,
    degree: "O'Level in Technical Science",
    institution: "Ibadan Grammar School",
    period: "2014–2020",
    description: "Skills developed: Leadership, public speaking, programming, music, technical foundations"
  }
];

const certifications = [
  {
    id: 1,
    title: "Software QA Fundamentals",
    issuer: "TestarsQuarter Bootcamp"
  },
  {
    id: 2,
    title: "Front-end Web Development",
    issuer: "Idigix Hub Program"
  },
  {
    id: 3,
    title: "Robotics & Lego Mindstorms",
    issuer: "LEGO Education Workshop"
  },
  {
    id: 4,
    title: "Google Coding & Public Speaking",
    issuer: "Google Student Program"
  }
];

export default function EducationSection() {
  return (
    <section className="py-20 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-navy text-center mb-16">
          Education & Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Education */}
          <div>
            <h3 className="font-montserrat font-bold text-2xl text-navy mb-6">Education</h3>
            <div className="space-y-6">
              {educationItems.map((item) => (
                <div key={item.id} className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="font-montserrat font-bold text-xl text-navy mb-2">
                    {item.degree}
                  </h4>
                  <p className="text-gold font-semibold mb-2">
                    {item.institution} ({item.period})
                  </p>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-montserrat font-bold text-2xl text-navy mb-6">
              Certifications & Courses
            </h3>
            <div className="space-y-6">
              {certifications.map((cert) => (
                <div key={cert.id} className="bg-white p-6 rounded-lg shadow-lg">
                  <h4 className="font-montserrat font-bold text-lg text-navy mb-2">
                    {cert.title}
                  </h4>
                  <p className="text-gold font-semibold">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
