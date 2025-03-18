export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="flex items-center">
          <span className="text-2xl font-bold text-indigo-600">AnalytiX</span>
        </div>
        <nav>
          <ul className="flex space-x-8">
            <li><a href="/" className="text-gray-600 hover:text-indigo-600">Home</a></li>
            <li><a href="#features" className="text-gray-600 hover:text-indigo-600">Features</a></li>
            <li>
              <a 
                href="/dashboard" 
                className="text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded"
                data-track="dashboard_click"
              >
                Dashboard
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}