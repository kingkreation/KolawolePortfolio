import { ChevronDown, Sparkles, Code, Music, Camera } from "lucide-react";
import ParticleSystem from "@/components/particles";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen gradient-hero pattern-overlay flex items-center justify-center relative overflow-hidden"
    >
      <ParticleSystem />
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <Code className="absolute top-20 left-10 text-gold/30 animate-float" size={32} style={{animationDelay: '0s'}} />
        <Music className="absolute top-32 right-16 text-accent/30 animate-float" size={28} style={{animationDelay: '2s'}} />
        <Camera className="absolute bottom-32 left-20 text-gold/30 animate-float" size={30} style={{animationDelay: '4s'}} />
        <Sparkles className="absolute top-1/2 right-8 text-accent/30 animate-float" size={24} style={{animationDelay: '1s'}} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Professional Headshot */}
          <div className="mb-8 flex justify-center">
            <div className="w-48 h-48 rounded-full border-4 border-gold shadow-2xl overflow-hidden animate-pulse-gold">
              <img
                src="/attached_assets/Picsart_25-04-30_12-05-12-602.png"
                alt="Joshua Kolawole Professional Headshot"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1 className="font-montserrat font-bold text-4xl md:text-6xl lg:text-7xl text-white mb-4 animate-fadeInUp animate-glow">
            Joshua Kolawole
          </h1>

          <div className="font-montserrat font-semibold text-lg md:text-xl gradient-text mb-6 animate-slideInLeft">
            Tech-Savvy Creative | Photo & Video Editor | Graphics Designer | Programmer | 
            Musician | Photographer | Student Leader | Sound & Phone Engineer
          </div>

          <div className="font-montserrat italic text-2xl md:text-3xl bg-gradient-to-r from-gold to-accent bg-clip-text text-transparent mb-8 animate-fadeInUp delay-300">
            "Purpose over Popularity | Impact over Impression"
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-gradient-to-r from-gold to-accent text-navy px-8 py-3 rounded-full font-montserrat font-semibold hover:from-accent hover:to-gold hover:scale-105 transition-all duration-300 transform shadow-lg"
            >
              Discover My Story
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border-2 border-accent text-accent px-8 py-3 rounded-full font-montserrat font-semibold hover:bg-accent hover:text-navy transition-all duration-300 backdrop-blur-sm bg-white/10"
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
