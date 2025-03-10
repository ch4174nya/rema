import React from 'react';
import { Building2, Users, Calendar, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', value: 12 },
  { name: 'Tue', value: 19 },
  { name: 'Wed', value: 15 },
  { name: 'Thu', value: 22 },
  { name: 'Fri', value: 18 },
  { name: 'Sat', value: 24 },
  { name: 'Sun', value: 21 },
];

export default function Dashboard() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Building2 className="h-8 w-8 text-indigo-600" />
            <span className="text-sm text-gray-500">Active Listings</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">24</div>
          <div className="text-sm text-green-600 flex items-center mt-2">
            <TrendingUp className="h-4 w-4 mr-1" />
            +12% from last month
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Users className="h-8 w-8 text-indigo-600" />
            <span className="text-sm text-gray-500">New Leads</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">156</div>
          <div className="text-sm text-green-600 flex items-center mt-2">
            <TrendingUp className="h-4 w-4 mr-1" />
            +8% from last month
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Calendar className="h-8 w-8 text-indigo-600" />
            <span className="text-sm text-gray-500">Appointments</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">32</div>
          <div className="text-sm text-green-600 flex items-center mt-2">
            <TrendingUp className="h-4 w-4 mr-1" />
            +15% from last month
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-8 w-8 text-indigo-600" />
            <span className="text-sm text-gray-500">Conversion Rate</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">8.2%</div>
          <div className="text-sm text-green-600 flex items-center mt-2">
            <TrendingUp className="h-4 w-4 mr-1" />
            +2% from last month
          </div>
        </div>
      </div>

      {/* Activity Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Weekly Activity</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">AI Insights</h2>
        <div className="space-y-4">
          <div className="flex items-start p-4 bg-indigo-50 rounded-lg">
            <TrendingUp className="h-6 w-6 text-indigo-600 mt-1" />
            <div className="ml-4">
              <h3 className="font-medium text-gray-900">Listing Price Optimization</h3>
              <p className="text-gray-600">Consider increasing prices for properties in District 15 by 5-8% based on recent market trends.</p>
            </div>
          </div>
          <div className="flex items-start p-4 bg-green-50 rounded-lg">
            <Calendar className="h-6 w-6 text-green-600 mt-1" />
            <div className="ml-4">
              <h3 className="font-medium text-gray-900">Best Viewing Times</h3>
              <p className="text-gray-600">Schedule viewings between 2-5 PM on weekends for optimal attendance rates.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}