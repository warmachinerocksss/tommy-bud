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