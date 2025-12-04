import { ImageWithFallback } from './figma/ImageWithFallback';
import { Palette, Camera, Hash, Award } from 'lucide-react';

const topCharacters = [
  { name: 'Deku (Izuku)', percentage: 22, rank: 1 },
  { name: 'Bakugou', percentage: 18, rank: 2 },
  { name: 'Todoroki', percentage: 16, rank: 3 },
  { name: 'Uraraka', percentage: 12, rank: 4 },
  { name: 'Toga', percentage: 10, rank: 5 },
  { name: 'Dabi', percentage: 9, rank: 6 },
  { name: 'Hawks', percentage: 6, rank: 7 },
  { name: 'Shigaraki', percentage: 4, rank: 8 },
  { name: 'Momo', percentage: 2, rank: 9 },
  { name: 'Aizawa', percentage: 1, rank: 10 },
];

const hashtags = [
  { tag: '#mha', posts: '8.2M' },
  { tag: '#bnha', posts: '6.5M' },
  { tag: '#myheroacademia', posts: '4.1M' },
  { tag: '#cosplay', posts: '3.8M' },
  { tag: '#deku', posts: '2.9M' },
  { tag: '#bakugou', posts: '2.4M' },
  { tag: '#todoroki', posts: '1.9M' },
  { tag: '#mhacosplay', posts: '1.5M' },
];

export function CommunitySection() {
  return (
    <div className="py-20 px-4 bg-[#2A2F52]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FFD229] px-8 py-3 border-4 border-black transform rotate-1 mb-4">
            <h2 className="text-[#1B1F3B]">Community Participation</h2>
          </div>
          <p className="text-xl text-white/80 mt-6">
            How fans express their passion through creativity and engagement
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Cosplay Trends */}
          <div className="comic-panel bg-white p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="hero-badge w-14 h-14">
                <Camera className="w-7 h-7" />
              </div>
              <h3 className="text-[#1B1F3B]">Cosplay Trends</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1735720520926-f3425679b103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NwbGF5JTIwY29zdHVtZXxlbnwxfHx8fDE3NjQ4MDA5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cosplay 1"
                className="w-full h-32 object-cover border-4 border-[#1B1F3B]"
              />
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1722272550352-582aa5586c03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZW50aW9uJTIwY29zcGxheSUyMGdyb3VwfGVufDF8fHx8MTc2NDgwMTAwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cosplay 2"
                className="w-full h-32 object-cover border-4 border-[#1B1F3B]"
              />
            </div>

            <div className="bg-[#FFD229] p-4 border-3 border-[#1B1F3B]">
              <div className="text-[#1B1F3B] mb-2">
                <strong>42% of fans</strong> have cosplayed at least once
              </div>
              <div className="text-[#1B1F3B]">
                <strong>conventions</strong> see 500+ MHA cosplayers annually
              </div>
            </div>
          </div>

          {/* Fan Art Styles */}
          <div className="comic-panel bg-white p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="hero-badge w-14 h-14">
                <Palette className="w-7 h-7" />
              </div>
              <h3 className="text-[#1B1F3B]">Fan Art Styles</h3>
            </div>

            <div className="space-y-3 mb-6">
              {[
                { style: 'Digital Illustration', percentage: 45 },
                { style: 'Traditional Art', percentage: 25 },
                { style: '3D Renders', percentage: 15 },
                { style: 'Pixel Art', percentage: 10 },
                { style: 'Animations', percentage: 5 },
              ].map((item, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-[#1B1F3B]">{item.style}</span>
                    <span className="text-[#1B1F3B]">{item.percentage}%</span>
                  </div>
                  <div className="h-4 bg-[#1B1F3B] border-2 border-black">
                    <div
                      className="h-full bg-[#E04141] border-r-2 border-black"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <ImageWithFallback
              src="https://images.unsplash.com/photo-1744686909443-eb72a54de998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwZHJhd2luZ3xlbnwxfHx8fDE3NjQ4MDEwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Digital Art"
              className="w-full h-32 object-cover border-4 border-[#1B1F3B]"
            />
          </div>
        </div>

        {/* Top 10 Characters */}
        <div className="comic-panel bg-white p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="hero-badge w-14 h-14">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-[#1B1F3B]">Top 10 Most Cosplayed Characters</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topCharacters.map((character) => (
              <div
                key={character.rank}
                className="flex items-center gap-4 bg-[#FFD229] p-4 border-3 border-[#1B1F3B]"
              >
                <div className="hero-badge w-12 h-12 flex-shrink-0">
                  <span className="text-2xl">{character.rank}</span>
                </div>
                <div className="flex-1">
                  <div className="text-[#1B1F3B]">{character.name}</div>
                  <div className="h-3 bg-[#1B1F3B] border-2 border-black mt-1">
                    <div
                      className="h-full bg-[#E04141]"
                      style={{ width: `${character.percentage * 4}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-[#1B1F3B] text-xl">{character.percentage}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Hashtags */}
        <div className="comic-panel bg-white p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="hero-badge w-14 h-14">
              <Hash className="w-7 h-7" />
            </div>
            <h3 className="text-[#1B1F3B]">Popular Hashtags</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {hashtags.map((item, index) => (
              <div
                key={index}
                className="bg-[#E04141] text-white px-6 py-3 border-3 border-black"
              >
                <div className="text-xl">{item.tag}</div>
                <div className="text-sm opacity-90">{item.posts} posts</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}