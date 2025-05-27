import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import EventCard from './EventCard';

interface Event {
  id: string;
  title: string;
  time: string;
  category: 'work' | 'personal' | 'meeting' | 'reminder';
  date: string;
}

interface CalendarProps {
  events: Event[];
}

const Calendar: React.FC<CalendarProps> = ({ events }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  
  // Sample events data
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const formatDateString = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  };

  const getEventsForDate = (dateString: string) => {
    return events.filter(event => event.date === dateString);
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    const newDate = new Date(currentDate);
    if (direction === 'prev') {
      newDate.setMonth(newDate.getMonth() - 1);
    } else {
      newDate.setMonth(newDate.getMonth() + 1);
    }
    setCurrentDate(newDate);
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      day === today.getDate() &&
      currentDate.getMonth() === today.getMonth() &&
      currentDate.getFullYear() === today.getFullYear()
    );
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="w-full max-w-5xl mx-auto">
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
        {/* Calendar Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigateMonth('prev')}
              className="text-white hover:bg-white/20 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <h2 className="text-2xl font-bold">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigateMonth('next')}
              className="text-white hover:bg-white/20 rounded-full"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Day Names Header */}
        <div className="grid grid-cols-7 bg-slate-50 border-b">
          {dayNames.map((day) => (
            <div key={day} className="p-4 text-center font-semibold text-slate-600">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div className="grid grid-cols-7 gap-0">
          {days.map((day, index) => {
            if (day === null) {
              return <div key={index} className="h-32 border-r border-b border-slate-100"></div>;
            }

            const dateString = formatDateString(
              currentDate.getFullYear(),
              currentDate.getMonth(),
              day
            );
            const dayEvents = getEventsForDate(dateString);
            const isSelected = selectedDate === dateString;
            const isTodayDate = isToday(day);

            return (
              <div
                key={day}
                className={`h-32 border-r border-b border-slate-100 p-2 cursor-pointer transition-all duration-200 hover:bg-blue-50 ${
                  isSelected ? 'bg-blue-100' : ''
                } ${isTodayDate ? 'bg-gradient-to-br from-blue-50 to-purple-50' : ''}`}
                onClick={() => setSelectedDate(isSelected ? null : dateString)}
              >
                <div className="h-full flex flex-col">
                  <div className={`text-sm font-medium mb-1 ${
                    isTodayDate 
                      ? 'text-blue-600 font-bold' 
                      : 'text-slate-700'
                  }`}>
                    {isTodayDate && (
                      <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold mb-1">
                        {day}
                      </div>
                    )}
                    {!isTodayDate && day}
                  </div>
                  
                  <div className="flex-1 space-y-1 overflow-y-auto">
                    {dayEvents.slice(0, 3).map((event) => (
                      <EventCard key={event.id} event={event} compact />
                    ))}
                    {dayEvents.length > 3 && (
                      <div className="text-xs text-slate-500 font-medium">
                        +{dayEvents.length - 3} more
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Date Events */}
        {selectedDate && (
          <div className="p-6 bg-gradient-to-r from-slate-50 to-blue-50 border-t">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-slate-800">
                Events for {new Date(selectedDate).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </h3>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Plus className="h-4 w-4 mr-1" />
                Add Event
              </Button>
            </div>
            
            <div className="grid gap-3">
              {getEventsForDate(selectedDate).map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
              {getEventsForDate(selectedDate).length === 0 && (
                <p className="text-slate-500 text-center py-8">
                  No events scheduled for this date
                </p>
              )}
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Calendar;
