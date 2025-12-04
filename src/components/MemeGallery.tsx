import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Laugh, TrendingUp, Share2, Heart } from 'lucide-react';

const memes = [
  {
    title: 'Plus Ultra Motivation',
    tags: ['motivation', 'workout', 'daily'],
    image: 'https://images.unsplash.com/photo-1722803921446-70be3842871e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGNvbnZlbnRpb24lMjBjcm93ZHxlbnwxfHx8fDE3NjQ4MDA5OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    shares: '2.1M',
  },
  {
    title: 'Deku Crying Reaction',
    tags: ['reaction', 'emotional', 'relatable'],
    image: 'https://images.unsplash.com/photo-1764083680353-0de3e959a375?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGZhbiUyMGFydHxlbnwxfHx8fDE3NjQ4MDA5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    shares: '1.8M',
  },
  {
    title: 'Bakugou Anger Issues',
    tags: ['humor', 'character', 'mood'],
    image: 'https://images.unsplash.com/photo-1735720520926-f3425679b103?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NwbGF5JTIwY29zdHVtZXxlbnwxfHx8fDE3NjQ4MDA5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    shares: '1.5M',
  },
  {
    title: 'All Might Buff/Deflated',
    tags: ['transformation', 'before-after', 'comedy'],
    image: 'https://images.unsplash.com/photo-1722272550352-582aa5586c03?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb252ZW50aW9uJTIwY29zcGxheSUyMGdyb3VwfGVufDF8fHx8MTc2NDgwMTAwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    shares: '1.3M',
  },
  {
    title: 'Todoroki Family Trauma',
    tags: ['dark-humor', 'relatable', 'family'],
    image: 'https://images.unsplash.com/photo-1744686909443-eb72a54de998?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYXJ0JTIwZHJhd2luZ3xlbnwxfHx8fDE3NjQ4MDEwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    shares: '980K',
  },
  {
    title: 'Mineta Grapejuice Ratio',
    tags: ['controversial', 'character', 'discourse'],
    image: 'https://images.unsplash.com/photo-1552998841-3a61a27d4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21pYyUyMGJvb2slMjBoZXJvJTIwc3BsYXNofGVufDF8fHx8MTc2NDgwMDk5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    shares: '750K',
  },
];

const trendingFormats = [
  { format: "It's Fine All Might", trend: '+420%', color: 'bg-[#FFD229]' },
  { format: 'Deku vs Todoroki Debate', trend: '+315%', color: 'bg-[#E04141]' },
  { format: 'Bakugou Anger Meter', trend: '+280%', color: 'bg-[#4A90E2]' },
];

export function MemeGallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="py-20 px-4 bg-gradient-to-b from-[#1B1F3B] to-[#2A2F52]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E04141] px-8 py-3 border-4 border-black transform -rotate-1 mb-4">
            <h2 className="text-white">Meme & Viral Trends</h2>
          </div>
          <p className="text-xl text-white/80 mt-6">
            The humor and creativity that keeps the fandom alive and thriving
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Laugh, label: 'Meme Formats', value: '500+', color: 'bg-[#FFD229]' },
            { icon: TrendingUp, label: 'Viral Posts', value: '50M+', color: 'bg-[#E04141]' },
            { icon: Share2, label: 'Total Shares', value: '125M+', color: 'bg-[#4A90E2]' },
            { icon: Heart, label: 'Avg. Likes', value: '45K', color: 'bg-[#9B59B6]' },
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className={`comic-panel ${stat.color} p-6 text-center`}>
                <Icon className="w-8 h-8 text-[#1B1F3B] mx-auto mb-2" />
                <div className="text-2xl text-[#1B1F3B] mb-1">{stat.value}</div>
                <div className="text-[#1B1F3B] text-sm uppercase tracking-wide">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Meme Mosaic Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {memes.map((meme, index) => (
            <div
              key={index}
              className="comic-panel bg-white overflow-hidden transform hover:scale-105 hover:rotate-1 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={meme.image}
                  alt={meme.title}
                  className="w-full h-full object-cover"
                />
                {hoveredIndex === index && (
                  <div className="absolute inset-0 bg-[#1B1F3B]/90 flex items-center justify-center p-6 transition-opacity duration-200">
                    <div className="text-center">
                      <h3 className="text-white mb-4">{meme.title}</h3>
                      <div className="flex items-center justify-center gap-2 text-[#FFD229]">
                        <Share2 className="w-5 h-5" />
                        <span>{meme.shares} shares</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="text-[#1B1F3B] mb-3">{meme.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {meme.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-[#FFD229] text-[#1B1F3B] px-3 py-1 text-sm border-2 border-[#1B1F3B]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trending Meme Formats */}
        <div className="mt-12 comic-panel bg-white p-8">
          <h3 className="text-[#1B1F3B] mb-6 text-center">Top Trending Formats (December 2025)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trendingFormats.map((item, index) => (
              <div key={index} className={`${item.color} p-6 border-3 border-[#1B1F3B] text-center`}>
                <div className="text-[#1B1F3B] text-xl mb-2">{item.format}</div>
                <div className="flex items-center justify-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#1B1F3B]" />
                  <span className="text-[#1B1F3B] text-2xl">{item.trend}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="speech-bubble inline-block max-w-2xl">
            <p className="text-[#1B1F3B] text-lg">
              The My Hero Academia fandom continues to grow and evolve, creating new trends, 
              deepening connections, and inspiring millions worldwide to go <strong>Plus Ultra!</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
