import Calendar from "@/components/Calendar";

const Index = () => {
  // Placeholder events data with multiple events per day
  const placeholderEvents = [
    // January 15th - 4 events
    { id: '1', title: 'Team Meeting', time: '10:00 AM', category: 'meeting' as const, date: '2025-01-15' },
    { id: '2', title: 'Code Review', time: '2:00 PM', category: 'work' as const, date: '2025-01-15' },
    { id: '3', title: 'Client Call', time: '4:00 PM', category: 'work' as const, date: '2025-01-15' },
    { id: '4', title: 'Project Planning', time: '5:30 PM', category: 'meeting' as const, date: '2025-01-15' },
    
    // January 18th - 6 events
    { id: '5', title: 'Project Deadline', time: '9:00 AM', category: 'work' as const, date: '2025-01-18' },
    { id: '6', title: 'Sprint Review', time: '11:00 AM', category: 'meeting' as const, date: '2025-01-18' },
    { id: '7', title: 'Lunch with Client', time: '12:30 PM', category: 'work' as const, date: '2025-01-18' },
    { id: '8', title: 'Design Review', time: '2:00 PM', category: 'work' as const, date: '2025-01-18' },
    { id: '9', title: 'Team Building', time: '4:00 PM', category: 'personal' as const, date: '2025-01-18' },
    { id: '10', title: 'Status Update', time: '5:00 PM', category: 'meeting' as const, date: '2025-01-18' },
    
    // January 20th - 10 events (busy day!)
    { id: '11', title: 'Doctor Appointment', time: '8:00 AM', category: 'personal' as const, date: '2025-01-20' },
    { id: '12', title: 'Morning Standup', time: '9:00 AM', category: 'meeting' as const, date: '2025-01-20' },
    { id: '13', title: 'Code Implementation', time: '10:00 AM', category: 'work' as const, date: '2025-01-20' },
    { id: '14', title: 'Technical Discussion', time: '11:30 AM', category: 'meeting' as const, date: '2025-01-20' },
    { id: '15', title: 'Lunch Break', time: '12:00 PM', category: 'personal' as const, date: '2025-01-20' },
    { id: '16', title: 'Bug Fixes', time: '1:30 PM', category: 'work' as const, date: '2025-01-20' },
    { id: '17', title: 'User Testing', time: '3:00 PM', category: 'work' as const, date: '2025-01-20' },
    { id: '18', title: 'Documentation', time: '4:00 PM', category: 'work' as const, date: '2025-01-20' },
    { id: '19', title: 'Team Sync', time: '5:00 PM', category: 'meeting' as const, date: '2025-01-20' },
    { id: '20', title: 'Grocery Shopping', time: '7:00 PM', category: 'personal' as const, date: '2025-01-20' },
    
    // January 22nd - 5 events
    { id: '21', title: 'Architecture Review', time: '9:00 AM', category: 'work' as const, date: '2025-01-22' },
    { id: '22', title: 'Performance Testing', time: '11:00 AM', category: 'work' as const, date: '2025-01-22' },
    { id: '23', title: 'Security Audit', time: '2:00 PM', category: 'work' as const, date: '2025-01-22' },
    { id: '24', title: 'Deployment Planning', time: '4:00 PM', category: 'meeting' as const, date: '2025-01-22' },
    { id: '25', title: 'Team Dinner', time: '7:00 PM', category: 'personal' as const, date: '2025-01-22' },
    
    // January 25th - 3 events
    { id: '26', title: 'Birthday Party', time: '2:00 PM', category: 'personal' as const, date: '2025-01-25' },
    { id: '27', title: 'Gift Shopping', time: '11:00 AM', category: 'personal' as const, date: '2025-01-25' },
    { id: '28', title: 'Party Setup', time: '12:00 PM', category: 'personal' as const, date: '2025-01-25' },
    
    // Other dates with fewer events
    { id: '29', title: 'Client Call', time: '3:00 PM', category: 'work' as const, date: '2025-01-27' },
    { id: '30', title: 'Sprint Planning', time: '9:00 AM', category: 'meeting' as const, date: '2025-01-29' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Event Calendar
          </h1>
          <p className="text-slate-600 text-lg">Beautiful calendar interface for managing your events</p>
        </div>
        <Calendar events={placeholderEvents} />
      </div>
    </div>
  );
};

export default Index;
