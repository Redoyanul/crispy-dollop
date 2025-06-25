import React, { useEffect, useState } from 'react';

interface IntroScreenProps {
  onComplete: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 500);
    const timer2 = setTimeout(() => setStage(2), 1500);
    const timer3 = setTimeout(() => setStage(3), 2500);
    const timer4 = setTimeout(() => onComplete(), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-dark-950 via-primary-900 to-accent-900 flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-accent-500/20 animate-pulse"></div>
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-primary-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <div className={`mb-8 transition-all duration-1000 ${stage >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <div className="relative">
            <img
              src="/image.png"
              alt="BNMPC IT Club Logo"
              className="w-32 h-32 mx-auto animate-pulse-glow"
            />
            <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-primary-500/30 to-accent-500/30 animate-rotate"></div>
          </div>
        </div>

        {/* Club Name Animation */}
        <div className={`transition-all duration-1000 delay-500 ${stage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-400 via-accent-400 to-success-400 bg-clip-text text-transparent animate-glow">
              BNMPC IT CLUB
            </span>
          </h1>
        </div>

        {/* Tagline Animation */}
        <div className={`transition-all duration-1000 delay-1000 ${stage >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl md:text-2xl text-secondary-300 font-light">
            Where Tech Meets Future Entrepreneurs
          </p>
          <div className="mt-4 w-64 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full animate-pulse"></div>
        </div>

        {/* Loading Animation */}
        <div className={`mt-12 transition-all duration-500 delay-1500 ${stage >= 3 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex justify-center space-x-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-primary-500 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
          <p className="text-secondary-400 mt-4 text-sm">Loading...</p>
        </div>
      </div>

      {/* Skip Button */}
      <button
        onClick={onComplete}
        className="absolute bottom-8 right-8 px-4 py-2 text-secondary-400 hover:text-white transition-colors duration-300 text-sm"
      >
        Skip →
      </button>
    </div>
  );
};

export default IntroScreen;