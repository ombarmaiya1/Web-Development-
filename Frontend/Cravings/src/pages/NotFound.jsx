import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 px-6">
      <div className="text-center max-w-xl">

        <h1 className="text-9xl font-bold text-orange-700">
          404
        </h1>

        <h2 className="text-4xl font-bold text-gray-800 mt-4">
          Page Not Found
        </h2>

        <p className="text-gray-600 text-lg mt-4">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/"
            className="bg-orange-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-800 transition"
          >
            Go Home
          </Link>

          <Link
            to="/restaurants"
            className="border-2 border-orange-700 text-orange-700 px-6 py-3 rounded-xl font-semibold hover:bg-orange-100 transition"
          >
            Browse Restaurants
          </Link>
        </div>

      </div>
    </div>
  );
}

export default NotFound;