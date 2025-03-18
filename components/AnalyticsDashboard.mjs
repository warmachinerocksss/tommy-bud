'use client';

import { useState, useEffect } from 'react';

export default function AnalyticsDashboard() {
  const [pageViews, setPageViews] = useState(0);
  const [buttonClicks, setButtonClicks] = useState(0);
  const [topReferrers, setTopReferrers] = useState([]);
  const [loading, setLoading] = useState(true);

  // In a real app, you would fetch this data from your API
  useEffect(() => {
    // Simulate loading data
    setTimeout(() => {
      setPageViews(1248);
      setButtonClicks(386);
      setTopReferrers([
        { source: 'Google', count: 523 },
        { source: 'Direct', count: 429 },
        { source: 'Twitter', count: 187 },
        { source: 'LinkedIn', count: 109 },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-600">Loading analytics data...</p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Website Analytics Overview
        </h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          Last 30 days of activity
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className="bg-indigo-50 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-indigo-800">Page Views</h4>
          <p className="text-4xl font-bold mt-2">{pageViews}</p>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-green-800">Button Clicks</h4>
          <p className="text-4xl font-bold mt-2">{buttonClicks}</p>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <h4 className="text-lg font-semibold text-blue-800">Conversion Rate</h4>
          <p className="text-4xl font-bold mt-2">
            {((buttonClicks / pageViews) * 100).toFixed(1)}%
          </p>
        </div>
      </div>
      
      <div className="px-4 py-5 sm:p-6">
        <h4 className="text-lg font-medium text-gray-900 mb-4">Top Referrers</h4>
        <div className="bg-gray-50 p-4 rounded-lg">
          <ul className="divide-y divide-gray-200">
            {topReferrers.map((referrer) => (
              <li key={referrer.source} className="py-3 flex justify-between">
                <span className="text-gray-800">{referrer.source}</span>
                <span className="text-gray-600 font-medium">{referrer.count} visits</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}