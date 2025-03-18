export default function Footer() {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="text-white">
            <h3 className="text-2xl font-bold">AnalytiX</h3>
            <p className="mt-2 text-gray-300">
              Understand your users. Grow your business.
            </p>
          </div>
          <div>
            <button
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded"
              data-track="contact_click"
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-gray-400 text-sm text-center">
            &copy; 2025 AnalytiX. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}