import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Building2, LayoutDashboard, MessageSquare, Calendar, BarChart3, LogOut, User } from 'lucide-react';

export default function DemoLayout() {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r">
        <div className="h-16 flex items-center px-6 border-b">
          <Building2 className="h-8 w-8 text-indigo-600" />
          <span className="ml-2 text-xl font-bold text-gray-900">PropAI</span>
        </div>
        <nav className="p-4 space-y-2">
          <Link
            to="/demo"
            className={`flex items-center px-4 py-2 rounded-lg ${
              isActive('/demo')
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <LayoutDashboard className="h-5  w-5 mr-3" />
            Dashboard
          </Link>
          <Link
            to="/demo/listings"
            className={`flex items-center px-4 py-2 rounded-lg ${
              isActive('/demo/listings')
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Building2 className="h-5 w-5 mr-3" />
            Property Listings
          </Link>
          <Link
            to="/demo/chat"
            className={`flex items-center px-4 py-2 rounded-lg ${
              isActive('/demo/chat')
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <MessageSquare className="h-5 w-5 mr-3" />
            WhatsApp Chat
          </Link>
          <Link
            to="/demo/calendar"
            className={`flex items-center px-4 py-2 rounded-lg ${
              isActive('/demo/calendar')
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <Calendar className="h-5 w-5 mr-3" />
            Calendar
          </Link>
          <Link
            to="/demo/analytics"
            className={`flex items-center px-4 py-2 rounded-lg ${
              isActive('/demo/analytics')
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <BarChart3 className="h-5 w-5 mr-3" />
            Analytics
          </Link>
          <Link
            to="/demo/profile"
            className={`flex items-center px-4 py-2 rounded-lg ${
              isActive('/demo/profile')
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            <User className="h-5 w-5 mr-3" />
            Profile
          </Link>
        </nav>
        <div className="absolute bottom-0 w-64 p-4 border-t">
          <Link
            to="/"
            className="flex items-center px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
          >
            <LogOut className="h-5 w-5 mr-3" />
            Exit Demo
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <Outlet />
      </div>
    </div>
  );
}