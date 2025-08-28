
import React, { useState } from 'react';
import { Camera, Scan, AlertTriangle, CheckCircle, Clock, Upload, Shield } from 'lucide-react';

const FoodSafety: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'checker' | 'scanner' | 'guide'>('checker');

  const FreshnessChecker = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="text-center">
          <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Camera className="text-blue-600" size={40} />
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Freshness Checker</h3>
          <p className="text-gray-600 mb-6">Upload a photo to get an AI-powered freshness assessment</p>
          
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-blue-500 transition-colors cursor-pointer">
            <Upload className="mx-auto text-gray-400 mb-4" size={48} />
            <p className="text-gray-600 mb-2">Drop your food photo here or click to browse</p>
            <p className="text-sm text-gray-500">Supports JPG, PNG up to 10MB</p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium mt-4 transition-colors">
              Select Photo
            </button>
          </div>
        </div>
      </div>

      {/* Sample Results */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-gray-900">Sample Result: Fresh</h4>
            <CheckCircle className="text-green-600" size={20} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Confidence:</span>
              <span className="text-green-600 font-medium">94%</span>
            </div>
            <p className="text-sm text-gray-600">Food appears fresh and safe for consumption</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-gray-900">Sample Result: Review</h4>
            <AlertTriangle className="text-yellow-600" size={20} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Confidence:</span>
              <span className="text-yellow-600 font-medium">67%</span>
            </div>
            <p className="text-sm text-gray-600">Manual inspection recommended</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-4 border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h4 className="font-medium text-gray-900">Sample Result: Unsafe</h4>
            <AlertTriangle className="text-red-600" size={20} />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Confidence:</span>
              <span className="text-red-600 font-medium">89%</span>
            </div>
            <p className="text-sm text-gray-600">Not recommended for consumption</p>
          </div>
        </div>
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="text-yellow-600 flex-shrink-0 mt-0.5" size={20} />
          <div>
            <h4 className="font-medium text-yellow-800 mb-1">Important Disclaimer</h4>
            <p className="text-sm text-yellow-700">
              AI assessments are for guidance only. Always use your judgment and follow food safety guidelines. 
              When in doubt, don't distribute questionable food items.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const LabelScanner = () => (
    <div className="space-y-6">
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <div className="text-center">
          <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Scan className="text-green-600" size={40} />
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Label Scanner</h3>
          <p className="text-gray-600 mb-6">Scan QR codes and barcodes to auto-detect expiry dates</p>
          
          <div className="bg-gray-900 rounded-lg p-8 relative">
            <div className="border-2 border-green-400 rounded-lg p-8 relative">
              <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-green-400"></div>
              <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-green-400"></div>
              <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-green-400"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-green-400"></div>
              
              <div className="text-center">
                <Scan className="text-green-400 mx-auto mb-4" size={48} />
                <p className="text-green-400">Position barcode or QR code in the frame</p>
              </div>
            </div>
          </div>
          
          <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium mt-4 transition-colors">
            Start Scanner
          </button>
        </div>
      </div>

      {/* Recent Scans */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Recent Scans</h3>
        </div>
        <div className="divide-y divide-gray-100">
          <div className="p-6 flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Organic Bread Loaf</h4>
              <p className="text-sm text-gray-600">Expires: Tomorrow, 3:00 PM</p>
            </div>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-sm font-medium rounded-full">
              18h left
            </span>
          </div>
          <div className="p-6 flex items-center justify-between">
            <div>
              <h4 className="font-medium text-gray-900">Fresh Milk 1L</h4>
              <p className="text-sm text-gray-600">Expires: Dec 28, 2024</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
              3 days left
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  const SafetyGuide = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <Shield className="text-blue-600" size={24} />
            <h3 className="text-lg font-semibold text-gray-900">Storage Guidelines</h3>
          </div>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Keep refrigerated items below 40°F (4°C)</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Store dry goods in clean, airtight containers</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Use First In, First Out (FIFO) rotation method</span>
            </li>
            <li className="flex items-start space-x-2">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
              <span>Keep raw and cooked foods separated</span>
            </li>
          </ul>
        </div>

        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-3 mb-4">
            <Clock className="text-orange-600" size={24} />
            <h3 className="text-lg font-semibold text-gray-900">Expiry Guidelines</h3>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <span className="text-sm font-medium text-gray-900">High Risk (&lt;6h)</span>
              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                Urgent pickup
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <span className="text-sm font-medium text-gray-900">Medium Risk (6-12h)</span>
              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                Priority pickup
              </span>
            </div>
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <span className="text-sm font-medium text-gray-900">Low Risk (&gt;12h)</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                Standard pickup
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900">Food Safety Best Practices</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="flex items-start space-x-4">
            <div className="bg-green-100 p-2 rounded-lg flex-shrink-0">
              <CheckCircle className="text-green-600" size={16} />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Temperature Control</h4>
              <p className="text-sm text-gray-600 mt-1">
                Maintain cold chain for perishables. Use insulated containers for transport.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
              <CheckCircle className="text-blue-600" size={16} />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Documentation</h4>
              <p className="text-sm text-gray-600 mt-1">
                Keep records of donation dates, sources, and distribution for traceability.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-purple-100 p-2 rounded-lg flex-shrink-0">
              <CheckCircle className="text-purple-600" size={16} />
            </div>
            <div>
              <h4 className="font-medium text-gray-900">Training</h4>
              <p className="text-sm text-gray-600 mt-1">
                Ensure volunteers understand food handling and safety protocols.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="p-4 lg:p-8 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Food Safety Tools</h1>
        <p className="text-gray-600 mt-1">AI-powered tools and guides for safe food handling</p>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setActiveTab('checker')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'checker'
                  ? 'border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              AI Freshness Checker
            </button>
            <button
              onClick={() => setActiveTab('scanner')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'scanner'
                  ? 'border-green-600 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Label Scanner
            </button>
            <button
              onClick={() => setActiveTab('guide')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'guide'
                  ? 'border-purple-600 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Safety Guide
            </button>
          </nav>
        </div>
        
        <div className="p-6">
          {activeTab === 'checker' && <FreshnessChecker />}
          {activeTab === 'scanner' && <LabelScanner />}
          {activeTab === 'guide' && <SafetyGuide />}
        </div>
      </div>
    </div>
  );
};

export default FoodSafety;