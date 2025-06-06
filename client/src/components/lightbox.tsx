import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface LightboxItem {
  id: number;
  image: string;
  alt: string;
  caption: string;
}

interface LightboxProps {
  isOpen: boolean;
  item: LightboxItem | null;
  onClose: () => void;
}

export default function Lightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<LightboxItem | null>(null);

  const openLightbox = (item: LightboxItem) => {
    setCurrentItem(item);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setCurrentItem(null);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    // Custom event listener for portfolio items
    const handlePortfolioClick = (e: CustomEvent) => {
      openLightbox(e.detail);
    };

    window.addEventListener('portfolio-item-click', handlePortfolioClick as EventListener);

    return () => {
      window.removeEventListener('portfolio-item-click', handlePortfolioClick as EventListener);
    };
  }, []);

  if (!isOpen || !currentItem) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[1000] bg-black/90 flex items-center justify-center p-4">
      <button
        onClick={closeLightbox}
        className="absolute top-4 right-4 text-white hover:text-gold text-4xl z-10 transition-colors duration-300"
        aria-label="Close lightbox"
      >
        <X size={32} />
      </button>
      
      <div className="max-w-4xl max-h-4xl w-full h-full flex flex-col items-center justify-center">
        <img
          src={currentItem.image}
          alt={currentItem.alt}
          className="max-w-full max-h-full object-contain"
        />
        <div className="text-center text-white text-xl mt-4">
          {currentItem.caption}
        </div>
      </div>

      <div
        className="absolute inset-0 cursor-pointer"
        onClick={closeLightbox}
      />
    </div>
  );
}
