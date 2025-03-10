import React, { useState } from 'react';
import { MessageSquare, Phone, Video, Search, Star, MoreVertical, Send, Clock, CheckCircle2, AlertCircle } from 'lucide-react';

const SAMPLE_CHATS = [
  {
    id: 1,
    name: 'John Lee',
    lastMessage: 'Is the property still available?',
    time: '2m ago',
    unread: 2,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'hot',
    messages: [
      {
        id: 1,
        type: 'received',
        message: 'Hi, I saw your listing for the condo at Marine Parade.',
        time: '10:30 AM',
      },
      {
        id: 2,
        type: 'received',
        message: 'Is the property still available?',
        time: '10:31 AM',
      },
    ],
  },
  {
    id: 2,
    name: 'Sarah Tan',
    lastMessage: 'Can we schedule a viewing this weekend?',
    time: '1h ago',
    unread: 0,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    status: 'warm',
    messages: [
      {
        id: 1,
        type: 'received',
        message: "Hello, I'm interested in the Tampines HDB flat.",
        time: '9:15 AM',
      },
      {
        id: 2,
        type: 'sent',
        message: 'Hi Sarah, yes the flat is still available. When would you like to view it?',
        time: '9:20 AM',
      },
      {
        id: 3,
        type: 'received',
        message: 'Can we schedule a viewing this weekend?',
        time: '9:25 AM',
      },
    ],
  },
];

export default function ChatManagement() {
  const [selectedChat, setSelectedChat] = useState(SAMPLE_CHATS[0]);
  const [newMessage, setNewMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="h-screen flex">
      {/* Chat List */}
      <div className="w-80 border-r bg-white">
        <div className="p-4 border-b">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search chats"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="overflow-y-auto h-[calc(100vh-73px)]">
          {SAMPLE_CHATS.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setSelectedChat(chat)}
              className={`p-4 hover:bg-gray-50 cursor-pointer ${
                selectedChat.id === chat.id ? 'bg-indigo-50' : ''
              }`}
            >
              <div className="flex items-center">
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="h-12 w-12 rounded-full"
                />
                <div className="ml-3 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium text-gray-900">{chat.name}</h3>
                    <span className="text-xs text-gray-500">{chat.time}</span>
                  </div>
                  <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
                </div>
                {chat.unread > 0 && (
                  <span className="ml-2 bg-indigo-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {chat.unread}
                  </span>
                )}
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <span
                  className={`text-xs px-2 py-1 rounded-full ${
                    chat.status === 'hot'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {chat.status === 'hot' ? 'Hot Lead' : 'Warm Lead'}
                </span>
                {chat.status === 'hot' && (
                  <span className="text-xs text-gray-500 flex items-center">
                    <AlertCircle className="h-3 w-3 mr-1" />
                    High priority
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Chat Header */}
        <div className="bg-white border-b p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={selectedChat.avatar}
                alt={selectedChat.name}
                className="h-10 w-10 rounded-full"
              />
              <div className="ml-3">
                <h2 className="text-lg font-medium text-gray-900">{selectedChat.name}</h2>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    Verified Lead
                  </span>
                  <span className="mx-2">•</span>
                  <span>Last active 2m ago</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
                <Phone className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
                <Video className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
                <Star className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
                <MoreVertical className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="space-y-4">
            {selectedChat.messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-sm rounded-lg p-3 ${
                    message.type === 'sent'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white text-gray-900'
                  }`}
                >
                  <p>{message.message}</p>
                  <div
                    className={`text-xs mt-1 ${
                      message.type === 'sent' ? 'text-indigo-200' : 'text-gray-500'
                    }`}
                  >
                    {message.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Input */}
        <div className="bg-white border-t p-4">
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button className="ml-3 bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition">
              <Send className="h-5 w-5" />
            </button>
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <Clock className="h-4 w-4 mr-1" />
            AI Assistant is drafting a response...
          </div>
        </div>
      </div>

      {/* Lead Details Sidebar */}
      <div className="w-80 border-l bg-white p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Lead Details</h3>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-medium text-gray-700">Interest</h4>
            <p className="text-sm text-gray-900">Marine Parade Condo</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700">Budget</h4>
            <p className="text-sm text-gray-900">S$1.2M - S$1.5M</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700">Requirements</h4>
            <ul className="text-sm text-gray-900 list-disc pl-4">
              <li>3 bedrooms</li>
              <li>High floor</li>
              <li>Near MRT</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700">AI Insights</h4>
            <div className="mt-2 p-3 bg-indigo-50 rounded-lg">
              <p className="text-sm text-gray-900">
                High probability of conversion (85%). Suggest scheduling a viewing within 48 hours.
              </p>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-700">Timeline</h4>
            <div className="mt-2 space-y-2">
              <div className="flex items-start">
                <div className="min-w-[100px] text-xs text-gray-500">2 mins ago</div>
                <div className="text-sm text-gray-900">Inquired about availability</div>
              </div>
              <div className="flex items-start">
                <div className="min-w-[100px] text-xs text-gray-500">5 mins ago</div>
                <div className="text-sm text-gray-900">Viewed listing details</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}