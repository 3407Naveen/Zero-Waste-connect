import React from 'react';
import { Heart, Calendar, BookOpen, Users, MapPin, Clock } from 'lucide-react';

const Community: React.FC = () => {
  const stories = [
    {
      id: 1,
      title: "Local Restaurant Saves 500kg This Month",
      author: "Green Valley Kitchen",
      excerpt: "Our partnership with local NGOs has prevented massive food waste while helping hundreds of families.",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "2 days ago",
      likes: 47,
      category: "Success Story"
    },
    {
      id: 2,
      title: "How We Distribute 200 Meals Daily",
      author: "Hope Kitchen NGO",
      excerpt: "A behind-the-scenes look at our daily operations and the impact of food rescue programs.",
      image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "5 days ago",
      likes: 89,
      category: "Impact Story"
    },
    {
      id: 3,
      title: "Student Volunteers Make Big Difference",
      author: "City University",
      excerpt: "Local students organize weekly food rescue drives, connecting campus dining with local shelters.",
      image: "https://images.pexels.com/photos/6646816/pexels-photo-6646816.jpeg?auto=compress&cs=tinysrgb&w=400",
      date: "1 week ago",
      likes: 34,
      category: "Community"
    }
  ];

  const events = [
    {
      id: 1,
      title: "Food Rescue Training Workshop",
      date: "Dec 30, 2024",
      time: "2:00 PM - 5:00 PM",
      location: "Community Center",
      attendees: 28,
      maxAttendees: 50,
      type: "Training",
      description: "Learn best practices for safe food collection and distribution"
    },
    {
      id: 2,
      title: "New Year Community Feast",
      date: "Jan 1, 2025",
      time: "12:00 PM - 4:00 PM", 
      location: "Central Park",
      attendees: 156,
      maxAttendees: 200,
      type: "Community",
      description: "Celebrate the new year while sharing rescued food with the community"
    },
    {
      id: 3,
      title: "Monthly Donors Meet & Greet",
      date: "Jan 15, 2025",
      time: "6:00 PM - 8:00 PM",
      location: "Green Valley Hotel",
      attendees: 12,
      maxAttendees: 30,
      type: "Networking",
      description: "Connect with fellow donors and share experiences"
    }
  ];

  const guides = [
    {
      title: "Food Safety Essentials",
      description: "Complete guide to safe food handling and storage",
      duration: "10 min read",
      category: "Safety"
    },
    {
      title: "Effective Food Storage Tips",
      description: "Maximize freshness and minimize waste",
      duration: "7 min read",
      category: "Storage"
    },
    {
      title: "Building Donor Partnerships",
      description: "How to establish lasting relationships with food donors",
      duration: "12 min read",
      category: "Partnerships"
    },
    {
      title: "Volunteer Management Best Practices",
      description: "Organizing and managing food rescue volunteers",
      duration: "8 min read",
      category: "Management"
    }
  ];

  return (
    <div className="p-4 lg:p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Community</h1>
        <p className="text-gray-600 mt-1">Stories, events, and resources from our food rescue community</p>
      </div>

      {/* Community Stories */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Community Stories</h2>
          <button className="text-green-600 hover:text-green-700 font-medium text-sm">
            Share Your Story
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story) => (
            <article key={story.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer">
              <img 
                src={story.image} 
                alt={story.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                    {story.category}
                  </span>
                  <span className="text-sm text-gray-500">{story.date}</span>
                </div>
                
                <h3 className="font-semibold text-gray-900 mb-2">{story.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{story.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">by {story.author}</span>
                  <div className="flex items-center space-x-1 text-red-500">
                    <Heart size={16} />
                    <span className="text-sm">{story.likes}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Upcoming Events</h2>
          <button className="text-green-600 hover:text-green-700 font-medium text-sm">
            View All Events
          </button>
        </div>

        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <h3 className="font-semibold text-gray-900">{event.title}</h3>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                      event.type === 'Training' ? 'bg-blue-100 text-blue-800' :
                      event.type === 'Community' ? 'bg-purple-100 text-purple-800' :
                      'bg-orange-100 text-orange-800'
                    }`}>
                      {event.type}
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin size={14} />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={14} />
                      <span>{event.attendees}/{event.maxAttendees} attending</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                    RSVP
                  </button>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Resource Guides */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Resource Guides</h2>
          <button className="text-green-600 hover:text-green-700 font-medium text-sm">
            View All Guides
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {guides.map((guide, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg flex-shrink-0">
                  <BookOpen className="text-green-600" size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-2">{guide.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{guide.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                      {guide.category}
                    </span>
                    <span className="text-sm text-gray-500">{guide.duration}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Community Stats */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Community Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-bold text-green-600 mb-1">1,247</div>
              <div className="text-sm text-gray-600">Active Members</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600 mb-1">89</div>
              <div className="text-sm text-gray-600">Partner Organizations</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600 mb-1">156</div>
              <div className="text-sm text-gray-600">Success Stories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-orange-600 mb-1">23</div>
              <div className="text-sm text-gray-600">Upcoming Events</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;