import { HeroSection } from './components/HeroSection';
import { DemographicsSection } from './components/DemographicsSection';
import { CommunitySection } from './components/CommunitySection';
import { ShippingSection } from './components/ShippingSection';
import { CultureSection } from './components/CultureSection';
import { MemeGallery } from './components/MemeGallery';

export default function App() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <div id="demographics-section">
        <DemographicsSection />
      </div>
      <div id="community-section">
        <CommunitySection />
      </div>
      <ShippingSection />
      <CultureSection />
      <div id="meme-section">
        <MemeGallery />
      </div>
      
      {/* Footer */}
      <footer className="bg-[#1B1F3B] border-t-8 border-[#FFD229] py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block bg-[#FFD229] px-6 py-2 border-3 border-black mb-6">
            <h3 className="text-[#1B1F3B]">Plus Ultra!</h3>
          </div>
          <p className="text-white/90 mb-2">
            My Hero Academia: Global Fandom & Cultural Impact Research Hub
          </p>
          <p className="text-white/60 text-sm mb-6">
            Created by Jie Chen from RIT for Anime Project
          </p>
        </div>
      </footer>
    </div>
  );
}