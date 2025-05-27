
import React from 'react';
import { ChevronLeft, ChevronRight, Grid3X3, List, Plus } from 'lucide-react';
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

interface CalendarHorizontalViewProps {
  events: Event[];
  currentDate: Date;
  onNavigateMonth: (direction: 'prev' | 'next') => void;
  onViewModeChange: (mode: 'grid' | 'horizontal') => void;
}

const CalendarHorizontalView: React.FC<CalendarHorizontalViewProps> = ({
  events,
  currentDate,
  onNavigateMonth,
  onViewModeChange,
}) => {
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayOfWeek = new Date(year, month, day).getDay();
      days.push({
        day,
        dateString,
        dayName: dayNames[dayOfWeek],
        events: events.filter(event => event.date === dateString)
      });
    }
    
    return days;
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
  const daysWithEvents = days.filter(day => day.events.length > 0);

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onNavigateMonth('prev')}
              className="text-white hover:bg-white/20 rounded-full"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <h2 className="text-2xl font-bold">
              {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            
            <div className="flex items-center gap-2">
              <div className="flex bg-white/20 rounded-lg p-1">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onViewModeChange('grid')}
                  className="text-white hover:bg-white/20 rounded"
                >
                  <Grid3X3 className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onViewModeChange('horizontal')}
                  className="text-white hover:bg-white/20 rounded bg-white/30"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
              
              <Button
                variant="ghost"
                size="icon"
                onClick={() => onNavigateMonth('next')}
                className="text-white hover:bg-white/20 rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Horizontal View Content */}
        <div className="p-6">
          {daysWithEvents.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500 text-lg mb-4">No events scheduled for this month</p>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Event
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {daysWithEvents.map((dayData) => (
                <div key={dayData.dateString} className="border-l-4 border-l-blue-500 pl-6 pb-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className={`text-xl font-bold ${
                        isToday(dayData.day) ? 'text-blue-600' : 'text-slate-800'
                      }`}>
                        {dayData.dayName}, {dayData.day}
                        {isToday(dayData.day) && (
                          <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full font-medium">
                            Today
                          </span>
                        )}
                      </h3>
                      <p className="text-slate-500">
                        {dayData.events.length} event{dayData.events.length !== 1 ? 's' : ''}
                      </p>
                    </div>
                    <Button size="sm" variant="outline">
                      <Plus className="h-4 w-4 mr-1" />
                      Add Event
                    </Button>
                  </div>
                  
                  <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                    {dayData.events.map((event) => (
                      <EventCard key={event.id} event={event} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default CalendarHorizontalView;
