import { Shield, Sparkles, Users, Heart, Award, ShoppingBag } from 'lucide-react';

const themes = [
  {
    icon: Shield,
    title: 'Heroism & Justice',
    description: 'Fans connect with themes of courage, sacrifice, and standing up for others',
    color: 'bg-[#E04141]',
  },
  {
    icon: Sparkles,
    title: 'Identity & Growth',
    description: 'Coming-of-age narratives resonate with young audiences navigating self-discovery',
    color: 'bg-[#4A90E2]',
  },
  {
    icon: Users,
    title: 'Inclusivity',
    description: 'Diverse characters and backgrounds create representation for global audiences',
    color: 'bg-[#9B59B6]',
  },
  {
    icon: Heart,
    title: 'Disability Metaphor',
    description: 'Quirk-less characters reflect real experiences of feeling "different" or excluded',
    color: 'bg-[#FFD229]',
  },
];

const crossMediaImpact = [
  { category: 'Merchandise Sales', value: '$1.2B', icon: ShoppingBag },
  { category: 'Convention Panels', value: '500+', icon: Users },
  { category: 'Brand Collaborations', value: '120+', icon: Award },
  { category: 'Fan Events', value: '300+', icon: Sparkles },
];

export function CultureSection() {
  return (
    <div className="py-20 px-4 bg-[#2A2F52] halftone-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#FFD229] px-8 py-3 border-4 border-black transform rotate-1 mb-4">
            <h2 className="text-[#1B1F3B]">Cultural Impact</h2>
          </div>
          <p className="text-xl text-white/80 mt-6">
            How My Hero Academia shapes and reflects contemporary culture
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Themes Column */}
          <div>
            <div className="comic-panel bg-white p-8 mb-6">
              <h3 className="text-[#1B1F3B] mb-6">Key Themes Amplified by Fandom</h3>
              <p className="text-[#1B1F3B] mb-6">
                The series tackles universal themes that resonate across cultures and demographics
              </p>

              <div className="space-y-4">
                {themes.map((theme, index) => {
                  const Icon = theme.icon;
                  return (
                    <div
                      key={index}
                      className={`${theme.color} p-5 border-3 border-[#1B1F3B]`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="hero-badge w-12 h-12 flex-shrink-0">
                          <Icon className="w-6 h-6 text-[#1B1F3B]" />
                        </div>
                        <div>
                          <h3 className="text-[#1B1F3B] mb-2">{theme.title}</h3>
                          <p className="text-[#1B1F3B] text-sm">{theme.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Impact Stats */}
            <div className="comic-panel bg-white p-6">
              <h3 className="text-[#1B1F3B] mb-4">Community Engagement</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-[#FFD229] p-4 border-3 border-[#1B1F3B] text-center">
                  <div className="text-3xl text-[#1B1F3B]">78%</div>
                  <div className="text-[#1B1F3B] text-sm">Feel Represented</div>
                </div>
                <div className="bg-[#E04141] p-4 border-3 border-[#1B1F3B] text-center">
                  <div className="text-3xl text-white">92%</div>
                  <div className="text-white text-sm">Would Recommend</div>
                </div>
                <div className="bg-[#4A90E2] p-4 border-3 border-[#1B1F3B] text-center">
                  <div className="text-3xl text-white">65%</div>
                  <div className="text-white text-sm">Created Fan Content</div>
                </div>
                <div className="bg-[#9B59B6] p-4 border-3 border-[#1B1F3B] text-center">
                  <div className="text-3xl text-white">85%</div>
                  <div className="text-white text-sm">Attend Communities</div>
                </div>
              </div>
            </div>
          </div>

          {/* Cross-Media Influence Column */}
          <div>
            <div className="comic-panel bg-white p-8 mb-6">
              <h3 className="text-[#1B1F3B] mb-6">Cross-Media Influence</h3>
              <p className="text-[#1B1F3B] mb-6">
                MHA's reach extends far beyond anime, impacting multiple industries
              </p>

              <div className="space-y-4 mb-6">
                {crossMediaImpact.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-[#FFD229] border-3 border-[#1B1F3B]"
                    >
                      <div className="hero-badge w-12 h-12">
                        <Icon className="w-6 h-6 text-[#1B1F3B]" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[#1B1F3B]">{item.category}</div>
                      </div>
                      <div className="text-[#1B1F3B] text-2xl">{item.value}</div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-[#E04141] p-6 border-3 border-[#1B1F3B]">
                <h3 className="text-white mb-3">Notable Collaborations</h3>
                <ul className="space-y-2 text-white">
                  <li>• Universal Studios Japan - Theme Park Attraction</li>
                  <li>• Nike - Limited Edition Sneaker Line</li>
                  <li>• Uniqlo - Seasonal Apparel Collections</li>
                  <li>• McDonald's Japan - Promotional Campaigns</li>
                  <li>• Fortnite - Character Crossover Skins</li>
                </ul>
              </div>
            </div>

            {/* Academic Recognition */}
            <div className="comic-panel bg-white p-6">
              <h3 className="text-[#1B1F3B] mb-4">Academic & Media Recognition</h3>
              <div className="space-y-3">
                <div className="bg-[#4A90E2] p-4 border-3 border-[#1B1F3B]">
                  <div className="text-white">
                    Featured in <strong>50+ academic papers</strong> on fandom studies
                  </div>
                </div>
                <div className="bg-[#9B59B6] p-4 border-3 border-[#1B1F3B]">
                  <div className="text-white">
                    Discussed in <strong>200+ podcasts</strong> and video essays
                  </div>
                </div>
                <div className="bg-[#FFD229] p-4 border-3 border-[#1B1F3B]">
                  <div className="text-[#1B1F3B]">
                    <strong>35+ mainstream media</strong> articles on cultural impact
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}