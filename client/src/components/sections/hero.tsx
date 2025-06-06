import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen gradient-hero pattern-overlay flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Professional Headshot */}
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 rounded-full border-4 border-gold shadow-2xl overflow-hidden animate-pulse-gold">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
                alt="Joshua Kolawole Professional Headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-4 animate-fadeInUp">
            Joshua Kolawole
          </h1>

          <div className="font-montserrat font-semibold text-lg md:text-xl text-gold mb-6 animate-slideInLeft">
            Tech-Savvy Creative | Photo & Video Editor | Graphics Designer | Programmer | 
            Musician | Photographer | Student Leader | Sound & Phone Engineer
          </div>

          <div className="font-montserrat italic text-2xl md:text-3xl text-gold mb-8 animate-fadeInUp delay-300">
            "Purpose over Popularity | Impact over Impression"
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gold text-navy px-8 py-3 rounded-full font-montserrat font-semibold hover:bg-white hover:text-navy transition-all duration-300 transform hover:scale-105"
            >
              Discover My Story
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-gold text-gold px-8 py-3 rounded-full font-montserrat font-semibold hover:bg-gold hover:text-navy transition-all duration-300"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gold text-2xl" />
      </div>
    </section>
  );
}
