import React, { useState } from 'react';
import { User, Mail, Phone, Building2, Award, Camera, MapPin, Calendar, Shield, Clock, Star, TrendingUp } from 'lucide-react';

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Smith',
    email: 'john.smith@propai.com',
    phone: '+65 9123 4567',
    agency: 'PropAI Realty',
    licenseNumber: 'R123456A',
    experience: '8 years',
    specializations: ['Residential', 'Luxury Properties', 'New Launch'],
    areas: ['District 15', 'District 9', 'District 10'],
    languages: ['English', 'Mandarin', 'Malay'],
    bio: "Dedicated real estate professional with 8 years of experience in Singapore's property market. Specializing in luxury properties and new launches.",
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  });

  const stats = [
    { icon: Building2, label: 'Active Listings', value: '24' },
    { icon: Star, label: 'Client Rating', value: '4.9/5' },
    { icon: Clock, label: 'Avg Response Time', value: '15 min' },
    { icon: TrendingUp, label: 'Success Rate', value: '92%' },
  ];

  const certifications = [
    { name: 'CEA Licensed Agent', date: '2016', icon: Shield },
    { name: 'Luxury Property Specialist', date: '2018', icon: Award },
    { name: 'PropTech Professional', date: '2023', icon: Building2 },
  ];

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center">
              <div className="relative">
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="h-24 w-24 rounded-full object-cover"
                />
                {isEditing && (
                  <button className="absolute bottom-0 right-0 bg-indigo-600 text-white p-2 rounded-full">
                    <Camera className="h-4 w-4" />
                  </button>
                )}
              </div>
              <div className="ml-6">
                <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
                <div className="mt-2 space-y-1">
                  <div className="flex items-center text-gray-600">
                    <Mail className="h-4 w-4 mr-2" />
                    {profile.email}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    {profile.phone}
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Building2 className="h-4 w-4 mr-2" />
                    {profile.agency}
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              {isEditing ? 'Save Changes' : 'Edit Profile'}
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-4">
              <div className="flex items-center justify-between mb-2">
                <stat.icon className="h-6 w-6 text-indigo-600" />
                <span className="text-sm text-gray-500">{stat.label}</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="col-span-2 space-y-6">
            {/* About */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">About</h2>
              {isEditing ? (
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                  rows={4}
                  value={profile.bio}
                  onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
                />
              ) : (
                <p className="text-gray-600">{profile.bio}</p>
              )}
            </div>

            {/* Specializations */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Specializations</h2>
              <div className="flex flex-wrap gap-2">
                {profile.specializations.map((spec, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-indigo-50 text-indigo-600 rounded-full text-sm"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Areas Served */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Areas Served</h2>
              <div className="space-y-2">
                {profile.areas.map((area, index) => (
                  <div key={index} className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* License Info */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">License Information</h2>
              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-500">License Number</div>
                  <div className="font-medium text-gray-900">{profile.licenseNumber}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Experience</div>
                  <div className="font-medium text-gray-900">{profile.experience}</div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Certifications</h2>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start">
                    <cert.icon className="h-5 w-5 text-indigo-600 mt-1" />
                    <div className="ml-3">
                      <div className="font-medium text-gray-900">{cert.name}</div>
                      <div className="text-sm text-gray-500">Obtained {cert.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Languages</h2>
              <div className="space-y-2">
                {profile.languages.map((language, index) => (
                  <div key={index} className="text-gray-600">{language}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}