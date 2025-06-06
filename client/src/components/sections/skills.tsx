import { 
  Mic, 
  Code, 
  Globe, 
  PaintBucket, 
  Video, 
  Volume2, 
  Camera, 
  Smartphone, 
  Calendar, 
  Music, 
  Users, 
  Bot 
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const skills = [
  { name: "Public Speaking", icon: Mic, description: "Leadership & Communication" },
  { name: "Programming", icon: Code, description: "JavaScript, Python, HTML/CSS" },
  { name: "Web Development", icon: Globe, description: "Full Stack & SDLC" },
  { name: "Graphic Design", icon: PaintBucket, description: "Photoshop, Illustrator, Canva" },
  { name: "Video Editing", icon: Video, description: "Premiere Pro, Final Cut" },
  { name: "Sound Engineering", icon: Volume2, description: "Stage Setup & Audio" },
  { name: "Photography", icon: Camera, description: "Portrait, Studio, Editing" },
  { name: "Phone Repair", icon: Smartphone, description: "Troubleshooting & Hardware" },
  { name: "Event Planning", icon: Calendar, description: "Management & Coordination" },
  { name: "Music Ministry", icon: Music, description: "Drums, Keyboard, Guitar" },
  { name: "Team Management", icon: Users, description: "Leadership & Coordination" },
  { name: "Robotics", icon: Bot, description: "Problem Solving & Innovation" }
];

const skillLevels = [
  { name: "Programming", percentage: 85 },
  { name: "Graphic Design", percentage: 90 },
  { name: "Sound Engineering", percentage: 80 },
  { name: "Photography", percentage: 88 },
  { name: "Leadership", percentage: 92 }
];

export default function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5, rootMargin: '0px 0px -50px 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-20 bg-light-grey" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-navy text-center mb-16">
          Skills & Expertise
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <IconComponent className="text-accent group-hover:text-gold mx-auto mb-3 transition-colors duration-300" size={48} />
                  <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-gold/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="font-montserrat font-semibold text-navy mb-2 group-hover:text-accent transition-colors duration-300">
                  {skill.name}
                </h3>
                <p className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">{skill.description}</p>
              </div>
            );
          })}
        </div>

        {/* Skill Level Bars */}
        <div className="max-w-4xl mx-auto">
          <h3 className="font-montserrat font-bold text-2xl text-navy text-center mb-8">
            Proficiency Levels
          </h3>
          <div className="space-y-6">
            {skillLevels.map((skill) => (
              <div key={skill.name} className="flex items-center">
                <div className="w-32 text-right mr-4 font-semibold text-navy">
                  {skill.name}
                </div>
                <div className="flex-1 bg-gray-200 rounded-full h-4">
                  <div
                    className="skill-bar bg-gradient-to-r from-accent to-gold h-4 rounded-full shadow-lg"
                    style={{
                      width: isVisible ? `${skill.percentage}%` : '0%'
                    }}
                  ></div>
                </div>
                <div className="w-12 text-left ml-4 text-gold font-semibold">
                  {skill.percentage}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
