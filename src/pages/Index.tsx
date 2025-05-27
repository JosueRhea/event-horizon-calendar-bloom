
import Calendar from "@/components/Calendar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Event Calendar
          </h1>
          <p className="text-slate-600 text-lg">Beautiful calendar interface for managing your events</p>
        </div>
        <Calendar />
      </div>
    </div>
  );
};

export default Index;
