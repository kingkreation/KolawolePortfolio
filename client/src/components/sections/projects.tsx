import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Birthday Webpage Gift",
    date: "April 2025",
    description: "Designed, coded, and deployed a personalized birthday webpage as a gift—using HTML, CSS, and minimal JavaScript. Showcased family photos, custom animations, and responsive design. Delivered it as a surprise, highlighting my programming and design skills.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "Birthday webpage project screenshot",
    buttonText: "View Project"
  },
  {
    id: 2,
    title: "Gacsfel Conference Media",
    date: "March 2025",
    description: "Led the media team for the first Gacsfel Conference: managed sound setup, designed promotional graphics, and edited event videos. Coordinated with interpreters to ensure bilingual coverage.",
    image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "Conference media production setup",
    buttonText: "View Photos/Videos"
  },
  {
    id: 3,
    title: "Birthday Photoshoot & Editing",
    date: "Recent Project",
    description: "Volunteered a free birthday photoshoot for a friend's friend: transformed a simple room background into a mini-studio using natural light. Edited final images professionally in Lightroom and Photoshop.",
    image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "Birthday photoshoot editing workspace",
    buttonText: "See Before/After"
  },
  {
    id: 4,
    title: "QA & Software Testing Portfolio",
    date: "TestarsQuarter Internship",
    description: "Documenting my key contributions at TestarsQuarter: writing test cases, sprint retrospectives, bug reports, and collaborating on software quality processes. Showcases critical thinking and attention to detail.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "QA testing and software development",
    buttonText: "Read More"
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-navy text-center mb-16">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="project-card bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="font-montserrat font-bold text-xl text-navy mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-accent font-semibold mb-3">{project.date}</p>
                <p className="text-gray-700 mb-4 group-hover:text-gray-600 transition-colors duration-300">{project.description}</p>
                <button className="bg-gradient-to-r from-accent to-gold text-white px-6 py-2 rounded-full font-semibold hover:from-gold hover:to-accent hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-lg">
                  {project.buttonText}
                  <ExternalLink size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
