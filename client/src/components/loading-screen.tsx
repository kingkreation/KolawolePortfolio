import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-navy via-navy-light to-accent flex items-center justify-center">
      <div className="text-center">
        <div className="w-24 h-24 mx-auto mb-8 relative">
          <div className="w-full h-full rounded-full border-4 border-gold/30 border-t-gold animate-spin"></div>
          <div className="absolute inset-2 rounded-full bg-gradient-to-r from-gold/20 to-accent/20 blur-sm"></div>
        </div>
        
        <h1 className="font-montserrat font-bold text-3xl text-white mb-4 animate-glow">
          Joshua Kolawole
        </h1>
        
        <div className="w-64 h-2 bg-white/20 rounded-full mx-auto mb-4">
          <div 
            className="h-full bg-gradient-to-r from-gold to-accent rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="text-white/80 font-medium">
          Loading Portfolio... {Math.round(progress)}%
        </p>
      </div>
    </div>
  );
}