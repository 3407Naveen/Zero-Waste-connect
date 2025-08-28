import React from 'react';
import { MapPin, Navigation, Clock, Route } from 'lucide-react';

const MapPickup: React.FC = () => {
  const pickupRoutes = [
    {
      id: 1,
      donor: 'Green Valley Market',
      address: '123 Main St',
      eta: '15 min',
      items: 'Mixed vegetables - 25kg',
      status: 'next'
    },
    {
      id: 2,
      donor: 'Sunrise Bakery', 
      address: '456 Oak Ave',
      eta: '28 min',
      items: 'Bread & pastries - 15kg',
      status: 'scheduled'
    },
    {
      id: 3,
      donor: 'Spice Garden Restaurant',
      address: '789 Pine Rd',
      eta: '35 min', 
      items: 'Cooked meals - 30 portions',
      status: 'scheduled'
    }
  ];

  return (
    <div className="p-4 lg:p-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Map & Pickup Routes</h1>
          <p className="text-gray-600 mt-1">Optimized routes for your scheduled pickups</p>
        </div>
        
        <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2">
          <Navigation size={20} />
          <span>Start Navigation</span>
        </button>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Map Area */}
        <div className="xl:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 h-96 lg:h-[600px] relative overflow-hidden">
            {/* Placeholder Map */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="text-green-600 mx-auto mb-4" size={64} />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Map</h3>
                <p className="text-gray-600">Real-time pickup locations and optimized routes</p>
              </div>
            </div>
            
            {/* Map Controls */}
            <div className="absolute top-4 right-4 space-y-2">
              <button className="bg-white shadow-md p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <MapPin size={20} className="text-gray-600" />
              </button>
              <button className="bg-white shadow-md p-2 rounded-lg hover:bg-gray-50 transition-colors">
                <Route size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {/* Route Details */}
        <div>
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h2 className="text-xl font-semibold text-gray-900">Today's Route</h2>
              <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Route size={14} />
                  <span>12.5 km total</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock size={14} />
                  <span>~78 min</span>
                </div>
              </div>
            </div>

            <div className="divide-y divide-gray-100">
              {pickupRoutes.map((route, index) => (
                <div key={route.id} className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                        route.status === 'next' 
                          ? 'bg-green-600 text-white' 
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {index + 1}
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-medium text-gray-900 truncate">{route.donor}</h3>
                        <span className="text-sm text-green-600 font-medium">{route.eta}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{route.address}</p>
                      <p className="text-sm text-gray-700 bg-gray-50 rounded px-2 py-1">
                        {route.items}
                      </p>
                    </div>
                  </div>
                  
                  {route.status === 'next' && (
                    <div className="mt-4 flex space-x-2">
                      <button className="flex-1 bg-green-600 hover:bg-green-700 text-white py-2 px-3 rounded-lg text-sm font-medium transition-colors">
                        Start Pickup
                      </button>
                      <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium transition-colors">
                        Call
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="p-6 border-t border-gray-100">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2">
                <Navigation size={20} />
                <span>Optimize Route</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
          <div className="text-2xl font-bold text-green-600 mb-1">3</div>
          <div className="text-sm text-gray-600">Scheduled Pickups</div>
        </div>
        <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
          <div className="text-2xl font-bold text-blue-600 mb-1">12.5</div>
          <div className="text-sm text-gray-600">Total Distance (km)</div>
        </div>
        <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
          <div className="text-2xl font-bold text-orange-600 mb-1">78</div>
          <div className="text-sm text-gray-600">Est. Time (min)</div>
        </div>
        <div className="bg-white rounded-lg p-6 text-center border border-gray-100">
          <div className="text-2xl font-bold text-purple-600 mb-1">70</div>
          <div className="text-sm text-gray-600">Total Weight (kg)</div>
        </div>
      </div>
    </div>
  );
};

export default MapPickup;