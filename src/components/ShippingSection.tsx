import { Heart, Users, MessageCircle, Sparkles } from 'lucide-react';

const ships = [
  { pairing: 'Deku x Uraraka', popularity: 32, color: '#FFD229' },
  { pairing: 'Bakugou x Deku', popularity: 28, color: '#E04141' },
  { pairing: 'Todoroki x Deku', popularity: 18, color: '#4A90E2' },
  { pairing: 'Kirishima x Bakugou', popularity: 12, color: '#FF6B9D' },
  { pairing: 'Toga x Uraraka', popularity: 6, color: '#9B59B6' },
  { pairing: 'Dabi x Hawks', popularity: 4, color: '#FF8C42' },
];

const communities = [
  { type: 'Cosplayers', members: '2.1M', icon: Users, color: 'bg-[#FFD229]' },
  { type: 'Fan Artists', members: '1.8M', icon: Sparkles, color: 'bg-[#E04141]' },
  { type: 'Meta Analysts', members: '890K', icon: MessageCircle, color: 'bg-[#4A90E2]' },
  { type: 'Meme Makers', members: '1.5M', icon: Heart, color: 'bg-[#9B59B6]' },
];

export function ShippingSection() {
  return (
    <div className="py-20 px-4 bg-gradient-to-b from-[#1B1F3B] to-[#2A2F52]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E04141] px-8 py-3 border-4 border-black transform -rotate-1 mb-4">
            <h2 className="text-white">Ships & Sub-Communities</h2>
          </div>
          <p className="text-xl text-white/80 mt-6">
            The diverse landscape of fandom relationships and specialized groups
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Shipping Bubbles */}
          <div className="comic-panel bg-white p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="hero-badge w-14 h-14">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-[#1B1F3B]">Major Ships</h3>
            </div>

            <p className="text-[#1B1F3B] mb-6">
              Character pairings dominate fan fiction, art, and discussion boards
            </p>

            <div className="relative h-96 flex items-center justify-center flex-wrap gap-4">
              {ships.map((ship, index) => {
                const size = ship.popularity * 3 + 50; // Base size calculation
                return (
                  <div
                    key={index}
                    className="absolute hero-badge flex-col"
                    style={{
                      width: `${size}px`,
                      height: `${size}px`,
                      background: ship.color,
                      top: `${Math.sin(index * 1.1) * 30 + 50}%`,
                      left: `${Math.cos(index * 1.5) * 30 + 50}%`,
                      transform: `translate(-50%, -50%) rotate(${index * 15}deg)`,
                    }}
                  >
                    <div className="text-[#1B1F3B] text-center px-2" style={{ fontSize: `${size / 8}px` }}>
                      {ship.pairing}
                    </div>
                    <div className="text-[#1B1F3B] mt-1" style={{ fontSize: `${size / 6}px` }}>
                      {ship.popularity}%
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {ships.slice(0, 4).map((ship, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 p-3 border-3 border-[#1B1F3B]"
                  style={{ background: ship.color }}
                >
                  <Heart className="w-5 h-5 text-[#1B1F3B]" />
                  <div>
                    <div className="text-[#1B1F3B] text-sm">{ship.pairing}</div>
                    <div className="text-[#1B1F3B] text-xs">{ship.popularity}% popularity</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sub-Communities Network */}
          <div className="comic-panel bg-white p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="hero-badge w-14 h-14">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-[#1B1F3B]">Sub-Communities</h3>
            </div>

            <p className="text-[#1B1F3B] mb-6">
              Specialized groups within the broader MHA fandom ecosystem
            </p>

            {/* Network Visualization */}
            <div className="relative h-64 mb-8">
              {/* Center Hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hero-badge w-24 h-24 bg-[#1B1F3B] text-[#FFD229] z-10">
                <div className="text-center">
                  <div className="text-xs">MHA</div>
                  <div className="text-xs">FANDOM</div>
                </div>
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0 }}>
                <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#1B1F3B" strokeWidth="3" />
                <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#1B1F3B" strokeWidth="3" />
                <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#1B1F3B" strokeWidth="3" />
                <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#1B1F3B" strokeWidth="3" />
              </svg>

              {/* Community Nodes */}
              {communities.map((community, index) => {
                const positions = [
                  { top: '10%', left: '10%' },
                  { top: '10%', right: '10%' },
                  { bottom: '10%', left: '10%' },
                  { bottom: '10%', right: '10%' },
                ];
                const position = positions[index];
                const Icon = community.icon;

                return (
                  <div
                    key={index}
                    className={`absolute ${community.color} hero-badge w-20 h-20 flex-col`}
                    style={position}
                  >
                    <Icon className="w-6 h-6 text-[#1B1F3B]" />
                    <div className="text-[#1B1F3B] text-xs text-center mt-1">{community.type}</div>
                  </div>
                );
              })}
            </div>

            {/* Community Stats */}
            <div className="space-y-3">
              {communities.map((community, index) => {
                const Icon = community.icon;
                return (
                  <div
                    key={index}
                    className={`${community.color} p-4 border-3 border-[#1B1F3B] flex items-center gap-4`}
                  >
                    <Icon className="w-8 h-8 text-[#1B1F3B]" />
                    <div className="flex-1">
                      <div className="text-[#1B1F3B]">{community.type}</div>
                    </div>
                    <div className="text-[#1B1F3B] text-xl">{community.members}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}