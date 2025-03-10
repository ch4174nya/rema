import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock, MapPin, Users, AlertCircle } from 'lucide-react';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const SAMPLE_EVENTS = [
  {
    id: 1,
    title: 'Marine Parade Condo Viewing',
    type: 'viewing',
    time: '10:00 AM',
    location: '123 Marine Parade Road',
    client: 'John Lee',
    status: 'confirmed',
  },
  {
    id: 2,
    title: 'Tampines HDB Viewing',
    type: 'viewing',
    time: '2:30 PM',
    location: '456 Tampines Ave 8',
    client: 'Sarah Tan',
    status: 'pending',
  },
  {
    id: 3,
    title: 'Property Handover',
    type: 'handover',
    time: '4:00 PM',
    location: '789 East Coast Road',
    client: 'Michael Chen',
    status: 'confirmed',
  },
];

export default function Calendar() {
  const [currentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Generate calendar days
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const firstDayWeekday = firstDayOfMonth.getDay();

  const calendarDays = [];
  for (let i = 0; i < firstDayWeekday; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
        <div className="flex items-center space-x-4">
          <button className="bg-white px-4 py-2 text-gray-600 rounded-lg border hover:bg-gray-50">
            Today
          </button>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <span className="text-lg font-medium text-gray-900">
              {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
            </span>
            <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* AI Suggestions */}
      <div className="bg-indigo-50 p-4 rounded-xl mb-6">
        <div className="flex items-start">
          <AlertCircle className="h-6 w-6 text-indigo-600 mt-1" />
          <div className="ml-4">
            <h3 className="font-medium text-gray-900">Scheduling Recommendations</h3>
            <p className="text-gray-600">Based on client preferences and traffic patterns, weekday viewings between 2-5 PM have the highest attendance rate.</p>
          </div>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Calendar Grid */}
        <div className="flex-1 bg-white rounded-xl shadow-sm p-6">
          {/* Weekday headers */}
          <div className="grid grid-cols-7 gap-2 mb-4">
            {WEEKDAYS.map((day) => (
              <div key={day} className="text-center text-sm font-medium text-gray-500">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((day, index) => (
              <div
                key={index}
                onClick={() => day && setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
                className={`aspect-square p-2 rounded-lg cursor-pointer ${
                  day
                    ? 'hover:bg-gray-50'
                    : 'bg-transparent cursor-default'
                } ${
                  day === selectedDate.getDate() &&
                  currentDate.getMonth() === selectedDate.getMonth()
                    ? 'bg-indigo-50 text-indigo-600 font-medium'
                    : ''
                }`}
              >
                {day && (
                  <>
                    <div className="text-sm mb-1">{day}</div>
                    {/* Event indicators */}
                    <div className="flex gap-1">
                      <div className="h-1 w-1 rounded-full bg-indigo-400"></div>
                      <div className="h-1 w-1 rounded-full bg-green-400"></div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Events List */}
        <div className="w-96 bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            {selectedDate.toLocaleString('default', { month: 'long', day: 'numeric', year: 'numeric' })}
          </h2>
          <div className="space-y-4">
            {SAMPLE_EVENTS.map((event) => (
              <div
                key={event.id}
                className={`p-4 rounded-lg ${
                  event.status === 'confirmed' ? 'bg-green-50' : 'bg-yellow-50'
                }`}
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-medium text-gray-900">{event.title}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full ${
                      event.status === 'confirmed'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
                <div className="mt-2 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    {event.client}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}