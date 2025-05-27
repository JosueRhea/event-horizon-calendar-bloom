
import Calendar from "@/components/Calendar";

const Index = () => {
  // Placeholder events data
  const placeholderEvents = [
    { id: '1', title: 'Team Meeting', time: '10:00 AM', category: 'meeting' as const, date: '2025-01-15' },
    { id: '2', title: 'Project Deadline', time: '5:00 PM', category: 'work' as const, date: '2025-01-18' },
    { id: '3', title: 'Doctor Appointment', time: '2:00 PM', category: 'personal' as const, date: '2025-01-20' },
    { id: '4', title: 'Code Review', time: '11:00 AM', category: 'work' as const, date: '2025-01-22' },
    { id: '5', title: 'Birthday Party', time: '7:00 PM', category: 'personal' as const, date: '2025-01-25' },
    { id: '6', title: 'Client Call', time: '3:00 PM', category: 'work' as const, date: '2025-01-27' },
    { id: '7', title: 'Grocery Shopping', time: '11:00 AM', category: 'personal' as const, date: '2025-01-28' },
    { id: '8', title: 'Sprint Planning', time: '9:00 AM', category: 'meeting' as const, date: '2025-01-29' },
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
