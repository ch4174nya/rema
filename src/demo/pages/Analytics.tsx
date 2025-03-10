import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Building2, MessageSquare, AlertCircle } from 'lucide-react';

const monthlyData = [
  { name: 'Jan', listings: 65, inquiries: 120 },
  { name: 'Feb', listings: 75, inquiries: 132 },
  { name: 'Mar', listings: 85, inquiries: 145 },
  { name: 'Apr', listings: 95, inquiries: 158 },
  { name: 'May', listings: 105, inquiries: 172 },
  { name: 'Jun', listings: 115, inquiries: 185 },
];

const propertyTypeData = [
  { name: 'Condos', value: 45 },
  { name: 'HDBs', value: 30 },
  { name: 'Landed', value: 15 },
  { name: 'Commercial', value: 10 },
];

const COLORS = ['#4f46e5', '#60a5fa', '#34d399', '#fbbf24'];

export default function Analytics() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
        <div className="flex items-center space-x-2">
          <select className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500">
            <option>Last 30 Days</option>
            <option>Last 3 Months</option>
            <option>Last 6 Months</option>
            <option>Last Year</option>
          </select>
        </div>
      </div>

      {/* AI Insights */}
      <div className="bg-indigo-50 p-4 rounded-xl mb-6">
        <div className="flex items-start">
          <AlertCircle className="h-6 w-6 text-indigo-600 mt-1" />
          <div className="ml-4">
            <h3 className="font-medium text-gray-900">Market Intelligence Update</h3>
            <p className="text-gray-600">Your listing conversion rate has increased by 15% this month. Consider increasing focus on District 15 properties where demand is highest.</p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Building2 className="h-8 w-8 text-indigo-600" />
            <span className="text-sm text-gray-500">Total Listings</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">245</div>
          <div className="text-sm text-green-600 flex items-center mt-2">
            <TrendingUp className="h-4 w-4 mr-1" />
            +12% from last month
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <Users className="h-8 w-8 text-indigo-600" />
            <span className="text-sm text-gray-500">Total Leads</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">1,234</div>
          <div className="text-sm text-green-600 flex items-center mt-2">
            <TrendingUp className="h-4 w-4 mr-1" />
            +8% from last month
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <MessageSquare className="h-8 w-8 text-indigo-600" />
            <span className="text-sm text-gray-500">Response Rate</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">98.5%</div>
          <div className="text-sm text-green-600 flex items-center mt-2">
            <TrendingUp className="h-4 w-4 mr-1" />
            +2.5% from last month
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="h-8 w-8 text-indigo-600" />
            <span className="text-sm text-gray-500">Conversion Rate</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">15.2%</div>
          <div className="text-sm text-green-600 flex items-center mt-2">
            <TrendingUp className="h-4 w-4 mr-1" />
            +3.2% from last month
          </div>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Performance */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Performance</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right" />
                <Tooltip />
                <Line yAxisId="left" type="monotone" dataKey="listings" stroke="#4f46e5" strokeWidth={2} />
                <Line yAxisId="right" type="monotone" dataKey="inquiries" stroke="#60a5fa" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Property Type Distribution */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Property Type Distribution</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={propertyTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {propertyTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Lead Sources */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Lead Sources</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={[
                { name: 'PropertyGuru', value: 45 },
                { name: '99.co', value: 35 },
                { name: 'Direct', value: 15 },
                { name: 'Referral', value: 5 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#4f46e5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Response Time */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Average Response Time</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={[
                { name: '00:00', time: 15 },
                { name: '04:00', time: 12 },
                { name: '08:00', time: 8 },
                { name: '12:00', time: 5 },
                { name: '16:00', time: 7 },
                { name: '20:00', time: 10 },
              ]}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="time" stroke="#4f46e5" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}