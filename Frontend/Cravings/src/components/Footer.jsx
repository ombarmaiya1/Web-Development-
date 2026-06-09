function Footer() {
  return (
    <footer className="bg-slate-700 text-white">
      
      {/* Top Border */}

      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Tagline */}
        <p className="text-center text-lg text-gray-200 mb-12">
          Your favorite food delivery platform connecting customers,
          restaurants and riders.
        </p>

        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Logo */}
          <div>
            <img
              src="https://cravings.ricr.in/assets/circleLogo-DpCri5UD.png"
              alt="Cravings"
              className="w-36 h-36 rounded-full object-cover bg-white"
            />
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-200">
              <li><a href="/">Home</a></li>
              <li><a href="/">About</a></li>
              <li><a href="/">Order Now</a></li>
            </ul>
          </div>

          {/* Restaurants */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">
              For Restaurants
            </h3>

            <ul className="space-y-3 text-gray-200">
              <li><a href="/">Partner With Us</a></li>
              <li><a href="/">Restaurant Dashboard</a></li>
            </ul>
          </div>

          {/* Riders */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">
              For Riders
            </h3>

            <ul className="space-y-3 text-gray-200">
              <li><a href="/">Become a Rider</a></li>
              <li><a href="/">Rider Dashboard</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">
              Feedback & Support
            </h3>

            <ul className="space-y-3 text-gray-200">
              <li><a href="/">Submit Feedback</a></li>
              <li><a href="/">Help Center</a></li>
              <li><a href="/">Contact Us</a></li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <hr className="my-12 border-gray-500" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-200">

          <p>
            © 2026 Cravings. All rights reserved.
          </p>

          <div className="flex gap-8">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Service</a>
            <a href="/">Site Map</a>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;