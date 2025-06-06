import { MapPin, Mail, Linkedin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/attached_assets/Picsart_25-04-30_12-05-12-602.png"
              alt="Joshua Kolawole in action - editing or designing"
              className="rounded-2xl shadow-2xl w-full"
            />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl gradient-text mb-8 animate-fadeInUp">
              About Me
            </h2>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                I'm <strong className="text-navy">Joshua Kolawole Obaloluwa</strong>—a dynamic, 
                purpose-driven creative and leader based in Ogun State, Nigeria. Currently serving as{" "}
                <strong className="text-navy">President of Gacsfel OOU</strong>, I lead students in 
                spiritual growth, technical mastery, and creative expression.
              </p>

              <p>
                With hands-on expertise in <strong className="text-navy">phone repair</strong>,{" "}
                <strong className="text-navy">sound engineering</strong>,{" "}
                <strong className="text-navy">graphic design</strong>,{" "}
                <strong className="text-navy">photo and video editing</strong>, and{" "}
                <strong className="text-navy">programming</strong>, I solve problems by blending 
                technical precision with artistic vision. As a{" "}
                <strong className="text-navy">musician</strong> (drums, keyboard, acoustic guitar), 
                I use music to inspire and build community.
              </p>

              <p>
                I believe in <strong className="text-gold">Impact over Impression</strong>,{" "}
                <strong className="text-gold">Process over Perfection</strong>, and{" "}
                <strong className="text-gold">Purpose over Popularity</strong>. Through leadership roles, 
                internships in QA/Software and web development, and real-world projects like creating a 
                birthday webpage for my sister, I've honed my skills and served my community.
              </p>
            </div>

            {/* Contact Info */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="text-gold text-xl" />
                <span className="text-gray-700 font-semibold">Nigeria • Ago-Iwoye, Ogun State</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-gold text-xl" />
                <span className="text-gray-700">joshua.kolawole@example.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Linkedin className="text-gold text-xl" />
                <a
                  href="https://linkedin.com/in/joshua-kolawole-40062a287"
                  className="text-navy hover:text-gold transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  linkedin.com/in/joshua-kolawole-40062a287
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
