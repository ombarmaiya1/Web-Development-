// Navbar.jsx

import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-[#B83D0F] h-[65px] flex items-center justify-between px-14 py-0 my-0">
      {/* Logo */}
      <div className="flex items-center">
        <Link to={'/'}>
        <img
          src="https://cravings.ricr.in/assets/transparentLogoLight-De2Z7I01.png"
          alt="Craving Logo"
          className="h-10 object-contain"
        /></Link>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <Link to={"/login"} className="text-white text-l font-small hover:opacity-80 transition">
          Login
        </Link>

        <Link to={"/register"} className="bg-white text-[#B83D0F] px-3 py-1 rounded-md text-l font-small hover:bg-gray-100 transition">
          Register
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;