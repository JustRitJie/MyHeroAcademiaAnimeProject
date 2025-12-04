import { Users, Globe, Smartphone } from 'lucide-react';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ageData = [
  { name: '13-17', value: 28, color: '#FFD229' },
  { name: '18-24', value: 42, color: '#E04141' },
  { name: '25-34', value: 22, color: '#4A90E2' },
  { name: '35+', value: 8, color: '#9B59B6' },
];

const regionData = [
  { region: 'North America', popularity: 85 },
  { region: 'East Asia', popularity: 95 },
  { region: 'Europe', popularity: 72 },
  { region: 'South America', popularity: 68 },
  { region: 'Southeast Asia', popularity: 88 },
  { region: 'Oceania', popularity: 65 },
];

const platformData = [
  { platform: 'TikTok', users: 4.2 },
  { platform: 'Twitter/X', users: 3.8 },
  { platform: 'Reddit', users: 2.1 },
  { platform: 'Instagram', users: 3.5 },
  { platform: 'YouTube', users: 5.1 },
];

export function DemographicsSection() {
  return (
    <div className="py-20 px-4 bg-gradient-to-b from-[#1B1F3B] to-[#2A2F52] halftone-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-[#E04141] px-8 py-3 border-4 border-black transform -rotate-1 mb-4">
            <h2 className="text-white">Fandom Demographics</h2>
          </div>
          <p className="text-xl text-white/80 mt-6">
            Understanding who makes up the My Hero Academia community
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Age Breakdown Card */}
          <div className="comic-panel bg-white p-6 transform hover:-rotate-1 transition-transform">
            <div className="flex items-center gap-3 mb-4">
              <div className="hero-badge w-12 h-12">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-[#1B1F3B]">Age Groups</h3>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={ageData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={70}
                  fill="#8884d8"
                  dataKey="value"
                  stroke="#000"
                  strokeWidth={2}
                >
                  {ageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <p className="text-[#1B1F3B] text-center mt-2">
              Majority aged 18-24 (42%)
            </p>
          </div>

          {/* Global Reach Card */}
          <div className="comic-panel bg-white p-6 transform hover:rotate-1 transition-transform">
            <div className="flex items-center gap-3 mb-4">
              <div className="hero-badge w-12 h-12">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-[#1B1F3B]">Global Reach</h3>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={regionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="region" angle={-45} textAnchor="end" height={80} tick={{ fontSize: 10 }} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="popularity" fill="#E04141" stroke="#000" strokeWidth={2} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-[#1B1F3B] text-center mt-2">
              Peak popularity in East Asia (95)
            </p>
          </div>

          {/* Platform Stats Card */}
          <div className="comic-panel bg-white p-6 transform hover:-rotate-1 transition-transform md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="hero-badge w-12 h-12">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-[#1B1F3B]">Top Platforms</h3>
            </div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={platformData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" label={{ value: 'Million Users', position: 'bottom' }} />
                <YAxis dataKey="platform" type="category" width={80} />
                <Tooltip />
                <Bar dataKey="users" fill="#FFD229" stroke="#000" strokeWidth={2} />
              </BarChart>
            </ResponsiveContainer>
            <p className="text-[#1B1F3B] text-center mt-2">
              YouTube leads with 5.1M users
            </p>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Total Fans', value: '15M+', color: 'bg-[#FFD229]' },
            { label: 'Countries', value: '120+', color: 'bg-[#E04141]' },
            { label: 'Daily Posts', value: '500K+', color: 'bg-[#4A90E2]' },
            { label: 'Conventions', value: '200+', color: 'bg-[#9B59B6]' },
          ].map((stat, index) => (
            <div key={index} className={`${stat.color} comic-panel p-6 text-center`}>
              <div className="text-4xl text-[#1B1F3B] mb-2">{stat.value}</div>
              <div className="text-[#1B1F3B] uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}