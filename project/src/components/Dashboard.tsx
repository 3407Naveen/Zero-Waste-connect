import React from 'react';
import { Plus, Search, TrendingUp, Users, Leaf, Clock, MapPin, Calendar } from 'lucide-react';

const Dashboard: React.FC = () => {
  const impactMetrics = [
    { label: 'Food Saved', value: '2,847', unit: 'kg', icon: Leaf, color: 'green', change: '+12%' },
    { label: 'Meals Served', value: '1,423', unit: 'meals', icon: Users, color: 'blue', change: '+8%' },
    { label: 'CO₂ Reduced', value: '5.2', unit: 'tons', icon: TrendingUp, color: 'emerald', change: '+15%' },
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'donation',
      title: 'Fresh Vegetables - 25kg',
      donor: 'Green Market',
      time: '2 hours ago',
      status: 'available',
      location: '0.8 km away'
    },
    {
      id: 2,
      type: 'claim',
      title: 'Bread & Pastries - 15kg',
      donor: 'City Bakery',
      time: '4 hours ago',
      status: 'claimed',
      location: '1.2 km away'
    },
    {
      id: 3,
      type: 'pickup',
      title: 'Dairy Products - 30kg',
      donor: 'Fresh Mart',
      time: '1 day ago',
      status: 'completed',
      location: '2.1 km away'
    }
  ];

  const upcomingPickups = [
    {
      id: 1,
      donor: 'Sunny Restaurant',
      time: '2:30 PM Today',
      items: 'Cooked meals - 20kg',
      address: '123 Main St'
    },
    {
      id: 2,
      donor: 'Garden Fresh Store',
      time: '10:00 AM Tomorrow',
      items: 'Mixed vegetables - 35kg',
      address: '456 Oak Avenue'
    }
  ];

  return (
    <div className="p-4 lg:p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-1">Welcome back! Here's your impact today.</p>
        </div>
        
        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2 shadow-lg">
            <Plus size={20} />
            <span>Add Food</span>
          </button>
          <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
            <Search size={20} />
            <span>Find Nearby</span>
          </button>
        </div>
      </div>

      {/* Impact Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {impactMetrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-lg bg-${metric.color}-100`}>
                  <Icon className={`text-${metric.color}-600`} size={24} />
                </div>
                <span className={`text-sm font-medium text-${metric.color}-600 bg-${metric.color}-50 px-2 py-1 rounded-full`}>
                  {metric.change}
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-2xl font-bold text-gray-900">
                  {metric.value}
                  <span className="text-sm font-normal text-gray-500 ml-1">{metric.unit}</span>
                </p>
                <p className="text-sm text-gray-600">{metric.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="xl:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Today's Activity</h2>
              <p className="text-gray-600 mt-1">Recent donations and claims in your area</p>
            </div>
            <div className="divide-y divide-gray-100">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-medium text-gray-900">{activity.title}</h3>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          activity.status === 'available' ? 'bg-green-100 text-green-800' :
                          activity.status === 'claimed' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {activity.status}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{activity.donor}</span>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{activity.time}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{activity.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-gray-100">
              <button className="text-green-600 hover:text-green-700 font-medium text-sm">
                View all activity →
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Pickups */}
        <div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Upcoming Pickups</h2>
              <p className="text-gray-600 mt-1">Your scheduled collections</p>
            </div>
            <div className="divide-y divide-gray-100">
              {upcomingPickups.map((pickup) => (
                <div key={pickup.id} className="p-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium text-gray-900">{pickup.donor}</h3>
                      <div className="flex items-center space-x-1 text-green-600">
                        <Calendar size={14} />
                        <span className="text-sm font-medium">{pickup.time}</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">{pickup.items}</p>
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <MapPin size={14} />
                      <span>{pickup.address}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-gray-100">
              <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium transition-colors">
                View All Pickups
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Empty State for New Users */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
        <div className="text-center max-w-2xl mx-auto">
          <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <Leaf className="text-green-600" size={32} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Ready to make an impact?</h3>
          <p className="text-gray-600 mb-6">
            Connect with local donors and help reduce food waste in your community. Every donation counts!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Start Browsing Donations
            </button>
            <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-6 py-3 rounded-lg font-medium transition-colors">
              Learn How It Works
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;