// RegisterCard.jsx
import { Link } from "react-router-dom";
const RegisterCard = () => {
  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-orange-700 mb-2">
          Create Account
        </h2>

        <p className="text-gray-500">
          Join us as a Customer, Restaurant, or Rider
        </p>
      </div>

      {/* Role Selection */}
      <div className="mb-6">
        <label className="block font-semibold text-gray-700 mb-3">
          Register as:
        </label>

        <div className="flex gap-6 flex-wrap">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              defaultChecked
              className="accent-orange-700"
            />
            <span>Customer</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              className="accent-orange-700"
            />
            <span>Restaurant</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="role"
              className="accent-orange-700"
            />
            <span>Rider</span>
          </label>
        </div>
      </div>

      {/* Form */}
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Enter your full name"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
        />

        <input
          type="tel"
          placeholder="Enter your phone number"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
        />

        <input
          type="password"
          placeholder="Confirm your password"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
        />

        {/* Terms */}
        <label className="flex items-start gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            className="mt-1 accent-orange-700"
          />

          <span>
            I agree to the{" "}
            <a
              href="/terms"
              className="text-orange-700 hover:underline"
            >
              terms and conditions
            </a>
            .
          </span>
        </label>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-orange-700 hover:bg-orange-800 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          Register
        </button>
      </form>

      {/* Login Link */}
      <div className="text-center mt-6 text-gray-500">
        Already registered?{" "}
        <Link
          to="/login"
          className="text-orange-700 font-semibold hover:underline"
        >
          Login here
        </Link>
      </div>
    </div>
  );
};

export default RegisterCard;