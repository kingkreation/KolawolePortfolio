import { useState } from "react";

const portfolioItems = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Event poster design",
    caption: "Event Poster – Gacsfel OOU Conference",
    category: "graphic-design"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Edited portrait photography",
    caption: "Edited Portrait – Birthday Photoshoot",
    category: "photography"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Video editing project",
    caption: "Conference Video Edit",
    category: "video"
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Sound engineering setup",
    caption: "Sound Engineering – Stage Setup",
    category: "audio"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Web development project",
    caption: "Web Development – Sister's Birthday Site",
    category: "web"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Music performance",
    caption: "Music Ministry – Keyboard Performance",
    category: "music"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400",
    alt: "Brand design work",
    caption: "Brand Design – Logo & Identity",
    category: "graphic-design"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=600",
    alt: "Phone repair workspace",
    caption: "Phone Engineering – Repair Workshop",
    category: "engineering"
  }
];

interface PortfolioSectionProps {
  onImageClick?: (item: typeof portfolioItems[0]) => void;
}

export default function PortfolioSection({ onImageClick }: PortfolioSectionProps) {
  return (
    <section id="portfolio" className="py-20 bg-light-grey">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-navy text-center mb-16">
          Creative Portfolio
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="portfolio-item relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => onImageClick?.(item)}
            >
              <img
                src={item.image}
                alt={item.alt}
                className={`w-full object-cover group-hover:scale-110 transition-transform duration-300 ${
                  item.id % 3 === 0 ? "h-64" : "h-48"
                }`}
              />
              <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-gold font-semibold text-center px-4">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
