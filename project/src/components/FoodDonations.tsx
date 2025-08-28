import React, { useState } from 'react';
import { Plus, Filter, MapPin, Clock, Star, Camera } from 'lucide-react';

const FoodDonations: React.FC = () => {
  const [view, setView] = useState<'list' | 'add'>('list');

  const donations = [
    {
      id: 1,
      title: 'Fresh Mixed Vegetables',
      category: 'Vegetarian',
      type: 'Fresh Produce',
      quantity: '25kg',
      bestBefore: '6 hours',
      donor: 'Green Valley Market',
      rating: 4.8,
      distance: '0.8 km',
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Organic', 'Local'],
      urgency: 'medium'
    },
    {
      id: 2,
      title: 'Fresh Bread & Pastries',
      category: 'Vegetarian',
      type: 'Baked Goods',
      quantity: '15kg',
      bestBefore: '3 hours',
      donor: 'Sunrise Bakery',
      rating: 4.9,
      distance: '1.2 km',
      image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Fresh', 'Artisan'],
      urgency: 'high'
    },
    {
      id: 3,
      title: 'Cooked Meals - Indian Cuisine',
      category: 'Mixed',
      type: 'Prepared Food',
      quantity: '30 portions',
      bestBefore: '2 hours',
      donor: 'Spice Garden Restaurant',
      rating: 4.7,
      distance: '2.1 km',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      tags: ['Hot Meals', 'Spicy'],
      urgency: 'high'
    }
  ];

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const AddDonationForm = () => (
    <div className="max-w-2xl">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">Add Food Donation</h2>
        
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
                Food Title *
              </label>
              <input
                type="text"
                id="title"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="e.g., Fresh vegetables, Cooked meals"
              />
            </div>
            
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                id="category"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option>Vegetarian</option>
                <option>Non-Vegetarian</option>
                <option>Mixed</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                Food Type *
              </label>
              <select
                id="type"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option>Fresh Produce</option>
                <option>Packaged Food</option>
                <option>Prepared Food</option>
                <option>Baked Goods</option>
                <option>Dairy Products</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
                Quantity *
              </label>
              <input
                type="text"
                id="quantity"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="e.g., 25kg, 50 portions"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="bestBefore" className="block text-sm font-medium text-gray-700 mb-2">
                Best Before Date/Time *
              </label>
              <input
                type="datetime-local"
                id="bestBefore"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="pickupWindow" className="block text-sm font-medium text-gray-700 mb-2">
                Pickup Window *
              </label>
              <select
                id="pickupWindow"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                <option>Next 2 hours</option>
                <option>Next 4 hours</option>
                <option>Next 6 hours</option>
                <option>Next 12 hours</option>
                <option>Next 24 hours</option>
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
              Pickup Address *
            </label>
            <input
              type="text"
              id="address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Start typing address..."
            />
          </div>

          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Notes
            </label>
            <textarea
              id="notes"
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Special instructions, storage requirements, etc."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Food Photos
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-green-500 transition-colors">
              <Camera className="mx-auto text-gray-400 mb-4" size={48} />
              <p className="text-gray-600 mb-2">Drop photos here or click to browse</p>
              <p className="text-sm text-gray-500">PNG, JPG up to 5MB each</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex-1"
            >
              Post Donation
            </button>
            <button
              type="button"
              onClick={() => setView('list')}
              className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  const DonationsList = () => (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Available Donations</h1>
          <p className="text-gray-600 mt-1">Nearby food donations ready for pickup</p>
        </div>
        
        <div className="flex gap-3">
          <button className="bg-white hover:bg-gray-50 text-gray-700 border border-gray-300 px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2">
            <Filter size={20} />
            <span>Filter</span>
          </button>
          <button
            onClick={() => setView('add')}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center space-x-2"
          >
            <Plus size={20} />
            <span>Add Donation</span>
          </button>
        </div>
      </div>

      {/* Donations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {donations.map((donation) => (
          <div key={donation.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative">
              <img 
                src={donation.image} 
                alt={donation.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getUrgencyColor(donation.urgency)}`}>
                  {donation.bestBefore}
                </span>
              </div>
              <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center space-x-1">
                <MapPin size={12} className="text-gray-500" />
                <span className="text-xs text-gray-700">{donation.distance}</span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-gray-900">{donation.title}</h3>
                  <p className="text-sm text-gray-600">{donation.type}</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="text-yellow-400 fill-current" size={16} />
                  <span className="text-sm font-medium text-gray-700">{donation.rating}</span>
                  <span className="text-sm text-gray-500">• {donation.donor}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <span className="text-lg font-semibold text-gray-900">{donation.quantity}</span>
                <div className="flex items-center space-x-1 text-orange-600">
                  <Clock size={14} />
                  <span className="text-sm">{donation.bestBefore} left</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {donation.tags.map((tag, index) => (
                  <span key={index} className="bg-green-50 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition-colors">
                Claim Donation
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-4 lg:p-8">
      {view === 'list' ? <DonationsList /> : <AddDonationForm />}
    </div>
  );
};

export default FoodDonations;