import React from 'react';
import { MessageCircle, Send, Paperclip, Bell } from 'lucide-react';

const Messages: React.FC = () => {
  const conversations = [
    {
      id: 1,
      name: 'Green Valley Market',
      lastMessage: 'Pickup is ready at the back entrance',
      time: '2m ago',
      unread: 2,
      avatar: 'GM'
    },
    {
      id: 2,
      name: 'Sunrise Bakery',
      lastMessage: 'Thank you for the quick pickup!',
      time: '1h ago',
      unread: 0,
      avatar: 'SB'
    },
    {
      id: 3,
      name: 'Spice Garden Restaurant',
      lastMessage: 'Can you arrive 15 minutes early?',
      time: '3h ago',
      unread: 1,
      avatar: 'SG'
    }
  ];

  const notifications = [
    {
      id: 1,
      type: 'claim',
      title: 'New donation claimed',
      message: 'Your vegetables donation has been claimed by Hope Kitchen',
      time: '5m ago',
      read: false
    },
    {
      id: 2,
      type: 'pickup',
      title: 'Pickup reminder',
      message: 'Pickup scheduled in 30 minutes at Sunrise Bakery',
      time: '25m ago', 
      read: false
    },
    {
      id: 3,
      type: 'message',
      title: 'New message',
      message: 'Green Valley Market sent you a message',
      time: '1h ago',
      read: true
    }
  ];

  return (
    <div className="p-4 lg:p-8">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
        {/* Conversations List */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-xl font-semibold text-gray-900">Messages</h2>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <div key={conversation.id} className="p-4 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-colors">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-medium">
                    {conversation.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-medium text-gray-900 truncate">{conversation.name}</h3>
                      <span className="text-xs text-gray-500">{conversation.time}</span>
                    </div>
                    <p className="text-sm text-gray-600 truncate">{conversation.lastMessage}</p>
                  </div>
                  {conversation.unread > 0 && (
                    <div className="bg-green-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {conversation.unread}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col">
          <div className="p-6 border-b border-gray-100 flex items-center space-x-3">
            <div className="bg-green-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-medium">
              GM
            </div>
            <div>
              <h3 className="font-medium text-gray-900">Green Valley Market</h3>
              <p className="text-sm text-green-600">Active now</p>
            </div>
          </div>
          
          <div className="flex-1 p-6 space-y-4 overflow-y-auto">
            {/* Messages */}
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-xs">
                <p className="text-sm text-gray-900">Hi! We have fresh vegetables ready for pickup.</p>
                <span className="text-xs text-gray-500 mt-1">10:30 AM</span>
              </div>
            </div>
            
            <div className="flex justify-end">
              <div className="bg-green-600 text-white rounded-lg px-4 py-2 max-w-xs">
                <p className="text-sm">Great! What time would be best for pickup?</p>
                <span className="text-xs text-green-200 mt-1">10:32 AM</span>
              </div>
            </div>
            
            <div className="flex justify-start">
              <div className="bg-gray-100 rounded-lg px-4 py-2 max-w-xs">
                <p className="text-sm text-gray-900">Pickup is ready at the back entrance</p>
                <span className="text-xs text-gray-500 mt-1">10:35 AM</span>
              </div>
            </div>
          </div>
          
          <div className="p-6 border-t border-gray-100">
            <div className="flex items-center space-x-3">
              <button className="text-gray-400 hover:text-gray-600">
                <Paperclip size={20} />
              </button>
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-lg transition-colors">
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Notifications Panel */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100">
          <div className="p-6 border-b border-gray-100 flex items-center justify-between">
            <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
            <Bell className="text-gray-400" size={20} />
          </div>
          
          <div className="divide-y divide-gray-100">
            {notifications.map((notification) => (
              <div key={notification.id} className={`p-4 hover:bg-gray-50 cursor-pointer ${!notification.read ? 'bg-blue-50' : ''}`}>
                <div className="flex items-start space-x-3">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    notification.type === 'claim' ? 'bg-green-600' :
                    notification.type === 'pickup' ? 'bg-orange-600' : 'bg-blue-600'
                  }`} />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 text-sm">{notification.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                    <span className="text-xs text-gray-500 mt-2">{notification.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-4 border-t border-gray-100">
            <button className="text-green-600 hover:text-green-700 text-sm font-medium">
              View All Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;