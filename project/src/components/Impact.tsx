import React from 'react';
import { TrendingUp, Award, Download, Users, Leaf, Target } from 'lucide-react';

const Impact: React.FC = () => {
  const impactStats = [
    { label: 'Total Food Saved', value: '12,847', unit: 'kg', change: '+23%', icon: Leaf, color: 'green' },
    { label: 'Meals Provided', value: '6,423', unit: 'meals', change: '+18%', icon: Users, color: 'blue' },
    { label: 'CO₂ Emissions Reduced', value: '25.6', unit: 'tons', change: '+31%', icon: Target, color: 'purple' },
    { label: 'Partner Organizations', value: '47', unit: 'orgs', change: '+12%', icon: Award, color: 'orange' }
  ];

  const leaderboard = [
    { rank: 1, name: 'Hope Kitchen NGO', impact: '2,450 kg', badge: '🏆' },
    { rank: 2, name: 'Community Care Center', impact: '1,890 kg', badge: '🥈' },
    { rank: 3, name: 'Green Valley NGO', impact: '1,634 kg', badge: '🥉' },
    { rank: 4, name: 'City Food Bank', impact: '1,423 kg', badge: '' },
    { rank: 5, name: 'Helping Hands Foundation', impact: '1,256 kg', badge: '' }
  ];

  const badges = [
    { name: 'First Pickup', description: 'Completed your first pickup', earned: true, color: 'green' },
    { name: 'Weekly Hero', description: 'Saved 100kg in a week', earned: true, color: 'blue' },
    { name: 'Community Champion', description: 'Helped 500 people', earned: true, color: 'purple' },
    { name: 'Eco Warrior', description: 'Prevented 10 tons of CO₂', earned: false, color: 'orange' },
    { name: 'Master Saver', description: 'Saved 1000kg of food', earned: false, color: 'red' }
  ];

  return (
    <div className="p-4 lg:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Impact & Reports</h1>
          <p className="text-gray-600 mt-1">Track your environmental and social impact</p>
        </div>
        
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
          <Download size={20} />
          <span>Export Report</span>
        </button>
      </div>

      {/* Impact Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {impactStats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                  <Icon className={`text-${stat.color}-600`} size={24} />
                </div>
                <span className={`text-sm font-medium text-${stat.color}-600 bg-${stat.color}-50 px-2 py-1 rounded-full`}>
                  {stat.change}
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-gray-900">
                  {stat.value}
                  <span className="text-sm font-normal text-gray-500 ml-1">{stat.unit}</span>
                </p>
                <p className="text-sm text-gray-600">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
        {/* Weekly Leaderboard */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">Weekly Leaderboard</h2>
            <p className="text-gray-600 mt-1">Top performers this week</p>
          </div>
          
          <div className="divide-y divide-gray-100">
            {leaderboard.map((entry) => (
              <div key={entry.rank} className="p-6 flex items-center space-x-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                    entry.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                    entry.rank === 2 ? 'bg-gray-100 text-gray-700' :
                    entry.rank === 3 ? 'bg-orange-100 text-orange-800' :
                    'bg-gray-50 text-gray-600'
                  }`}>
                    {entry.badge || entry.rank}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">{entry.name}</h3>
                    <p className="text-sm text-gray-600">Food saved: {entry.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Badges */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">Achievement Badges</h2>
            <p className="text-gray-600 mt-1">Unlock badges as you make an impact</p>
          </div>
          
          <div className="p-6 space-y-4">
            {badges.map((badge, index) => (
              <div key={index} className={`flex items-center space-x-4 p-4 rounded-lg border-2 transition-all ${
                badge.earned 
                  ? `border-${badge.color}-200 bg-${badge.color}-50` 
                  : 'border-gray-200 bg-gray-50 opacity-60'
              }`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  badge.earned 
                    ? `bg-${badge.color}-600 text-white`
                    : 'bg-gray-300 text-gray-500'
                }`}>
                  <Award size={24} />
                </div>
                <div className="flex-1">
                  <h3 className={`font-medium ${badge.earned ? 'text-gray-900' : 'text-gray-500'}`}>
                    {badge.name}
                  </h3>
                  <p className={`text-sm ${badge.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                    {badge.description}
                  </p>
                </div>
                {badge.earned && (
                  <div className="text-green-600">
                    <Award size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Monthly Trend Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Monthly Impact Trend</h2>
            <p className="text-gray-600 mt-1">Your impact over the last 6 months</p>
          </div>
          <TrendingUp className="text-green-600" size={24} />
        </div>
        
        {/* Chart Placeholder */}
        <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <TrendingUp className="text-green-600 mx-auto mb-4" size={48} />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Impact Trending Upward!</h3>
            <p className="text-gray-600">Your monthly food savings show consistent growth</p>
          </div>
        </div>
      </div>

      {/* CSR Report */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
        <div className="text-center max-w-2xl mx-auto">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Download className="text-green-600" size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Generate CSR Report</h3>
          <p className="text-gray-600 mb-6">
            Create comprehensive sustainability reports for your organization with detailed impact metrics and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Download PDF Report
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-medium transition-colors">
              Export Data (CSV)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;