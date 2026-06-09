import { Link } from "react-router-dom";
const LoginCard = () => {
  return (
    <div
      className="min-h-screen flex items-center justify-start mx-25"
    >
      <div className="w-full max-w-lg bg-white rounded-lg shadow-xl p-12 md:p-8">
        {/* Heading */}
        <div className="text-center mb-2">
          <h3 className="text-3xl font-bold text-orange-700 mb-3">
            Welcome Back
          </h3>

          <p className="text-gray-500 text-l">
            Login to your Cravings account
          </p>
        </div>

        {/* Form */}
        <form>
          {/* Email */}
          <div className="mb-3">
            <label className="block text-l font-semibold text-gray-800 mb-3">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-2 py-1 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="block text-xl font-semibold text-gray-800 mb-3">
              Password
            </label>

            <div className="relative">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-2 py-1 text-lg border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-600"
              />
            </div>
          </div>

          {/* Remember & Forgot Password */}
          <div className="flex items-center justify-between mb-8">
            <label className="flex items-center gap-3 text-gray-600">
              <input
                type="checkbox"
                className="w-4 h-4 accent-orange-700"
              />
              Remember me
            </label>

            <a
              href="/forgot-password"
              className="text-orange-700 hover:underline"
            >
              Forgot Password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-orange-700 hover:bg-orange-800 text-white font-bold text-l py-2 rounded-xl transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-1 border-t border-gray-300"></div>

          <span className="px-2 text-gray-500">
            Don't have an account?
          </span>

          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        {/* Register */}
        <div className="text-center">
          <Link
            to="/register"
            className="text-orange-700 font-semibold text-l hover:underline"
          >
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;