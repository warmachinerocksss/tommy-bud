// components/Features.js
export default function Features() {
    const features = [
      {
        title: "Real-time Analytics",
        description: "See user actions as they happen with live dashboard updates.",
        icon: "📊"
      },
      {
        title: "User Journey Tracking",
        description: "Understand the paths users take through your website.",
        icon: "🛤️"
      },
      {
        title: "Conversion Optimization",
        description: "Identify bottlenecks in your conversion funnel.",
        icon: "📈"
      }
    ];
  
    return (
      <div id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Powerful Analytics Features
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Everything you need to understand and optimize your website performance.
            </p>
          </div>
  
          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="pt-6">
                  <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div className="-mt-6">
                      <div>
                        <span className="inline-flex items-center justify-center p-3 bg-indigo-500 rounded-md shadow-lg text-3xl">
                          {feature.icon}
                        </span>
                      </div>
                      <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                        {feature.title}
                      </h3>
                      <p className="mt-5 text-base text-gray-500">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }