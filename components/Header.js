/ components/Header.js
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

// components/Hero.js
export default function Hero() {
  return (
    <div className="bg-indigo-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Understand Your Website Visitors
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-500">
            Get real-time insights into user behavior, engagement, and conversion metrics.
          </p>
          <div className="mt-10">
            <a
              href="#features"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
              data-track="learn_more_click"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}