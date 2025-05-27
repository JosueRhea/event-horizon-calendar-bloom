
import React from 'react';
import { Clock, User, Calendar, AlertCircle } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  time: string;
  category: 'work' | 'personal' | 'meeting' | 'reminder';
  date: string;
}

interface EventCardProps {
  event: Event;
  compact?: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ event, compact = false }) => {
  const getCategoryConfig = (category: string) => {
    switch (category) {
      case 'work':
        return {
          color: 'bg-blue-500',
          lightColor: 'bg-blue-50',
          textColor: 'text-blue-700',
          icon: User,
        };
      case 'personal':
        return {
          color: 'bg-green-500',
          lightColor: 'bg-green-50',
          textColor: 'text-green-700',
          icon: User,
        };
      case 'meeting':
        return {
          color: 'bg-purple-500',
          lightColor: 'bg-purple-50',
          textColor: 'text-purple-700',
          icon: Calendar,
        };
      case 'reminder':
        return {
          color: 'bg-orange-500',
          lightColor: 'bg-orange-50',
          textColor: 'text-orange-700',
          icon: AlertCircle,
        };
      default:
        return {
          color: 'bg-gray-500',
          lightColor: 'bg-gray-50',
          textColor: 'text-gray-700',
          icon: Calendar,
        };
    }
  };

  const config = getCategoryConfig(event.category);
  const Icon = config.icon;

  if (compact) {
    return (
      <div className={`p-1.5 rounded-lg ${config.lightColor} border-l-2 border-l-${event.category === 'work' ? 'blue' : event.category === 'personal' ? 'green' : event.category === 'meeting' ? 'purple' : 'orange'}-500 transition-all duration-200 hover:shadow-sm cursor-pointer`}>
        <div className="flex items-center space-x-1">
          <div className={`w-2 h-2 rounded-full ${config.color} flex-shrink-0`}></div>
          <div className="min-w-0 flex-1">
            <p className={`text-xs font-medium truncate ${config.textColor}`}>
              {event.title}
            </p>
            <p className="text-xs text-slate-500 truncate">
              {event.time}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`p-4 rounded-xl ${config.lightColor} border border-slate-200 transition-all duration-200 hover:shadow-md hover:scale-[1.02] cursor-pointer`}>
      <div className="flex items-start space-x-3">
        <div className={`w-10 h-10 rounded-lg ${config.color} flex items-center justify-center flex-shrink-0`}>
          <Icon className="h-5 w-5 text-white" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className={`font-semibold ${config.textColor} mb-1`}>
            {event.title}
          </h4>
          
          <div className="flex items-center space-x-4 text-sm text-slate-600">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{event.time}</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <div className={`w-2 h-2 rounded-full ${config.color}`}></div>
              <span className="capitalize">{event.category}</span>
            </div>
          </div>
        </div>
        
        <div className="flex-shrink-0">
          <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
