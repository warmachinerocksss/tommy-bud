// app/dashboard/page.js - Analytics dashboard page
import AnalyticsDashboard from '../../components/AnalyticsDashboard';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <AnalyticsDashboard />
        </div>
      </main>
    </div>
  );
}