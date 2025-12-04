import { ImageWithFallback } from './figma/ImageWithFallback';
import { Users, TrendingUp, Sparkles } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1763315371253-ce4d195ba6d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBlcmhlcm8lMjBjaXR5c2NhcGUlMjBhbmltZXxlbnwxfHx8fDE3NjQ4MDE4Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1B1F3B]/90 via-[#1B1F3B]/70 to-[#1B1F3B]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        {/* Floating Badges */}
        <button
          onClick={() => scrollToSection('community-section')}
          className="absolute top-20 left-10 hero-badge w-24 h-24 animate-bounce hidden lg:flex flex-col hover:scale-110 transition-transform"
        >
          <Users className="w-8 h-8" />
          <span className="text-xs mt-1">Conventions</span>
        </button>
        <button
          onClick={() => scrollToSection('demographics-section')}
          className="absolute top-40 right-20 hero-badge w-24 h-24 animate-bounce hidden lg:flex flex-col hover:scale-110 transition-transform"
          style={{ animationDelay: '0.3s' }}
        >
          <TrendingUp className="w-8 h-8" />
          <span className="text-xs mt-1">Global</span>
        </button>
        <button
          onClick={() => scrollToSection('meme-section')}
          className="absolute bottom-40 right-10 hero-badge w-24 h-24 animate-bounce hidden lg:flex flex-col hover:scale-110 transition-transform"
          style={{ animationDelay: '0.6s' }}
        >
          <Sparkles className="w-8 h-8" />
          <span className="text-xs mt-1">Memes</span>
        </button>

        {/* Main Title */}
        <div className="max-w-5xl">
          <div className="inline-block bg-[#FFD229] px-6 py-2 transform -rotate-2 mb-6">
            <span className="text-[#1B1F3B] text-xl tracking-wider">RESEARCH REPORT</span>
          </div>
          
          <h1 className="text-white mb-6 drop-shadow-[0_4px_0_rgba(227,65,65,1)]">
            The Hero Society
          </h1>
          
          <div className="speech-bubble inline-block mb-8 max-w-3xl">
            <h2 className="text-[#1B1F3B] text-2xl">
              Exploring the My Hero Academia Global Fandom
            </h2>
          </div>

          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">
            A cultural and social analysis of digital fandom, community participation, and global influence.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 animate-bounce">
          <div className="w-6 h-10 border-3 border-[#FFD229] rounded-full flex justify-center">
            <div className="w-2 h-2 bg-[#FFD229] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}